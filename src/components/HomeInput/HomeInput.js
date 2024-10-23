// import { useState, Fragment, useEffect } from 'react';
// import React from 'react';
// import {
//   EntryForm,
//   LabelBz,
//   BloodDrop,
//   Blood,
//   DataInput,
//   LabelCa,
//   Carbohydrates,
//   Donut,
//   LabelIu,
//   InsulinSelect,
//   InsulinOption,
//   LabelFa,
//   FactorSelect,
//   FactorOption,
//   Button,
//   InsulinUnits,
//   FullInject,
//   EmptyInject,
// } from './HomeInputStyles';
// import leereSpritze from '../../public/leereSpritze.png';
// import volleSpritze from '../../public/volleSpritze.png';
// import blood from '../../public/blood.PNG';
// import blooddrop from '../../public/blooddrop.PNG';
// import carbohydrates from '../../public/carbohydrates.png';
// import donut from '../../public/donut.png';
// import handleInsulinUnit from '../../utils/calculate';
// import handelCorretion from '../../utils/handleCorrectionFactor';
// import UserCorrectionFactor from '../../handler/getCorrectionFactor';
// import handleUserDayFactor from '../../handler/getDayFactor';
// import { useTranslation } from 'react-i18next';
// // import { useSession } from 'next-auth/react';
// import { useAuth0 } from '@auth0/auth0-react';
// import {  UseCorrectionFactorById } from '../../pages/api/getCorrectionFactor'


// export default function Input() {
//   // const { data: session } = useSession();
//   const { t } = useTranslation();
//   const [value, setValue] = useState();
//   // const [data, setData] = useState([]);
//   const { user, isLoading } = useAuth0();
//    const id = user.email
//    const { correctionFactor }  = UseCorrectionFactorById(id);
//    const correctionfactors = correctionFactor
//    const [factors, setFactors] = useState([]);
//    const handleUserCorrectionFactor = UserCorrectionFactor
  
//  console.log(correctionfactors)



//   useEffect(() => {
//   if (id) {
//     Promise.all([
//       fetch(`http://localhost:5001/api/dayTimeFactors/${id}`).then((res) => res.json()),
   
//     ]).then(([factorData]) => {
//       setFactors(factorData);
   
//     });
    
//   }
// }, [id]);

  
//   if (!user) {
//     return <div>Du bist nicht eingeloggt</div>;
//   }
  
//   if (isLoading || !user) return null;


 
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const bloodsugar = form.bloodsugar.value;
//     const carbohydrates = form.carbohydrates.value;
//     const insulin = form.setinsulinSelect.value;
//     const daytimeFactor = handleUserDayFactor( factors).props.value;
//     const correctionFactor = handelCorretion(
//       bloodsugar,
//       handleUserCorrectionFactor( correctionfactors)
//     );
//     const calculateUnits = handleInsulinUnit(
//       bloodsugar,
//       carbohydrates,
//       daytimeFactor,
//       correctionFactor
//     );
//     const userMail = user.email;
//     setValue(calculateUnits);

//     // const date = new Date().toLocaleString();

//     const currentDate = new Date();
//     const date = currentDate.toLocaleString('de-DE', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//     });

//     const cardData = {
//       userMail: userMail,
//       bloodsugar: bloodsugar,
//       carbohydrates: carbohydrates,
//       insulin: insulin,
//       daytimeFactor: daytimeFactor,
//       correctionFactor: correctionFactor,
//       calculateUnit: calculateUnits,
//       date: date,
//     };

//     const response = await fetch('/api/setInsulinDatas', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(cardData),
//     });
//     form.reset();
//   }

