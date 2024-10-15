import express from "express";
import morgan from "morgan";
import appRouter from "./routes";

const app = express();

//MIDDLEWARES
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;