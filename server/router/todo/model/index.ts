import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const todoModel = new Schema(
  {
    task: { type: String, required: true, unique: true, trim: true },
    completed: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export const TodoModel = models.Todo || model("Todo", todoModel);
