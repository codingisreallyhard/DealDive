import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(
      "mongodb+srv://fgconstantin999:H1e6z9vvlBjgCH2u@cluster0.pe2jasg.mongodb.net/?retryWrites=true&w=majority"
    );

    isConnected = true;

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
