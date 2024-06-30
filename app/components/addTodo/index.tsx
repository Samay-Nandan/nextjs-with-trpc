import { FC, Dispatch, SetStateAction, useCallback } from "react";
import { useForm } from "react-hook-form";
import type { Todo, TodoForm } from "@app/types";
import { trpc } from "@app/utils";

interface AddTodoProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const AddTodo: FC<AddTodoProps> = ({ setTodos }) => {
  const { register, handleSubmit, reset } = useForm<TodoForm>();

  const updateTodos = useCallback(async () => {
    setTodos((await trpc.getTodo.query()) as Todo[]);
  }, [setTodos]);

  const handleTodoSubmit = useCallback(
    async ({ task }: TodoForm) => {
      await trpc.createTodo.mutate({ task });
      updateTodos();
      reset();
    },
    [updateTodos, reset]
  );

  return (
    <form className="mb-4 flex" onSubmit={handleSubmit(handleTodoSubmit)}>
      <input
        type="text"
        className="flex-grow p-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
        placeholder="Create a new todo..."
        autoComplete="off"
        {...register("task", { required: true })}
      />
      <button
        type="submit"
        className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-r-lg hover:from-blue-600 hover:to-blue-700 transition duration-200 shadow-lg"
      >
        Add
      </button>
    </form>
  );
};
