import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { productsRouter } from "./router/products.routes";
import { GlobalErrors } from "./errors/errors.middlewares";

export const app = express();

app.use(helmet())

const globalErrors = new GlobalErrors()

app.use(json());

app.use("/books", productsRouter);

app.use(globalErrors.handleErrors)