import { NextFunction, Request, Response } from "express";
import { AppError } from "./Apperror";
import { ZodError } from "zod";
import { RequestSchema } from "../interfaces/interface";

export class GlobalErrors {
  handleErrors = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ error: err.message });
    }

    if (err instanceof ZodError) {
      return res.status(409).json(err);
    }

    return res.status(500).json({ error: "Internal server error." });
  };
  validadeBody = (schemas: RequestSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {

      if(schemas.params) {
        req.params = await schemas.params.parseAsync(req.params);
      }
      if(schemas.body) {
        req.body = await schemas.body.parseAsync(req.body);
      }
      if(schemas.query) {
        req.query = await schemas.query.parseAsync(req.query);
      }
      
      return next();
    };
  };
}
