import { useEffect, useState, useCallback } from "react";
import type { Todo } from "@app/types";
import { trpc } from "@app/utils";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    setTodos((await trpc.getTodo.query()) as Todo[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { todos, setTodos, loading };
};
