import { z } from "zod";

const createErrorMessage = (field: string) => `${field} cannot be empty`;

const todoSchema = z.object({
  task: z.string().min(1, createErrorMessage("task")),
});

export type Todo = {
  _id: string;
  task: string;
  completed: boolean;
};

export type TodoForm = z.infer<typeof todoSchema>;
