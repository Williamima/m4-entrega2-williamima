import { Router } from "express";
import { ProductsController } from "../controllers/products.controllers";
import { BooksMiddlewares } from "../middlewares/books.middelware";
import { GlobalErrors } from "../errors/errors.middlewares";
import { productCreateSchema, productUpdateSchema, productQuerySchema } from "../schemas/createProductBody.schema";

export const productsRouter = Router();
const globalErrors = new GlobalErrors();

const booksMiddlewares = new BooksMiddlewares();

const productsControllers = new ProductsController()

productsRouter.get("/", globalErrors.validadeBody({query: productQuerySchema}), productsControllers.getProducts)

productsRouter.use("/", booksMiddlewares.checkBookName)
productsRouter.post("/", globalErrors.validadeBody({body: productCreateSchema}), productsControllers.createProduct)

productsRouter.use("/:id", booksMiddlewares.checkBookId, booksMiddlewares.checkBookName)
productsRouter.get("/:id", productsControllers.getOneProduct)
productsRouter.patch("/:id", globalErrors.validadeBody({body: productUpdateSchema}),productsControllers.patchProducts)
productsRouter.delete("/:id", productsControllers.deleteProducts)