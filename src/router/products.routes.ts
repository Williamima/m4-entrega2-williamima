import { Router } from "express";
import { ProductsController } from "../controllers/products.controllers";
import { BooksMiddlewares } from "../middlewares/books.middelware";

export const productsRouter = Router();

const booksMiddlewares = new BooksMiddlewares();

const productsControllers = new ProductsController()

productsRouter.get("/", productsControllers.getProducts)

productsRouter.use("/", booksMiddlewares.checkBookName)
productsRouter.post("/", productsControllers.createProduct)

productsRouter.use("/:id", booksMiddlewares.checkBookId, booksMiddlewares.checkBookName)
productsRouter.get("/:id", productsControllers.getOneProduct)
productsRouter.patch("/:id", productsControllers.patchProducts)
productsRouter.delete("/:id", productsControllers.deleteProducts)