

import { Request, Response, NextFunction } from "express";
import { AppError } from "../helper/AppError/AppError";

const keys = ["body", "params", "query", "headers", "file"];
export const validate = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {

        keys.forEach((key) => {
            if (schema[key]) {
                const value = (req as any)[key];
                const validatedValue =
                    key === "file" ? value : schema[key].validate(value);
                const { error } = validatedValue;
                if (error) {
                    return next(new AppError(error.message, 400));
                }
            }
        });
        return next();
    };
};
