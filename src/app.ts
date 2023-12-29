import express, { json } from "express";
import { productsRouter } from "./router/products.routes";

export const app = express();

app.use(json());

app.use("/books", productsRouter);

const port = 3000;

app.listen(port)
