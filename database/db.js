import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/bayer_health";

export const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoURI);
    if (connection) {
      console.log("Connected Successfully");
    }
  } catch (error) {
    console.log("Connection Failed", error);
  }
};
