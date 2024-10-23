import {
  WrapperSaved,
  SearchData,
  DataInput,
  CardGrid,
  Details,
  Summary,
  Timestampwraper,
  IconWrapper,
  Saved,
  BloodSugar,
  Carbohydrates,
  Insulin,
  Factor,
  InsulinUnits,
  SavedData,
  Button,
  CheckBox,
} from './SavedDataStyles';
import { RiDeleteBinLine, RiLineHeight } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import UserDataToPdf from '../UserDataToPdf/UserDataToPdf';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';


export default function SavedDataInjected() {

  const { user } = useAuth0();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);


  // API-Aufruf, um Benutzerdaten zu laden
  useEffect(() => {
    if (user) {
      fetch(`https://insulinapp-api.vercel.app/api/insulindata?userMail=${user.email}`)
        .then((response) => response.json())
        .then((insulinData) => setData(insulinData));
    }
  }, [user]);

  // Rückgabe, wenn kein Benutzer eingeloggt ist
  if (!user) {
    return <div>Du bist nicht eingeloggt</div>;
  }

  // Daten filtern und sortieren
  const filteredData = data
    .filter((item) => item.userMail === user.email)
    .filter((item) => item.date.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reverse();

  // Daten löschen

// Funktion zum Verwalten der Checkbox-Auswahl
const handleSelectCard = (id) => {
  setSelectedCards((prevSelected) => {
    if (prevSelected.includes(id)) {
      return prevSelected.filter((selectedId) => selectedId !== id);
    } else {
      return [...prevSelected, id];
    }
  });
};

// Funktion zum Löschen ausgewählter Einträge
const removeSelectedCards = async () => {
  for (const id of selectedCards) {
    await removeCard(id); // Ruft die existierende removeCard-Funktion auf
  }

  // Nach dem Löschen: Aktualisiere den State und setze die Auswahl zurück
  setSelectedCards([]);
};

  async function removeCard(id) {
    console.log('Deleting card with ID:', id);

    try {
      const response = await fetch(`https://insulinapp-api.vercel.app/api/insulindata/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Card deleted successfully');

        // Entferne die Karte aus dem State, um die Anzeige zu aktualisieren
        setData(data.filter((item) => item._id !== id));
      } else {
        const errorData = await response.json();
        console.error('Error deleting data:', errorData);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    
    <WrapperSaved> 
      <SavedData>{t('storedvalues')}</SavedData>
      <SearchData>
        <DataInput
          type="text"
          placeholder={t('search')}
          onChange={handleChange}
        />
      </SearchData>
      <UserDataToPdf cardData={data} />
      <Button onClick={removeSelectedCards}>
        {t('deleteSelected')}
      </Button>
      <CardGrid id="pdf-content">
        {filteredData.map((item) => (
          <><Details key={item._id}>
           
          <Summary>
            <CheckBox>
             <DataInput type="checkbox" checked={selectedCards.includes(item._id)} onChange={() => handleSelectCard(item._id)} />
             </CheckBox>
            <Timestampwraper>{item.date}</Timestampwraper>
            <IconWrapper>
              <RiLineHeight />
            </IconWrapper>
          </Summary>
          <Saved>
            <IconWrapper>
              <RiDeleteBinLine onClick={() => removeCard(item._id)} />
            </IconWrapper>
            <BloodSugar>
              {t('bloodsugarlevel')}: <br /> {item.bloodsugar} mg/dl
            </BloodSugar>
            <br />
            <Carbohydrates>
              {t('carbohydrates')}: <br /> {item.carbohydrates} g (Gramm)
            </Carbohydrates>
            <br />
            <Insulin>
              {t('usedinsulin')}: <br /> {item.insulin}
            </Insulin>
            <br />
            <Factor>
              {t('insulinfactor')}: <br /> {item.daytimeFactor}
            </Factor>
            <Factor>
              {t('correctionfactor')}: <br />
              {item.correctionFactor}
            </Factor>
            <InsulinUnits>
              {t('injectedinsulin')}
              <br /> {t('quantity')}: {item.calculateUnit}
            </InsulinUnits>
          </Saved>
        </Details>
      </>
        ))}
      </CardGrid>
    </WrapperSaved>
  );
}
