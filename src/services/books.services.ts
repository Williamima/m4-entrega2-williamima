import { CreateBook, IDatabase, UpdateBook } from "../interfaces/interface";
import { booksDatabase, generateId } from "../database/database";

export class BookService {
  createProduct = (data: CreateBook): IDatabase => {
    const newProduct: IDatabase = {
      id: generateId(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    booksDatabase.push(newProduct);

    return newProduct;
  };

  getProduct = (query?: string): IDatabase[] | IDatabase => {
    if(query) {
      return booksDatabase.filter((book) => book.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

    }
    return booksDatabase;
  };

  patchProducts = (index: number, data: UpdateBook): IDatabase => {
    booksDatabase[index] = {
      ...booksDatabase[index],
      ...data,
      updatedAt: new Date(),
    };

    return booksDatabase[index];
  };

  deleteProducts = (index: number): void => {
    booksDatabase.splice(index, 1);
  };
}
