import morgan from "morgan";
import express from "express";
import userRouter from "./routes/userRouter";

const app = express();
app.use(morgan("dev"));

app.use("/users", userRouter);

export default app;
