import { trpc } from "@server/index";
import { todoRouter } from "@router/todo";

export const router = trpc.mergeRouters(todoRouter);

export type AppRouter = typeof router;
