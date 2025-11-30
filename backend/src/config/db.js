import dotenv from "dotenv";
import mongoose from "mongoose";


export const connectDB = async(path) => {
try {
    await mongoose.connect(path);
    console.log("MONGODB connected successfully");
} catch (error) {
    console.error("Connection failed: ", error.message);
    process.exit(1); // 1 means exit with failure   
}
}