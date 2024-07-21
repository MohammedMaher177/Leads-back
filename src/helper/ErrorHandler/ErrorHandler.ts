import { NextFunction, Request, Response } from "express";
import { AppError } from "../AppError/AppError";

export const catchError = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error: any) => {
      next(error);
    });
  };
};

export const global_success = (record: any, status: number) => {
  return {record, success: true, statusCode: status };
};

export const global_error = (message: string, status: number) => {
  throw new AppError(message, status);
};
