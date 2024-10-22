// import dbConnect from '../../dbConnect';
import clientPromise from '../lib/mongodb';
import DayTimeFactor from '../models/DayTimeFactor';
// const clientPromise = require('../lib/mongodb').default;

export async function getAllFactors() {
  await clientPromise();

  const daytimeFactors = await DayTimeFactor.find();
  return daytimeFactors.map(
    ({ id, morningfactor, lunchfactor, eveningfactor, latefactor }) => {
      return {
        id,
        morningfactor,
        lunchfactor,
        eveningfactor,
        latefactor,
      };
    }
  );
}

export async function getFactorById(dayTimeFactorId) {
  await clientPromise();

  const dayTimeFactor = await DayTimeFactor.findById(dayTimeFactorId);
  const { id, morningfactor, lunchfactor, eveningfactor, latefactor } =
    dayTimeFactor;

  return { id, morningfactor, lunchfactor, eveningfactor, latefactor };
}
