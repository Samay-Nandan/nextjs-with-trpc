import mongoose from "mongoose";
import { MONGO_URI } from "@server/constants";
import { handleError } from "@server/utils/error";

export const connectToDatabase = async () => {
  if (!MONGO_URI)
    throw new Error("The MONGO_URI environment variable is not defined.");

  try {
    await mongoose.connect(MONGO_URI);

    console.log("Successfully connected to the database.");
  } catch (error) {
    handleError(`Unknown error connecting Mongo DB`, error);
  }
};
