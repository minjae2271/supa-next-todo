// "use client"
// import {
//   getTodos,
//   getTodosBySearch,
//   createTodo,
//   updateTodo,
//   deleteTodoSoft,
// } from "@/apis/todos";
// import { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

export default function TodoContainer() {
  const { loading, todos, onCreateEmptyTodo, onDeleteTodo, onSearchTodos, onUpdateTodos } = useTodosController();

  console.log("loading>>>", loading);
  console.log("todos>>>", todos);

  // useEffect(() => {
  //   getTodos()
  //   getTodosBySearch("te")
  //   createTodo("create test")
  //   updateTodo(3, "update test")
  //   deleteTodoSoft(1)
  // }, []);
  return (
    <div>
      <TodoList
        sharedUserFullName="test full name"
        ownerUserId="1234"
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        // onUpdate={(id, content) => {
        //   console.log(">>onUpdate");
        // }}
        // onCreate={() => {
        //   console.log(">>onCreate")
        // }}
        // onDelete={(id) => {
        //   console.log(">>onDelete", id)
        // }}
        // onSearch={(terms) => {
        //   console.log(">>terms", terms)
        // }}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodo}
        onDelete={onDeleteTodo}
        onSearch={onSearchTodos}
      />
    </div>
  );
}
