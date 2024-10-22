import mongoose from 'mongoose';

const { Schema } = mongoose;

const correctionSchema = new Schema({
  _id: { type: String, required: true },
  morningcorrectionfactor: { type: Number, required: true },
  lunchcorrectionfactor: { type: Number, required: true },
  eveningcorrectionfactor: { type: Number, required: true },
  latecorrectionfactor: { type: Number, requirde: true },
});

const CorrectionFactor = mongoose.model('CorrectionFactor', correctionSchema);
// ||
// mongoose.model('CorrectionFactor', correctionSchema);

export default CorrectionFactor;
