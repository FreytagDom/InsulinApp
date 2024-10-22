export default function handleInsulinUnit(
  bloodsugar,
  carbohydrates,
  daytimeFactor,
  correctionFactor
) {
 
  let calculateUnit;
  if (bloodsugar < 100) { calculateUnit  =  (carbohydrates / daytimeFactor ).toFixed(1); }
  else { calculateUnit =  ( (bloodsugar - 100) / correctionFactor +
  carbohydrates / daytimeFactor
).toFixed(1); }
 
  return calculateUnit;

}

//utils/calculate.js
// export default function handleInsulinUnit(
//   bloodsugar,
//   carbohydrates,
//   daytimeFactor,
//   correctionFactor
// ) {
//   let calculateUnit;

//   // Wenn der Blutzucker unter 100 mg/dl ist
//   if (bloodsugar < 100) {
//     calculateUnit = (carbohydrates / daytimeFactor).toFixed(1);
//   } else {
//     // Blutzucker > 100 mg/dl: Korrektur des Blutzuckers und Berechnung der Insulindosis
//     calculateUnit = (
//       (bloodsugar - 100) / correctionFactor +
//       carbohydrates / daytimeFactor
//     ).toFixed(1);
//   }

//   return calculateUnit;
// }