//   const options = [
//     { value: 'Fiasp', label: 'Fiasp' },
//     { value: 'Hum Normal', label: 'Hum Normal' },
//   ];
//   if (user) return (factors)
//   return (
//     <>
//       <EntryForm
//         onSubmit={handleSubmit}
//         onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
//       >
//         <LabelBz htmlFor="bloodsugar">
//           {t('bloodsugar')} <br />
//           mg/dl
//           <BloodDrop src={blooddrop} alt="blooddrop" />
//           <Blood src={blood} alt="blood" />
//           <DataInput
//             type="decimal"
//             name="bloodsugar"
//             placeholder={t('currentbloodglucosevalue')}
//             id="bloodsugar"
//             min="0"
//             key="bloodsugar"
//             inputMode="numeric"
//             maxLength={3}
//             required
//           />
//         </LabelBz>
//         <LabelCa htmlFor="carbohydrates">
//           {t('carbohydrates')} (Khd) <br /> g (Gramm)
//           <Carbohydrates src={carbohydrates} alt="carbohydrates" />
//           <Donut src={donut} alt="donut" />
//           <DataInput
//             type="decimal"
//             name="carbohydrates"
//             placeholder={t('howmanyKhd65g')}
//             id="carbohydrates"
//             maxLength={'3'}
//             key="carbohydrates"
//             min="0"
//             inputMode="numeric"
//             required
//           />
//         </LabelCa>
//         <Fragment>
//           <LabelIu htmlFor="insulin">
//             {t('whichinsulin1')} <br /> {t('whichinsulin2')}
//             <InsulinSelect
//               htmlFor="setinsulin"
//               name="setinsulinSelect"
//               id={InsulinOption.id}
//             >
//               <InsulinOption placeholder={t('chooseinsulin')}>
//                 {t('chooseinsulin')}
//               </InsulinOption>
//               {options.map((option) => (
//                 <InsulinOption
//                   name="insulinOption"
//                   key={option.label}
//                   value={option.value}
//                 >
//                   {option.label}
//                 </InsulinOption>
//               ))}
//             </InsulinSelect>
//           </LabelIu>
//         </Fragment>
//         <Button type="submit">{t('confirm')}</Button>
//         <InsulinUnits
//           htmlFor="insulinunits"
//           id="calculateUnits"
//           key="calculateUnits"
//           name="calculateUnits"
//         >
//           {value} / {t('injectunits')} <br /> {t('ofinsulin')}
//           <FullInject src={volleSpritze} alt="" />
//           <EmptyInject src={leereSpritze} alt="" />
//         </InsulinUnits>
//         <Fragment>
//           <LabelFa htmlFor="factor">
//             {t('daytimefactor')}
//             <FactorSelect
//               htmlFor="setdayfactor"
//               name="dayfactorSelect"
//               id={handleUserDayFactor(user, factors).props.name}
//               value={handleUserDayFactor(user, factors).props.value}
//               key='daytimefactor'
//               options
//             >
//               <FactorOption
//                 name={handleUserDayFactor(user, factors).props.name}
//                 id={handleUserDayFactor(user, factors)}
//                 value={handleUserDayFactor(user, factors).props.value}
//               >
//                 {t('insulinfactor')}{' '}
//                 {handleUserDayFactor(user, factors).props.value}
//               </FactorOption>
//             </FactorSelect>
//             <FactorSelect
//               htmlFor="setcorrectionfactor"
//               name="correctionfactorSelect"
//               id={
//                 handleUserCorrectionFactor(user, correctionfactors).props.name
//               }
//               value={
//                 handleUserCorrectionFactor(user, correctionfactors).props.value
//               }
//               key='correctionfactor'
//               options
//             >
//               <FactorOption
//                 name={
//                   handleUserCorrectionFactor(user, correctionfactors).props.name
//                 }
//                 id={handleUserCorrectionFactor(user, correctionfactors).props}
//                 value={
//                   handleUserCorrectionFactor(user, correctionfactors).props
//                     .value
//                 }
//               >
//                 {t('correction')}{' '}
//                 {
//                   handleUserCorrectionFactor(user, correctionfactors).props
//                     .value
//                 }
//               </FactorOption>
//             </FactorSelect>
//           </LabelFa>
//         </Fragment>
//       </EntryForm>
//     </>
//   );
// }


