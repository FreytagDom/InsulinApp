// import dbConnect from '../../dbConnect';
import clientPromise from '../lib/mongodb';
import DayTimeFactor from '../models/DayTimeFactor';

export async function getAllDayFactors() {
  await clientPromise();
  // console.log(dbConnect);
  const daytimeFactors = await DayTimeFactor.find();

  const factorArray = daytimeFactors.map(
    ({ id, morningfactor, lunchfactor, eveningfactor, latefactor }) => {
      return { id, morningfactor, lunchfactor, eveningfactor, latefactor };
    }
  );
  return factorArray;
}

export async function getDayFactorById(daytimeFactorId) {
  await clientPromise();

  const daytimeFactors = await DayTimeFactor.findById(daytimeFactorId);

  const { id, morningfactor, lunchfactor, eveningfactor, latefactor } =
    daytimeFactors;

  return { id, morningfactor, lunchfactor, eveningfactor, latefactor };
}
