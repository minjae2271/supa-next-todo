import { getTodoAction } from "@/actions/todo/todo.action";
import { createServerSideClient } from "@/lib/supabase"
import { NextResponse } from "next/server";

export const GET = async () => {
    // const supabase = await createServerSideClient();

    // const res = await supabase
    //     .from("todo")
    //     .select("*")
    //     .is("deleted_at", null)
    //     .order("id", { ascending: false });

    const res = await getTodoAction();

        return NextResponse.json({...res})
}