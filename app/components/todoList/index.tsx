import { FC, SetStateAction, Dispatch, useCallback } from "react";
import { EmptyTodo, Loader, TodoItem } from "@app/components";
import type { Todo } from "@app/types";
import { trpc } from "@app/utils";

interface TodoListProps {
  loading: Boolean;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const TodoList: FC<TodoListProps> = ({ todos, setTodos, loading }) => {
  const updateTodos = useCallback(async () => {
    setTodos((await trpc.getTodo.query()) as Todo[]);
  }, [setTodos]);

  const handleToggleCompletion = useCallback(
    async (todo: Todo) => {
      await trpc.updateTodo.mutate({ ...todo, completed: !todo.completed });
      updateTodos();
    },
    [updateTodos]
  );

  const handleDeleteTodo = useCallback(
    async (_id: string) => {
      await trpc.deleteTodo.mutate({ _id });
      updateTodos();
    },
    [updateTodos]
  );

  if (loading) return <Loader />;

  if (!todos.length) return <EmptyTodo />;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={handleDeleteTodo}
          onToggleCompletion={handleToggleCompletion}
        />
      ))}
    </ul>
  );
};
