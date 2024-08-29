// import { sleep } from "@/lib/utils"

import { getTodoAction } from "@/actions/todo/todo.action";
import TodoContainer from "./components/TodoContainer";

export default async function TodoPage() {
    // throw Error("error")
    // await sleep(1500);

    const res = await getTodoAction();

    return (
        <div>
            todo page {JSON.stringify(res)}
            <TodoContainer />
        </div>
    )
}