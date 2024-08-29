import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import styles from "./TodoListItem.module.css"

export default function TodoListItem({ todo, onUpdate = () => {}, onDelete = () => {} }) {
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState(todo?.content ?? "")

  const onClickEdit = () => {
    setIsEdit(true);
  }
  const onSubmitEdit = () => {
    onUpdate(todo.id, userInput)
    setIsEdit(false);
  }
  const onSubmitDelete = () => {
    onDelete(todo.id)
  }

  return (
    <li className="flex flex-col mt-3 p-2 border border-black rounded-2xl bg-white group">
      <div className="flex flex-row">
        {isEdit ? <input value={userInput} onChange={(e) => {setUserInput(e.target.value)}} className="w-[80%] p-2 border border-black rounded-xl" /> : <div className="flex-1 text-[18px] cursor-pointer" onClick={onClickEdit}>{todo.content}</div>}
        <div className="flex flex-row ml-auto">
            {isEdit &&
                <div className="flex justify-center items-center" onClick={onSubmitEdit}>
                    <CiCircleCheck size={30} />
                </div>
            }
            <div className={["flex justify-center items-center transition ease-in-out delay-100 hover:scale-110", styles.deleteIcon].join(" ")}  onClick={onSubmitDelete}>
                <AiOutlineDelete size={30} />
            </div>
        </div>
      </div>
    </li>
  );
}
