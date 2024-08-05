import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
export const initMongoConnection = async () => {
  try {
    await 
    mongoose.connect(process.env.MON_USER);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
};