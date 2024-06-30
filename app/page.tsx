"use client";

import { AddTodo, TodoList, Header, Layout } from "@app/components";
import { useTodos } from "@app/hooks";

const HomePage = () => {
  const { todos, setTodos, loading } = useTodos();

  return (
    <Layout>
      <Header />
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} loading={loading} />
    </Layout>
  );
};

export default HomePage;
