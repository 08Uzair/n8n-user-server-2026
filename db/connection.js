import mongoose from "mongoose";

const URI = "mongodb+srv://n8n_user:n8n_user@cluster0.2ayjvzo.mongodb.net/?appName=Cluster0";

export const dataBaseConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DATABASE IS CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
