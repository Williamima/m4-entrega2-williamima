import { Request, Response } from "express";
import { booksDatabase, generateId } from "../database/database";
import { BookService } from "../services/books.services";

export class ProductsController {
  createProduct = (req: Request, res: Response): Response => {
    const bookService = new BookService();
    const newBook = bookService.createProduct(req.body);

    return res.status(201).json(newBook);
  };

  getProducts = (req: Request, res: Response): Response => {
    return res.status(200).json(booksDatabase);
  };

  getOneProduct = (req: Request, res: Response): Response => {
    const index = res.locals.booksIndex;

    return res.status(200).json(booksDatabase[index]);
  };

  patchProducts = (req: Request, res: Response): Response => {
    const bookService = new BookService();
    
    const index = res.locals.booksIndex;

    const updatedBook = bookService.patchProducts(index, req.body)

    return res.status(200).json(updatedBook);
  };

  deleteProducts = (req: Request, res: Response): Response => {
    const bookService = new BookService();
    
    const index = res.locals.booksIndex;

    bookService.deleteProducts(index)

    return res.status(204).json();
  };
}
