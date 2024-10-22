// import React, { useEffect, useState } from 'react';
// import {
//   Wrapper,
//   CorrectionFactorTitel,
//   EntryForm,
//   LabelFa,
//   DataInputMorning,
//   DataInput,
//   DataInputLate,
//   Button,
// } from './SetCorrectionFactorStyles';
// import {
//   SavedCorrectionFactorTitel,
//   CardGrid,
//   Saved,
//   MorningCorrectionFactor,
//   LunchCorrectionFactor,
//   EveningCorrectionFactor,
//   LateCorrectionFactor,
//   WrapperSaved,
// } from '../SavedCorrectionFactor/SavedCorrectionFactorStyles';
// import { useTranslation } from 'react-i18next';
// import { useAuth0 } from '@auth0/auth0-react';

// const CorrectionFactor: React.FC = () => {
//   const { user } = useAuth0();
//   const { t } = useTranslation();
//   const [correctionfactors, setCorrectionfactors] = useState({
//     morningcorrectionfactor: '',
//     lunchcorrectionfactor: '',
//     eveningcorrectionfactor: '',
//     latecorrectionfactor: '',
//   });

//   // API-Aufruf, um die Korrekturfaktoren beim Laden der Komponente abzurufen
//   useEffect(() => {
//     if (user) {
//       fetch(`http://insulinapp-api.vercel.app/api/correctionfactors/${user.email}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Fehler beim Abrufen der Daten');
//           }
//           return response.json();
//         })
//         .then((data) => {
//           // Setze die Korrekturfaktoren, aber die Eingabefelder bleiben leer
//           setCorrectionfactors(data);
//         })
//         .catch((error) => console.error('Fehler beim Abrufen der Daten:', error));
//     }
//   }, [user]);

//   // Funktion zum Speichern der Korrekturfaktoren über die API
//   const handleSetCorrectionFactor = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const userId = user?.email;

//     try {
//       const response = await fetch(`http://insulinapp-api.vercel.app/api/correctionfactors/${userId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(correctionfactors),
//       });

//       if (!response.ok) {
//         // Falls PUT fehlschlägt, versuche POST
//         const postResponse = await fetch(`http://insulinapp-api.vercel.app/api/correctionfactors/${userId}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(correctionfactors),
//         });

//         if (!postResponse.ok) {
//           throw new Error('Fehler beim Erstellen der Korrekturfaktoren');
//         }
//       }
      
//       // Nach dem Speichern die Korrekturfaktoren zurücksetzen, um die Eingabefelder leer zu halten
//       setCorrectionfactors({
//         morningcorrectionfactor: '',
//         lunchcorrectionfactor: '',
//         eveningcorrectionfactor: '',
//         latecorrectionfactor: '',
//       });
      
      
//       // Hier kannst du einen Fetch machen, um die aktualisierten Daten abzurufen und die Karte zu aktualisieren
//       const updatedResponse = await fetch(`http://insulinapp-api.vercel.app/api/correctionfactors/${userId}`);
//       if (updatedResponse.ok) {
//         const updatedData = await updatedResponse.json();
//         setCorrectionfactors(updatedData);
//       }

//     } catch (error) {
//       console.error('Fehler beim Speichern der Korrekturfaktoren:', error);
//     }
//   };

