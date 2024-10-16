import express from "express";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import errorHandler from "./utils/errorHandler.js";

const app = express();

//MIDDLEWARES
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

// app.use(morgan("dev"));

app.use("/api/v1", appRouter);

app.use(errorHandler);

export default app;