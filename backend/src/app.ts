import morgan from "morgan";
import express from "express";
import userRouter from "./routes/userRouter";
import levelRouter from "./routes/levelRouter";
import createRouter from "./routes/createRouter";
import deleteRouter from "./routes/deleteRouter";

const app = express();
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use("/create", createRouter);
app.use("/delete", deleteRouter);
app.use("/:level", levelRouter);

export default app;
