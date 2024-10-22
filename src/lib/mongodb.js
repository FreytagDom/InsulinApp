// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URL; // Setze deine MongoDB Atlas URI hier ein
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URL) {
  throw new Error('Please add your MongoDB URI to .env.local');
}
console.log('verbunden')

if (process.env.NODE_ENV === 'development') {
  // Im Entwicklungsmodus wird der Client in einer globalen Variable zwischengespeichert
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Im Produktionsmodus wird ein neuer Client erstellt
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// import mongoose from 'mongoose';

// const { MONGODB_URL } = process.env;

// async function clientPromise() {
//   try {
//     await mongoose.connect(MONGODB_URL);
//   } catch (error) {
//     console.error('Could not connect to MongoDB', error.message);
//   }
// }

// export default clientPromise;