//   return (
//     <>
//     <Wrapper>
//       <CorrectionFactorTitel>{t('createcorrectionfactor')}</CorrectionFactorTitel>
//       <EntryForm onSubmit={handleSetCorrectionFactor}
//       onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
//       >
//         <LabelFa htmlFor="morningcorrectionfactor" id="morningcorrectionfactor">
//           {t('correctionfactor')} <br /> {t('enter')}
//           <DataInputMorning
//             type="decimal"
//             name="setcorrectionmorningfactor"
//             placeholder={t('correctionfactormorning')}
//             maxLength={3}
//             min={0}
//             inputMode="numeric"
//             required
//             // value={correctionfactors.morningcorrectionfactor || ''}
//             onChange={(e) =>
//               setCorrectionfactors({ ...correctionfactors, morningcorrectionfactor: e.target.value })
//             }
//             // Entferne Pfeile für die Eingabefelder
//             style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
//           />
//           <DataInput
//             type="decimal"
//             name="setcorrectiolunchfactor"
//             placeholder={t('correctionfactornoon')}
//             maxLength={3}
//             min={0}
//             inputMode="numeric"
//             required
//             // value={correctionfactors.lunchcorrectionfactor || ''}
//             onChange={(e) =>
//               setCorrectionfactors({ ...correctionfactors, lunchcorrectionfactor: e.target.value })
//             }
//             // Entferne Pfeile für die Eingabefelder
//             style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
//           />
//           <DataInput
//             type="decimal"
//             name="setcorrectioeveningfactor"
//             placeholder={t('correctionfactorevening')}
//             maxLength={3}
//             min={0}
//             inputMode="numeric"
//             required
//             // value={correctionfactors.eveningcorrectionfactor || ''}
//              onChange={(e) =>
//               setCorrectionfactors({ ...correctionfactors, eveningcorrectionfactor: e.target.value })
//             }
//             // Entferne Pfeile für die Eingabefelder
//             style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
//           />
//           <DataInputLate
//             type="decimal"
//             name="setlatecorrectiofactor"
//             placeholder={t('correctionfactorlate')}
//             maxLength={3}
//             min={0}
//             inputMode="numeric"
//             required
//             // value={correctionfactors.latecorrectionfactor || ''}
//             onChange={(e) =>
//               setCorrectionfactors({ ...correctionfactors, latecorrectionfactor: e.target.value })
//             }
//             // Entferne Pfeile für die Eingabefelder
//             style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
//           />
//         </LabelFa>
//         <Button type="submit">{t('save')}</Button>
//       </EntryForm>
//     </Wrapper>
//     <WrapperSaved>
//       <SavedCorrectionFactorTitel>
//         {t('saved')} <br /> {t('correctionfactor')}
//       </SavedCorrectionFactorTitel>
//       <CardGrid>
//         <Saved>
//           <MorningCorrectionFactor>
//             {t('correctionfactormorning')}: <br />
//             {correctionfactors.morningcorrectionfactor || t('nodata')}
//           </MorningCorrectionFactor>
//           <LunchCorrectionFactor>
//             {t('correctionfactornoon')}: <br />
//             {correctionfactors.lunchcorrectionfactor || t('nodata')}
//           </LunchCorrectionFactor>
//           <EveningCorrectionFactor>
//             {t('correctionfactorevening')}: <br />
//             {correctionfactors.eveningcorrectionfactor || t('nodata')}
//           </EveningCorrectionFactor>
//           <LateCorrectionFactor>
//             {t('correctionfactorlate')}: <br />
//             {correctionfactors.latecorrectionfactor || t('nodata')}
//           </LateCorrectionFactor>
//         </Saved>
//       </CardGrid>
//     </WrapperSaved>
//     </>
//   );
// };

// export default CorrectionFactor;

import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  CorrectionFactorTitel,
  EntryForm,
  LabelFa,
  DataInputMorning,
  DataInput,
  DataInputLate,
  Button,
} from './SetCorrectionFactorStyles';
import {
  SavedCorrectionFactorTitel,
  CardGrid,
  Saved,
  MorningCorrectionFactor,
  LunchCorrectionFactor,
  EveningCorrectionFactor,
  LateCorrectionFactor,
  WrapperSaved,
} from '../SavedCorrectionFactor/SavedCorrectionFactorStyles';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { Popup } from '../GlobalStyle';

