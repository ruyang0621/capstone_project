import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";

// DB
import connectDB from "./db/connect.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRoutes.js";

if (process.env.NODE_ENV !== "prudction") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/auth", authRouter);
app.use("/api/jobs", authenticateUser, jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    const port = process.env.PORT || 8080;
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
