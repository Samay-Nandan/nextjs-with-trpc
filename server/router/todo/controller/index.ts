import {
  createTodoSchemaType,
  updateTodoSchemaType,
  deleteTodoSchemaType,
} from "@router/todo/schema";
import { TodoModel } from "@router/todo/model";
import { handleError } from "@server/utils";

export const getTodoHandler = async () => {
  try {
    return await TodoModel.find();
  } catch (error) {
    handleError("Unknown error fetching Todo", error);
  }
};

export const createTodoHandler = async ({
  input,
}: {
  input: createTodoSchemaType;
}) => {
  try {
    return await new TodoModel(input).save();
  } catch (error) {
    handleError("Unknown error creating Todo", error);
  }
};

export const updateTodoHandler = async ({
  input,
}: {
  input: updateTodoSchemaType;
}) => {
  const { _id, ...rest } = input;
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(_id, { $set: rest });
    if (!updatedTodo) handleError("Todo not found");
    return updatedTodo;
  } catch (error) {
    handleError("Unknown error updating Todo", error);
  }
};

export const deleteTodoHandler = async ({
  input,
}: {
  input: deleteTodoSchemaType;
}) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(input._id);
    if (!deletedTodo) handleError("Todo not Found");
    return deletedTodo;
  } catch (error) {
    handleError("Unknown error deleting Todo", error);
  }
};
