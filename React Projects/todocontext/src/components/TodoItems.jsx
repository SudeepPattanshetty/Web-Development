import React, { useState } from "react";
import useTodo from "../contexts/Todos.js";

const TodoItems = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const {updateTodo, deleteTodo, toggleComplete} = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "line-through bg-purple-600" : "bg-purple-600"}`}>
      <input type="checkbox" name="" id="" checked={todo.completed} onChange={toggleCompleted} className="cursor-pointer" />
      <input type="text" className={`border border-none text-white font-bold w-full bg-transparent rounded-lg ${isTodoEditable} ? "border-black/10 px-2" : "border-transparent"`} value={todoMsg} readOnly={!isTodoEditable} onChange={(e) => setTodoMsg(e.target.value)} />
      <button className="inline-flex w-auto h-auto p-2 rounded-lg text-sm border border-black/10 justify-center items-center bg-sky-300  hover:bg-sky-600 hover:text-white shrink-0 disabled:opacity-50 font-semibold "
      onClick={() => {
        if(todo.completed) return
        if(isTodoEditable) {
            editTodo()
        }
        else{
            setIsTodoEditable((prev) => !prev)
        }
      }}
      disabled={todo.completed}
      >{isTodoEditable ? "SAVE" : "EDIT"}</button>
      <button className="inline-flex w-auto h-auto p-2 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-400 hover:bg-red-600 hover:text-white shrink-0 disabled:opacity-50 font-semibold"
      onClick={() => deleteTodo(todo.id)}
      disabled={todo.completed}
      >DELETE</button>
    </div>
  );
};

export default TodoItems;