import { useState, Fragment } from 'react';
import {
  EntryForm,
  LabelBz,
  BloodDrop,
  Blood,
  DataInput,
  LabelCa,
  Carbohydrates,
  Donut,
  LabelIu,
  InsulinSelect,
  InsulinOption,
  LabelFa,
  FactorSelect,
  FactorOption,
  Button,
  InsulinUnits,
  FullInject,
  EmptyInject,
} from './HomeInputStyles';
import leereSpritze from '../../public/leereSpritze.png';
import volleSpritze from '../../public/volleSpritze.png';
import blood from '../../public/blood.PNG';
import blooddrop from '../../public/blooddrop.PNG';
import carbohydrates from '../../public/carbohydrates.png';
import donut from '../../public/donut.png';
import handleInsulinUnit from '../../utils/calculate';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { UseCorrectionFactorById } from '../../pages/api/getCorrectionFactor';
import { UseInsulinFactorById } from '../../pages/api/getInsulinFactor';


export default function Input() {
  const { user, isLoading } = useAuth0();
  // const id = user?.email;
  const { t } = useTranslation();
  const [value, setValue] = useState();
  // const [factors, setFactors] = useState([]);
  // const [correctionFactors, setCorrectionFactors] = useState([]);

  const {correctionFactors } = UseCorrectionFactorById()
  console.log(correctionFactors)

  const { insulinFactor } = UseInsulinFactorById()
  console.log(insulinFactor)

  // Abrufen der Tageszeitfaktoren
  // useEffect(() => {
  //   if (id) {
  //     fetch(`http://localhost:5001/api/dayTimeFactors/${id}`)
  //       .then((res) => res.json())
  //       .then((factorData) => setFactors(factorData));
  //   }
  // }, [id]);

  // Abrufen der Korrekturfaktoren
  // useEffect(() => {
  //   if (id) {
  //     fetch(`http://localhost:5001/api/correctionfactors/${id}`)
  //       .then((res) => res.json())
  //       .then((correctionFactorData) => setCorrectionFactors(correctionFactorData));
  //   }
  // }, [id]);

  if (isLoading || !user) return null;

  // Funktion zum Abrufen des aktuellen Tageszeitfaktors
  function handleUserDayFactor(insulinFactor) {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 11) {
      return insulinFactor?.morningfactor || 1;
    } else if (currentHour >= 11 && currentHour < 17) {
      return insulinFactor?.lunchfactor || 1;
    } else if (currentHour >= 17 && currentHour < 22) {
      return insulinFactor?.eveningfactor || 1;
    } else  {
      return insulinFactor?.latefactor || 1;
    }
  }

  // Funktion zum Abrufen des aktuellen Korrekturfaktors
  function handleUserCorrectionFactor(correctionFactors) {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 11) {
      return correctionFactors?.morningcorrectionfactor || 1;
    } else if (currentHour >= 11 && currentHour < 17) {
      return correctionFactors?.lunchcorrectionfactor || 1;
    } else if (currentHour >= 17 && currentHour < 22) {
      return correctionFactors?.eveningcorrectionfactor || 1;
    } else  {
      return correctionFactors?.latecorrectionfactor || 1;
    }
  }

  // Form-Submit-Handler
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const bloodsugar = form.bloodsugar.value;
    const carbohydrates = form.carbohydrates.value;
    const insulin = form.setinsulinSelect.value;

    const daytimeFactor = handleUserDayFactor(insulinFactor);
    const correctionFactor = handleUserCorrectionFactor(correctionFactors);

    // Verwende die Berechnungsfunktion
    const calculateUnits = handleInsulinUnit(bloodsugar, carbohydrates, daytimeFactor, correctionFactor);

    // Setze das Ergebnis
    setValue(calculateUnits);

    const cardData = {
      userMail: user.email,
      bloodsugar: bloodsugar,
      carbohydrates: carbohydrates,
      insulin: insulin,
      daytimeFactor: daytimeFactor,
      correctionFactor: correctionFactor,
      calculateUnit: calculateUnits,
      date: new Date().toLocaleString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    const response = await fetch('http://insulinapp-api.vercel.app/api/insulindata', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cardData),
    });

    form.reset();
  }

  // Rest des Codes bleibt unverändert...



