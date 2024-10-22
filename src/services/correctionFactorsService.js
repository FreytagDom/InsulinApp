// import dbConnect from '../../dbConnect';
import clientPromise from '../lib/mongodb';
import CorrectionFactor from '../models/CorrectionFactor';

export async function getAllCorrectionFactors() {
  await clientPromise();

  const correctionFactors = await CorrectionFactor.find();

  const correctionFactorArray = correctionFactors.map(
    ({
      id,
      morningcorrectionfactor,
      lunchcorrectionfactor,
      eveningcorrectionfactor,
      latecorrectionfactor,
    }) => {
      return {
        id,
        morningcorrectionfactor,
        lunchcorrectionfactor,
        eveningcorrectionfactor,
        latecorrectionfactor,
      };
    }
  );

  return correctionFactorArray;
}

export async function getCorrectionFactorsById(correctionFactorId) {
  await clientPromise();

  const correctionFactor = await CorrectionFactor.findById(correctionFactorId);

  const {
    id,
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor,
  } = correctionFactor;

  return {
    id,
    morningcorrectionfactor,
    lunchcorrectionfactor,
    eveningcorrectionfactor,
    latecorrectionfactor,
  };
}
