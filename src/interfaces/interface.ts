export interface IDatabase {
  id: number;
  name: string;
  pages: number;
  category?: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateBook = Pick<IDatabase, "name" | "pages" | "category">;

export type UpdateBook = Partial<CreateBook>;


