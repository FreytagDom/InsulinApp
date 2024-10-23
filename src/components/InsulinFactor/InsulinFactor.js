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

// const InsulinFactors: React.FC = () => {
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
//       fetch(`http://localhost:5001/api/correctionfactors/${user.email}`)
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
//   const handleSetFactor = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const userId = user?.email;

//     try {
//       const response = await fetch(`http://localhost:5001/api/correctionfactors/${userId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(correctionfactors),
//       });

//       if (!response.ok) {
//         // Falls PUT fehlschlägt, versuche POST
//         const postResponse = await fetch(`http://localhost:5001/api/correctionfactors/${userId}`, {
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
//       const updatedResponse = await fetch(`http://localhost:5001/api/correctionfactors/${userId}`);
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
//       <InsulinFactor>{t('createinsulinfactor')}</InsulinFactor>
//       <EntryForm onSubmit={handleSetFactor}>
//         <LabelFa htmlFor="factor" id="insulinfactor">
//           {t('daytimefactor')} <br /> {t('enter')}
//           <DataInputMorning
//             type="decimal"
//             name="setedmorningfactor"
//             placeholder={t('factormorning')}
//             maxLength={3}
//             min="0"
//             inputMode="numeric"
//             required
//             // value={correctionfactors.morningcorrectionfactor || ''}
//             // onChange={(e) =>
//             //   setCorrectionfactors({ ...correctionfactors, morningcorrectionfactor: e.target.value })
//             // }
//             // Entferne Pfeile für die Eingabefelder
//             style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
//           />
//           <DataInput
//             type="number"
//             name="setedlunchfactor"
//             placeholder={t('factornoon')}
//             maxLength={3}
//             min="0"
//               inputMode="numeric"
//               required
//             // value={correctionfactors.lunchcorrectionfactor || ''}
//             // onChange={(e) =>
//             //   setCorrectionfactors({ ...correctionfactors, lunchcorrectionfactor: e.target.value })
//             // }
//             // Entferne Pfeile für die Eingabefelder
//             style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
//           />
//           <DataInput
//             type="number"
//             name="seteveningfactor"
//             placeholder={t('factorevening')}
//             maxLength={3}
//             // value={correctionfactors.eveningcorrectionfactor || ''}
//             // onChange={(e) =>
//             //   setCorrectionfactors({ ...correctionfactors, eveningcorrectionfactor: e.target.value })
//             // }
//             // Entferne Pfeile für die Eingabefelder
//             style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
//           />
//           <DataInputLate
//             type="number"
//             name="latefactor"
//             placeholder={t('factorlatee')}
//             maxLength={3}
//             // value={correctionfactors.latecorrectionfactor || ''}
//             // onChange={(e) =>
//             //   setCorrectionfactors({ ...correctionfactors, latecorrectionfactor: e.target.value })
//             // }
//             // Entferne Pfeile für die Eingabefelder
//             style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
//           />
//         </LabelFa>
//         <Button type="submit">{t('save')}</Button>
//       </EntryForm>
//     </Wrapper>
//     <WrapperSaved>
//       <SavedFactorTitel>
//         {t('saved')} <br /> {t('insulinfactor')}
//       </SavedFactorTitel>
//       <CardGrid>
//         <Saved>
//           <MorningFactor>
//             {t('factormorning')}: <br />
//             {correctionfactors.morningfactor || t('nodata')}
//           </MorningFactor>
//           <LunchFactor>
//             {t('factornoon')}: <br />
//             {correctionfactors.lunchfactor || t('nodata')}
//           </LunchFactor>
//           <EveningFactor>
//             {t('factorevening')}: <br />
//             {correctionfactors.eveningfactor || t('nodata')}
//           </EveningFactor>
//           <LateFactor>
//             {t('factorlate')}: <br />
//             {correctionfactors.latefactor || t('nodata')}
//           </LateFactor>
//         </Saved>
//       </CardGrid>
//     </WrapperSaved>
//     </>
//   );
// };

// export default InsulinFactors;


import React, { useEffect, useState } from 'react';
import {
    WrapperSaved,
    SavedFactorTitel,
    CardGrid,
    Saved,
    MorningFactor,
    LunchFactor,
    EveningFactor,
    LateFactor,
  } from './SavedInsulinFactorStyels'; // Deine spezifischen Styles für Insulinfaktoren
import {
    Wrapper,
    InsulinFactorTitle,
    EntryForm,
    LabelFa,
    DataInputMorning,
    DataInput,
    DataInputLate,
    Button,
  } from './SetInsulinFactorStyles'; // Deine gespeicherten Insulinfaktor Styles
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';

