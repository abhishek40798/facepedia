import mongoose from 'mongoose';

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