// export default function Input() {
//   const { user, isLoading } = useAuth0();
//   const id = user?.email;
//   const { t } = useTranslation();
//   const [value, setValue] = useState();
//   const [factors, setFactors] = useState([]);
//   const [correctionFactors, setCorrectionFactors] = useState([]);

//   // Abrufen der Tageszeitfaktoren
//   useEffect(() => {
//     if (id) {
//       fetch(`http://localhost:5001/api/dayTimeFactors/${id}`)
//         .then((res) => res.json())
//         .then((factorData) => setFactors(factorData));
//     }
//   }, [id]);

//   // Abrufen der Korrekturfaktoren
//   useEffect(() => {
//     if (id) {
//       fetch(`http://localhost:5001/api/correctionfactors/${id}`)
//         .then((res) => res.json())
//         .then((correctionFactorData) => setCorrectionFactors(correctionFactorData));
//     }
//   }, [id]);

//   if (isLoading || !user) return null;

//   // Funktion zum Abrufen des aktuellen Tageszeitfaktors
//   function handleUserDayFactor(factors) {
//     const currentHour = new Date().getHours();
//     if (currentHour >= 6 && currentHour < 11) {
//       return factors?.morningfactor || 1;
//     } else if (currentHour >= 11 && currentHour < 17) {
//       return factors?.lunchfactor || 1;
//     } else if (currentHour >= 17 && currentHour < 22) {
//       return factors?.eveningfactor || 1;
//     } else if (currentHour >= 22 && currentHour < 6) {
//       return factors?.latefactor || 1;
//     }
//   }

//   // Funktion zum Abrufen des aktuellen Korrekturfaktors
//   function handleUserCorrectionFactor(correctionFactors) {
//     const currentHour = new Date().getHours();
//     if (currentHour >= 6 && currentHour < 11) {
//       return correctionFactors?.morningcorrectionfactor || 1;
//     } else if (currentHour >= 11 && currentHour < 17) {
//       return correctionFactors?.lunchcorrectionfactor || 1;
//     } else if (currentHour >= 17 && currentHour < 22) {
//       return correctionFactors?.eveningcorrectionfactor || 1;
//     } else if (currentHour >= 22 && currentHour < 6) {
//       return correctionFactors?.latecorrectionfactor || 1;
//     }
//   }

//   // Form-Submit-Handler
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const bloodsugar = form.bloodsugar.value;
//     const carbohydrates = form.carbohydrates.value;
//     const insulin = form.setinsulinSelect.value;

//     const daytimeFactor = handleUserDayFactor(factors);
//     const correctionFactor = handleUserCorrectionFactor(correctionFactors);

//     const calculateUnits = handleInsulinUnit(bloodsugar, carbohydrates, daytimeFactor, correctionFactor);

//     setValue(calculateUnits);

//     const cardData = {
//       userMail: user.email,
//       bloodsugar: bloodsugar,
//       carbohydrates: carbohydrates,
//       insulin: insulin,
//       daytimeFactor: daytimeFactor,
//       correctionFactor: correctionFactor,
//       calculateUnit: calculateUnits,
//       date: new Date().toLocaleString('de-DE', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//       }),
//     };

//     const response = await fetch('/api/getData', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(cardData),
//     });

