"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";

export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const res = await supabase
    .from("todo")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false });

  return res.data;
};

export const getTodosById = async (id: number) => {
    const supabase = createSupabaseBrowserClient();
    const res = await supabase.from("todo").select("*").is("deleted_at", null).eq("id", id)

    return res.data;
}

export const getTodosBySearch = async (terms: string) => {
    const supabase = createSupabaseBrowserClient();
    const res = await supabase.from("todo").select("*").is("deleted_at", null).ilike("content", `%${terms}%`).order("id", { ascending: false }).limit(500)

    return res.data;
}

export const createTodo = async (content: string) => {
    const supabase = createSupabaseBrowserClient();
    const res = await supabase.from("todo").insert({content}).select()

    return res.data
}

export const updateTodo = async (id: number, content: string) => {
    const supabase = createSupabaseBrowserClient();
    const res = await supabase.from("todo").update({
        content,
        updated_at: new Date().toISOString()
    }).eq("id", id).select()

    return res.data
}

export const deleteTodoSoft = async (id: number) => {
    const supabase = createSupabaseBrowserClient();
    const res = await supabase.from("todo").update({
        updated_at: new Date().toISOString(),
        deleted_at: new Date().toISOString()
    }).eq("id", id).select()

    return res.data
}

// export const deleteTodoHard = async (id: number) => {
//     const supabase = createSupabaseBrowserClient();
//     const res = await supabase.from("todo").delete().eq("id", id)

//     return res.data
// }