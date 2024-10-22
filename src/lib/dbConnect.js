import mongoose from 'mongoose';

const { MONGODB_URL } = process.env;

async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.error('Could not connect to MongoDB', error.message);
  }
}

export default dbConnect;
