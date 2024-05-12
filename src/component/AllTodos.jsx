import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Feature/todoSlice";
import todos from "../Feature/todoSlice";
function AllTodos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-xl font-bold mb-4">My Todo</div>
      <ul className="bg-gray-400 flex flex-col rounded">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between px-4 py-2 border-b rounded-md"
          >
            <div className="flex justify-between items-center">
              <span className="mr-2">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-xl font-bold text-red-500">
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AllTodos;
