import { z } from "zod";

export const createProductBookSchema = z.object({
    id: z.number(),
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export const productCreateSchema = createProductBookSchema.pick({
    name: true,
    pages: true,
    category: true,
})

export const productUpdateSchema = productCreateSchema.partial()

export const productArraySchema = createProductBookSchema.array()

export const productQuerySchema = z.object({
    name: z.string().optional()
})