//     form.reset();
//   }
  const options = [
         { value: 'Fiasp', label: 'Fiasp' },
         { value: 'Hum Normal', label: 'Hum Normal' },
       ];

  return (
    <>
      <EntryForm
        onSubmit={handleSubmit}
        onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
      >
        {/* Blutzucker */}
        <LabelBz htmlFor="bloodsugar">
        {t('bloodsugar')} <br />
                   mg/dl
          <BloodDrop src={blooddrop} alt="blooddrop" />
          <Blood src={blood} alt="blood" />
          <DataInput
            type="decimal"
            name="bloodsugar"
            placeholder={t('currentbloodglucosevalue')}
            id="bloodsugar"
            min={0}
            inputMode="numeric"
            maxLength={3}
            required
          />
        </LabelBz>

        {/* Kohlenhydrate */}
        <LabelCa htmlFor="carbohydrates">
        {t('carbohydrates')} (Khd) <br /> g (Gramm)
          <Carbohydrates src={carbohydrates} alt="carbohydrates" />
          <Donut src={donut} alt="donut" />
          <DataInput
            type="decimal"
            name="carbohydrates"
            placeholder={t('howmanyKhd65g')}
            id="carbohydrates"
            maxLength={3}
            min={0}
            inputMode="numeric"
            required
          />
        </LabelCa>

        {/* Insulin */}
        <Fragment>
        <LabelIu htmlFor="insulin">
             {t('whichinsulin1')} <br /> {t('whichinsulin2')}
             <InsulinSelect
              htmlFor="setinsulin"
              name="setinsulinSelect"
              id={InsulinOption.id}
            >
              <InsulinOption placeholder={t('chooseinsulin')}>
                {t('chooseinsulin')}
              </InsulinOption>
              {options.map((option) => (
                <InsulinOption
                  name="insulinOption"
                  key={option.label}
                  value={option.value}
                >
                  {option.label}
                </InsulinOption>
              ))}
            </InsulinSelect>
          </LabelIu>
          {/* <LabelIu htmlFor="insulin"> {t('chooseinsulin')}</LabelIu>
          <InsulinSelect name="setinsulinSelect">
            <InsulinOption>{t('chooseinsulin')}</InsulinOption>
            <InsulinOption value="Fiasp">Fiasp</InsulinOption>
            <InsulinOption value="Hum Normal">Hum Normal</InsulinOption>
          </InsulinSelect> */}
        </Fragment>
        <InsulinUnits
          htmlFor="insulinunits"
          id="calculateUnits"
          key="calculateUnits"
          name="calculateUnits"
        >
          {value} / {t('injectunits')} <br /> {t('ofinsulin')}
          <FullInject src={volleSpritze} alt="" />
          <EmptyInject src={leereSpritze} alt="" />
        </InsulinUnits>
        {/* Bestätigen-Button */}
        <Button type="submit">{t('confirm')}</Button>

        {/* Ergebnis */}
        {/* <InsulinUnits>{value ? `${value} Einheiten Insulin` : ''}</InsulinUnits> */}
        <Fragment>
         <LabelFa htmlFor="factor">
        {/* Tageszeitfaktor anzeigen */}
        {t('daytimefactor')}
        <FactorSelect
          htmlFor="setdayfactor"
          name="dayfactorSelect"
          id="dayfactorSelect"
          value={handleUserDayFactor(insulinFactor)}  // Wert direkt setzen
          key="daytimefactor"
        >
        <FactorOption
        name="dayfactorOption"
        value={handleUserDayFactor(insulinFactor)}  // Option mit Wert füllen
        >
        {t('insulinfactor')} {handleUserDayFactor(insulinFactor)} {/* Anzeige */}
        </FactorOption>
        </FactorSelect>

      {/* Korrekturfaktor anzeigen */}
      <FactorSelect
        htmlFor="setcorrectionfactor"
        name="correctionfactorSelect"
        id="correctionfactorSelect"
        value={handleUserCorrectionFactor(correctionFactors)}  // Wert direkt setzen
        key="correctionfactor"
      >
      <FactorOption
        name="correctionfactorOption"
        value={handleUserCorrectionFactor(correctionFactors)}  // Option mit Wert füllen
      >
        {t('correction')} {handleUserCorrectionFactor(correctionFactors)} {/* Anzeige */}
      </FactorOption>
      </FactorSelect>
      </LabelFa>
        </Fragment>
      </EntryForm>
    </>
  );
}
