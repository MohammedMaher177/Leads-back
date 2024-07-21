import { Router } from "express";
import { AppError } from "../helper/AppError/AppError";
import leadsRouter from "./leads";

const appRouter = Router();

appRouter.use("/api/v1/leads", leadsRouter)

appRouter.all("*", (req, res, next) => {
  next(new AppError("Page Not Found", 404));
});

export default appRouter;
