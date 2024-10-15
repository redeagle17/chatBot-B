import "dotenv/config";
import { connectDB, disconnectDB } from "./db/db.js";
import app from "./app.js";

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`SERVER is running at PORT ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("MONGODB connection failed", error);
    });