const CorrectionFactor: React.FC = () => {
  const { user } = useAuth0();
  const { t } = useTranslation();
  const [correctionfactors, setCorrectionfactors] = useState({
    morningcorrectionfactor: '',
    lunchcorrectionfactor: '',
    eveningcorrectionfactor: '',
    latecorrectionfactor: '',
  });

  // State für das Popup
  const [showPopup, setShowPopup] = useState(false);

  // API-Aufruf, um die Korrekturfaktoren beim Laden der Komponente abzurufen
  useEffect(() => {
    if (user) {
      fetch(`http://insulinapp-api.vercel.app/api/correctionfactors/${user.email}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Fehler beim Abrufen der Daten');
          }
          return response.json();
        })
        .then((data) => {
          setCorrectionfactors(data);
        })
        .catch((error) => console.error('Fehler beim Abrufen der Daten:', error));
    }
  }, [user]);

  // Funktion zum Speichern der Korrekturfaktoren über die API
  const handleSetCorrectionFactor = async (event: React.FormEvent) => {
    event.preventDefault();
    const userId = user?.email;

    try {
      const response = await fetch(`http://insulinapp-api.vercel.app/api/correctionfactors/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(correctionfactors),
      });

      if (!response.ok) {
        // Falls PUT fehlschlägt, versuche POST
        const postResponse = await fetch(`http://insulinapp-api.vercel.app/api/correctionfactors/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(correctionfactors),
        });

        if (!postResponse.ok) {
          throw new Error('Fehler beim Erstellen der Korrekturfaktoren');
        }
      }
      
      // Zeige das Popup an
      setShowPopup(true);

      // Verstecke das Popup nach 3 Sekunden
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      // Nach dem Speichern die Korrekturfaktoren zurücksetzen, um die Eingabefelder leer zu halten
      setCorrectionfactors({
        morningcorrectionfactor: '',
        lunchcorrectionfactor: '',
        eveningcorrectionfactor: '',
        latecorrectionfactor: '',
      });
      
      // Hier kannst du einen Fetch machen, um die aktualisierten Daten abzurufen und die Karte zu aktualisieren
      const updatedResponse = await fetch(`http://insulinapp-api.vercel.app/api/correctionfactors/${userId}`);
      if (updatedResponse.ok) {
        const updatedData = await updatedResponse.json();
        setCorrectionfactors(updatedData);
      }

    } catch (error) {
      console.error('Fehler beim Speichern der Korrekturfaktoren:', error);
    }
  };

  return (
    <>
    <Wrapper>
      <CorrectionFactorTitel>{t('createcorrectionfactor')}</CorrectionFactorTitel>
      <EntryForm onSubmit={handleSetCorrectionFactor}
      onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
      >
        <LabelFa htmlFor="morningcorrectionfactor" id="morningcorrectionfactor">
          {t('correctionfactor')} <br /> {t('enter')}
          <DataInputMorning
            type="decimal"
            name="setcorrectionmorningfactor"
            placeholder={t('correctionfactormorning')}
            maxLength={3}
            min={0}
            inputMode="numeric"
            required
            onChange={(e) =>
              setCorrectionfactors({ ...correctionfactors, morningcorrectionfactor: e.target.value })
            }
            style={{ appearance: 'none', MozAppearance: 'textfield' }} 
          />
          <DataInput
            type="decimal"
            name="setcorrectiolunchfactor"
            placeholder={t('correctionfactornoon')}
            maxLength={3}
            min={0}
            inputMode="numeric"
            required
            onChange={(e) =>
              setCorrectionfactors({ ...correctionfactors, lunchcorrectionfactor: e.target.value })
            }
            style={{ appearance: 'none', MozAppearance: 'textfield' }} 
          />
          <DataInput
            type="decimal"
            name="setcorrectioeveningfactor"
            placeholder={t('correctionfactorevening')}
            maxLength={3}
            min={0}
            inputMode="numeric"
            required
             onChange={(e) =>
              setCorrectionfactors({ ...correctionfactors, eveningcorrectionfactor: e.target.value })
            }
            style={{ appearance: 'none', MozAppearance: 'textfield' }} 
          />
          <DataInputLate
            type="decimal"
            name="setlatecorrectiofactor"
            placeholder={t('correctionfactorlate')}
            maxLength={3}
            min={0}
            inputMode="numeric"
            required
            onChange={(e) =>
              setCorrectionfactors({ ...correctionfactors, latecorrectionfactor: e.target.value })
            }
            style={{ appearance: 'none', MozAppearance: 'textfield' }} 
          />
        </LabelFa>
        <Button type="submit">{t('save')}</Button>
      </EntryForm>

      {/* Popup anzeigen, wenn showPopup true ist */}
      {showPopup && (
        <Popup>
          {t('dataSaved')}
        </Popup>
      )}

    </Wrapper>
    <WrapperSaved>
      <SavedCorrectionFactorTitel>
        {t('saved')} <br /> {t('correctionfactor')}
      </SavedCorrectionFactorTitel>
      <CardGrid>
        <Saved>
          <MorningCorrectionFactor>
            {t('correctionfactormorning')}: <br />
            {correctionfactors.morningcorrectionfactor || t('nodata')}
          </MorningCorrectionFactor>
          <LunchCorrectionFactor>
            {t('correctionfactornoon')}: <br />
            {correctionfactors.lunchcorrectionfactor || t('nodata')}
          </LunchCorrectionFactor>
          <EveningCorrectionFactor>
            {t('correctionfactorevening')}: <br />
            {correctionfactors.eveningcorrectionfactor || t('nodata')}
          </EveningCorrectionFactor>
          <LateCorrectionFactor>
            {t('correctionfactorlate')}: <br />
            {correctionfactors.latecorrectionfactor || t('nodata')}
          </LateCorrectionFactor>
        </Saved>
      </CardGrid>
    </WrapperSaved>
    </>
  );
};

export default CorrectionFactor;



// import {
//   Wrapper,
//   CorrectionFactorTitel,
//   EntryForm,
//   LabelFa,
//   DataInputMorning,
//   DataInput,
//   DataInputLate,
//   Button,
// } from './SetCorrectionFactorStyles';
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// export default function CorrectionFactorEntry({
//   CorrectionFactor,
//   onHandleSetCorrectionfactor,
// }) {
//   const { t } = useTranslation();
//   const [morningcorrectionfactor, setMorningcorrectionfactor] = useState(
//     CorrectionFactor?.morningcorrectionfactor ?? ''
//   );
//   const [lunchcorrectionfactor, setLunchcorrectionfactor] = useState(
//     CorrectionFactor?.lunchcorrectionfactor ?? ''
//   );
//   const [eveningcorrectionfactor, setEveningcorrectionfactor] = useState(
//     CorrectionFactor?.eveningcorrectionfactor ?? ''
//   );
//   const [latecorrectionfactor, setLatecorrectionfactor] = useState(
//     CorrectionFactor?.latecorrectionfactor ?? ''
//   );

//   function handleSetCorrectionFactor(event) {
//     onHandleSetCorrectionfactor(
//       morningcorrectionfactor,
//       lunchcorrectionfactor,
//       eveningcorrectionfactor,
//       latecorrectionfactor
//     );
//     event.preventDefault();
//     setMorningcorrectionfactor('');
//     setLunchcorrectionfactor('');
//     setEveningcorrectionfactor('');
//     setLatecorrectionfactor('');
//     event.target.reset();
//   }

//   return (
//     <>
//       <Wrapper>
//         <CorrectionFactorTitel>
//           {t('createcorrectionfactor')}
//         </CorrectionFactorTitel>
//         <EntryForm
//           onSubmit={handleSetCorrectionFactor}
//           id="correctionfactor"
//           onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
//         >
//           <LabelFa htmlFor="correctionfactor" id="correctionfactor">
//             {t('correctionfactor')} <br /> {t('enter')}
//             <DataInputMorning
//               type="decimal"
//               name="setcorrectionmorningfactor"
//               placeholder={t('correctionfactormorning')}
//               id="setcorrectiomorningfactor"
//               maxLength={'3'}
//               min="0"
//               inputMode="numeric"
//               required
//               onChange={(event) => {
//                 setMorningcorrectionfactor(event.target.value);
//               }}
//             />
//             <DataInput
//               type="decimal"
//               name="setcorrectiolunchfactor"
//               placeholder={t('correctionfactornoon')}
//               id="setcorrectiolunchfactor"
//               maxLength={'3'}
//               min="0"
//               inputMode="numeric"
//               required
//               onChange={(event) => {
//                 setLunchcorrectionfactor(event.target.value);
//               }}
//             />
//             <DataInput
//               type="decimal"
//               name="setcorrectioeveningfactor"
//               placeholder={t('correctionfactorevening')}
//               id="setcorrectioeveningfactor"
//               maxLength={'3'}
//               min="0"
//               inputMode="numeric"
//               required
//               onChange={(event) => {
//                 setEveningcorrectionfactor(event.target.value);
//               }}
//             />
//             <DataInputLate
//               type="decimal"
//               name="setlatecorrectiofactor"
//               placeholder={t('correctionfactorlate')}
//               id="setcorrectiolatefactor"
//               maxLength={'3'}
//               min="0"
//               inputMode="numeric"
//               required
//               onChange={(event) => {
//                 setLatecorrectionfactor(event.target.value);
//               }}
//             />
//           </LabelFa>
//           <Button type="submit">{t('save')}</Button>
//         </EntryForm>
//       </Wrapper>
//     </>
//   );
// }

