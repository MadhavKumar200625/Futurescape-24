// middleware/connectDB.js

import mongoose from 'mongoose';


let isConnected = false; // track the connection status

export async function connectDB() {
  if (isConnected) {
    
    return true
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    
    return true
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    return false
  }
}