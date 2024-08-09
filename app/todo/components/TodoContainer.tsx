'use client';

import { getTodos, getTodosBySearch, createTodo, updateTodo, deleteTodoSoft } from "@/apis/todos";
import { useEffect } from "react";

export default function TodoContainer() {
    useEffect(() => {
        // getTodos()
        // getTodosBySearch("te")
        // createTodo("create test")
        // updateTodo(3, "update test")
        // deleteTodoSoft(1)
    }, [])
    return <div>TodoContainer</div>
}