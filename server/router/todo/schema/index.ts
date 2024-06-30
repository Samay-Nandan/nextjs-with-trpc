import { z } from "zod";

const createErrorMessage = (field: string) => `${field} cannot be empty`;

export const createTodoSchema = z.object({
  task: z.string().min(1, createErrorMessage("task")),
  completed: z.boolean().optional(),
});

export const updateTodoSchema = z.object({
  _id: z.string().min(1, createErrorMessage("ID")),
  task: z.string(),
  completed: z.boolean(),
});

export const deleteTodoSchema = z.object({
  _id: z.string().min(1, createErrorMessage("ID")),
});

export type createTodoSchemaType = z.infer<typeof createTodoSchema>;
export type updateTodoSchemaType = z.infer<typeof updateTodoSchema>;
export type deleteTodoSchemaType = z.infer<typeof deleteTodoSchema>;
