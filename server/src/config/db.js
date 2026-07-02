import mongoose from "mongoose";
import config from "./config.js"
import logger from "./logger.js";

async function connectDB() {
  try {
    await mongoose.connect(config.MONGO_URI)
    logger.info('Database connected successfully');
  }
  catch (err) {
    logger.error('Database connection failed', err);
    process.exit(1);
  }
}

export default connectDB