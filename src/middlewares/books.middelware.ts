import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/Apperror";

export class BooksMiddlewares {
  checkBookId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const index = booksDatabase.findIndex(
      (product) => product.id === Number(req.params.id)
    );

    if (index === -1) {
      throw new AppError(404, "Book not found.")
      
      // return res.status(404).json({ error: "Book not found."});
    }

    res.locals.booksIndex = index;

    return next();
  }

  checkBookName(
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const bookName = booksDatabase.find((book) => book.name === req.body.name)

    if(bookName) {
      throw new AppError(409, "Book already registered.")

        // return res.status(409).json({ error: "Book already registered."})
    }

    return next()
  }
}
