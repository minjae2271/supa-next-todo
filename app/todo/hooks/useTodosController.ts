"use client"

import { createTodo, deleteTodoSoft, getTodos, getTodosBySearch, updateTodo } from "@/apis/todos";
import { useState, useEffect } from "react";
import { Database } from "@/types/database.types";

type Itodos = Database["public"]["Tables"]["todo"]["Row"];

export default function useTodosController() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Itodos[]>([]);

  const onGetTodos = async () => {
    setLoading(true);
    try {
      const res = await getTodos();
      if (res) setTodos(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    onGetTodos();
  }, []);

  //create
  const onCreateEmptyTodo = async() => {
    await createTodo("")
    await onGetTodos();
  }
  //update
  const onUpdateTodos = async(id: number, content: string) => {
    await updateTodo(id, content);
    await onGetTodos();
  }
  //delete
  const onDeleteTodo = async (id:number) => {
    await deleteTodoSoft(id);
    await onGetTodos();
  }
  //search
  const onSearchTodos = async (terms: string) => {
    if (terms) {
        const todoRes = await getTodosBySearch(terms);
        if (todoRes) setTodos(todoRes);
    } else {
        await onGetTodos();
    }
  }


  return { loading, todos, onCreateEmptyTodo, onUpdateTodos, onDeleteTodo, onSearchTodos};
}
