import { useEffect, useState } from 'react';
import {
  Wrapper,
  SavedFactorTitel,
  CardGrid,
  Saved,
  MorningFactor,
  LunchFactor,
  EveningFactor,
  LateFactor,
} from './SavedInsulinFactorStyels';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';

export default function SavedFactor() {
  const { user } = useAuth0()
  const [factors, setFactors] = useState([]);
  const { t } = useTranslation();
  console.log(user)

  useEffect(() => {
    // Daten von der API abrufen
    async function fetchData() {
      try {
        const response = await fetch(`/api/getInsulinFactor?_id=user.email`); // USER_ID durch die tatsächliche Benutzer-ID ersetzen
        const data = await response.json();
        setFactors(data); // Daten im State speichern
      } catch (error) {
        console.error('Fehler beim Abrufen der Insulinfaktoren:', error);
      }
    }

    fetchData(); // Fetch-Daten beim Laden der Komponente
  }, []);

  return (
    <Wrapper>
      <SavedFactorTitel>
        {t('saved')} <br /> {t('insulinfactor')}
      </SavedFactorTitel>
      <CardGrid>
        {factors.map((items) => {
          return (
            <Saved key={items.id}>
              <MorningFactor>
                {t('factormorning')}: <br /> {items.morningfactor}
              </MorningFactor>
              <br />
              <LunchFactor>
                {t('factornoon')}: <br /> {items.lunchfactor}
              </LunchFactor>
              <br />
              <EveningFactor>
                {t('factorevening')}: <br /> {items.eveningfactor}
              </EveningFactor>
              <br />
              <LateFactor>
                {t('factorlate')}: <br /> {items.latefactor}
              </LateFactor>
            </Saved>
          );
        })}
      </CardGrid>
    </Wrapper>
  );
}
