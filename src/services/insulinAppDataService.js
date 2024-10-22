// import dbConnect from '../../dbConnect';
import clientPromise from '../lib/mongodb';
import SavedInsulinData from '../models/InsulinApp';

export async function getAllCategories() {
  await clientPromise();

  const savedInsulinData = await SavedInsulinData.find();

  return savedInsulinData.map(
    ({
      id,
      userMail,
      bloodsugar,
      carbohydrates,
      insulin,
      daytimeFactor,
      correctionFactor,
      calculateUnit,
      date,
    }) => {
      return {
        id,
        userMail,
        bloodsugar,
        carbohydrates,
        insulin,
        daytimeFactor,
        correctionFactor,
        calculateUnit,
        date,
      };
    }
  );
}

export async function getCategoryById(savedInsulinId) {
  await clientPromise();

  const savedInsulin = await SavedInsulinData.findById(savedInsulinId);

  const {
    id,
    userMail,
    bloodsugar,
    carbohydrates,
    insulin,
    factor,
    correctionFactor,
    calculateUnits,
    date,
  } = savedInsulin;

  return {
    id,
    userMail,
    bloodsugar,
    carbohydrates,
    insulin,
    factor,
    correctionFactor,
    calculateUnits,
    date,
  };
}