const InsulinFactor: React.FC = () => {
  const { user } = useAuth0();
  const { t } = useTranslation();
  const [insulinfactors, setInsulinFactors] = useState({
    morningfactor: '',
    lunchfactor: '',
    eveningfactor: '',
    latefactor: '',
  });

  // API-Aufruf, um die Insulinfaktoren beim Laden der Komponente abzurufen
  useEffect(() => {
    if (user) {
      fetch(`https://insulinapp-api.vercel.app/api/daytimefactors/${user.email}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Fehler beim Abrufen der Daten');
          }
          return response.json();
        })
        .then((data) => {
          // Setze die Insulinfaktoren, aber die Eingabefelder bleiben leer
          setInsulinFactors(data);
        })
        .catch((error) => console.error('Fehler beim Abrufen der Daten:', error));
    }
  }, [user]);

  // Funktion zum Speichern der Insulinfaktoren über die API
  const handleSetInsulinFactor = async (event: React.FormEvent) => {
    event.preventDefault();
    const userId = user?.email;

    try {
      const response = await fetch(`https://insulinapp-api.vercel.app/api/daytimefactors/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(insulinfactors),
      });

      if (!response.ok) {
        // Falls PUT fehlschlägt, versuche POST
        const postResponse = await fetch(`https://insulinapp-api.vercel.app/api/daytimefactors/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(insulinfactors),
        });

        if (!postResponse.ok) {
          throw new Error('Fehler beim Erstellen der Insulinfaktoren');
        }
      }

      // Nach dem Speichern die Insulinfaktoren zurücksetzen, um die Eingabefelder leer zu halten
      setInsulinFactors({
        morningfactor: '',
        lunchfactor: '',
        eveningfactor: '',
        latefactor: '',
      });

      // Aktualisierte Daten abrufen und die Karte aktualisieren
      const updatedResponse = await fetch(`https://insulinapp-api.vercel.app/api/daytimefactors/${userId}`);
      if (updatedResponse.ok) {
        const updatedData = await updatedResponse.json();
        setInsulinFactors(updatedData);
      }

    } catch (error) {
      console.error('Fehler beim Speichern der Insulinfaktoren:', error);
    }
  };

  return (
    <>
    <Wrapper>
      <InsulinFactorTitle>{t('createinsulinfactor')}</InsulinFactorTitle>
      <EntryForm onSubmit={handleSetInsulinFactor}
      onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
      >
        <LabelFa htmlFor="factor" id="insulinfactor">
          {t('daytimefactor')} <br /> {t('enter')}
          <DataInputMorning
            type="decimal"
            name="setedmorningfactor"
            placeholder={t('factormorning')}
            maxLength={3}
            min={0}
            inputMode="numeric"
           required
            // value={insulinfactors.morningfactor || ''}
            onChange={(e) =>
              setInsulinFactors({ ...insulinfactors, morningfactor: e.target.value })
            }
            style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
          />
          <DataInput
            type="decimal"
            name="setedlunchfactor"
            placeholder={t('factornoon')}
            maxLength={3}
            min={0}
            inputMode="numeric"
            required
            // value={insulinfactors.lunchfactor || ''}
            onChange={(e) =>
              setInsulinFactors({ ...insulinfactors, lunchfactor: e.target.value })
            }
            // style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
          />
          <DataInput
            type="decimal"
            name="seteveningfactor"
            placeholder={t('factorevening')}
            maxLength={3}
            min={0}
            inputMode="numeric"
            required
            
            // value={insulinfactors.eveningfactor || ''}
            onChange={(e) =>
              setInsulinFactors({ ...insulinfactors, eveningfactor: e.target.value })
            }
            style={{ appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
          />
          <DataInputLate
            type="decimal"
            name="latefactor"
            placeholder={t('factorlate')}
            maxLength={3}
            min={0}
            inputMode="numeric"
            required
            // value={insulinfactors.lateinsulinfactor || ''}
            onChange={(e) =>
              setInsulinFactors({ ...insulinfactors, latefactor: e.target.value })
            }
            style={{ backgroundColor: 'transparent', appearance: 'none', MozAppearance: 'textfield' }} // Entfernt die Pfeile in modernen Browsern
          />
        </LabelFa>
        <Button type="submit">{t('save')}</Button>
      </EntryForm>
      </Wrapper>
    <WrapperSaved>
      <SavedFactorTitel>
        {t('saved')} <br /> {t('insulinfactor')}
      </SavedFactorTitel>
      <CardGrid>
        <Saved>
          <MorningFactor>
            {t('factormorning')}: <br />
            {insulinfactors.morningfactor || t('nodata')}
          </MorningFactor>
          <LunchFactor>
            {t('factornoon')}: <br />
            {insulinfactors.lunchfactor || t('nodata')}
          </LunchFactor>
          <EveningFactor>
            {t('factorevening')}: <br />
            {insulinfactors.eveningfactor || t('nodata')}
          </EveningFactor>
          <LateFactor>
            {t('factorlate')}: <br />
            {insulinfactors.latefactor || t('nodata')}
          </LateFactor>
        </Saved>
      </CardGrid>
    </WrapperSaved>
    </>
  );
};

export default InsulinFactor;
