import { FC, useCallback } from "react";
import { Todo } from "@app/types";

interface TodoItemProps {
  todo: Todo;
  onToggleCompletion: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  onToggleCompletion,
  onDelete,
}) => {
  const handleToggleCompletion = useCallback(
    () => onToggleCompletion(todo),
    [onToggleCompletion, todo]
  );
  const handleDelete = useCallback(() => {
    if (window.confirm("Are you sure you want to delete this todo?"))
      onDelete(todo._id);
  }, [onDelete, todo]);

  return (
    <li
      key={todo._id}
      className={`flex justify-between items-center p-4 mb-3 border rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-md ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <span
        className={`flex-grow cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
        onClick={handleToggleCompletion}
      >
        {todo.task}
      </span>
      <button
        onClick={handleDelete}
        className="p-2 text-red-500 hover:text-red-700 transition duration-200 rounded-full"
      >
        Delete
      </button>
    </li>
  );
};
