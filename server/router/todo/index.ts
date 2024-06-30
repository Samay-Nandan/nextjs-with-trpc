import { trpc } from "@server/index";
import {
  getTodoHandler,
  createTodoHandler,
  updateTodoHandler,
  deleteTodoHandler,
} from "./controller";
import { createTodoSchema, updateTodoSchema, deleteTodoSchema } from "./schema";

export const todoRouter = trpc.router({
  getTodo: trpc.procedure.query(getTodoHandler),
  createTodo: trpc.procedure
    .input(createTodoSchema)
    .mutation(createTodoHandler),
  updateTodo: trpc.procedure
    .input(updateTodoSchema)
    .mutation(updateTodoHandler),
  deleteTodo: trpc.procedure
    .input(deleteTodoSchema)
    .mutation(deleteTodoHandler),
});
