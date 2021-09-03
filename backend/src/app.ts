import morgan from "morgan";
import express from "express";
import userRouter from "./routes/userRouter";
import starterRouter from "./routes/starterRouter";

const app = express();
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use("/starter", starterRouter);

export default app;
