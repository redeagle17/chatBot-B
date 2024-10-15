import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("MONGODB connection successful!");
    } catch (error) {
        console.log("MONGODB connection failed ", error);
        process.exit(1);
    }
}

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("MONGODB disconnected successfully!");
    } catch (error) {
        console.log("Could not disconnect from MONGODB ", error);
        process.exit(1);
    }
}

export { connectDB, disconnectDB };