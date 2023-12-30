import express, { json } from "express";
import { productsRouter } from "./router/products.routes";
import { GlobalErrors } from "./errors/errors.middlewares";

export const app = express();
const globalErrors = new GlobalErrors()

app.use(json());

app.use("/books", productsRouter);

app.use(globalErrors.handleErrors)