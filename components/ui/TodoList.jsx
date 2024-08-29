'use client'

import { IoSearchOutline, IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";
import TodoListItem from "./TodoListItem";
import { useState } from "react";

export default function TodoList({
  sharedUserFullName = "",
  ownerUserId = "",
  loading = false,
  todoListData = [],
  isReadOnly = false,
  onUpdate = (id, content) => {},
  onCreate = () => {},
  onDelete = (id) => {},
  onSearch = (terms) => {},
}) {
  const [copiedText, copy] = useCopyToClipboard();
  const [userSearchInput, setUserSearchInput] = useState("");

  const handleCopy = () => {
    const shareLink = `${"공유할 링크"}/share/${ownerUserId}`;
    copy(shareLink)
      .then(() => {
        window.alert(`링크 복사 완료! \n${shareLink}`);
      })
      .catch((err) => {
        console.error("Failed to copy!", err);
      });
  };
//   const handleKeyDown = (e) => {
//     if (e.key === "enter") {
//         handleSearchEnd();
//       }
//   }

  const handleSearchEnd = () => {
    onSearch(userSearchInput);
    setUserSearchInput("");
  };

  return (
    <section className="min-h-[70vh] bg-[#fdffcd]">
      <div className="w-full max-w-[800px] p-[20px] mx-auto">
        <article className="flex flex-row justify-between items-center">
          <div className="font-bold text-[32px]">
            {sharedUserFullName && <div>{sharedUserFullName}</div>}
            Things to do :
          </div>
          {ownerUserId && (
            <div
              onClick={handleCopy}
              className="flex flex-row items-center cusor-pointer font-bold text-[32px]"
            >
              Share
              <IoShareSocialOutline />
            </div>
          )}
        </article>
        {!isReadOnly && (
          <article className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="flex flex-1 h-[60px]">
              <input
                className="p-4 flex-1 border border-black rounded-l-2xl font-bold"
                type="text"
                value={userSearchInput}
                onChange={(e) => {
                  setUserSearchInput(e.target.value);
                }}
                // onKeyDown={(e) => handleKeyDown(e)}
              />
              <div
                className="w-[60px] flex justify-center items-center bg-black rounded-r-2xl cursor-pointer"
                onClick={handleSearchEnd}
              >
                <IoSearchOutline size={40} color="#fff" />
              </div>
            </div>
            <div
              className="flex justify-center items-center h-[60px] w-[200px] border border-black rounded-2xl font-bold cursor-pointer text-[20px]"
              onClick={onCreate}
            >
              new Task
            </div>
          </article>
        )}
        <div className="h-[2px] my-10 bg-black"></div>
        {todoListData?.length >= 1 ? (
          <ul>
            {(todoListData ?? []).map((todo) => {
              return (
                <TodoListItem
                  todo={todo}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                  key={todo.id}
                />
              );
            })}
          </ul>
        ) : (
          <div>{loading ? "Loading..." : "empty!"}</div>
        )}
      </div>
    </section>
  );
}
