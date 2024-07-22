import { Request, Response, Express, NextFunction } from "express";
import connectDB from "./db";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import appRouter from "../routes";
import { AppError } from "../helper/AppError/AppError";
const bootstrap = (app: Express) => {
  connectDB();

  /**
   * MIDDLEWARES
   */
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));
  app.use(appRouter);
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
  });
  app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.log({ err });

    const error = err.message;
    const code = err.statusCode || 500;
    process.env.MODE == "PRODUCTION"
      ? res.status(code).json({ message: "Error", success: false, error })
      : res
        .status(code)
        .json({ message: "Error", success: false, error, stack: err.stack });
  });

};

export default bootstrap;
