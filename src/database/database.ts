import { IDatabase } from "../interfaces/interface";

export const booksDatabase: IDatabase[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}