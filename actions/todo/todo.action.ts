"use server";

import { createServerSideClient } from "@/lib/supabase";

export const getTodoAction = async() => {

    console.log("todo action start");

    const supabase =  await createServerSideClient();

    const res = await supabase
    .from("todo")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false });

    return res.data;
}