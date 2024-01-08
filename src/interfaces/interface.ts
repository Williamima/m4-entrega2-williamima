import { AnyZodObject, z } from "zod";
import {
  createProductBookSchema,
  productArraySchema,
  productCreateSchema,
  productUpdateSchema,
} from "../schemas/createProductBody.schema";

export type IDatabase = z.infer<typeof createProductBookSchema>;

export type CreateBook = z.infer<typeof productCreateSchema>;

export type UpdateBook = z.infer<typeof productUpdateSchema>;

export type bookArray = z.infer<typeof productArraySchema>;

export interface RequestSchema {
  params?: AnyZodObject,
  body?: AnyZodObject,
  query?: AnyZodObject,
}