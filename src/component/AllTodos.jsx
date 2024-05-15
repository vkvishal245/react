import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo,toggleTodo } from "../Feature/todoSlice";

function AllTodos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (id, text) => {
    const temp = { id, text };
    console.log(temp);
    dispatch(editTodo(temp));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <div className="text-xl font-bold mb-4">My Todo</div>
      <ul className="bg-gray-400 flex flex-col rounded">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between px-4 py-2 border-b rounded-md ${
              todo.completed ? 'bg-green-400' : 'bg-white'
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                className="mr-2"
              />
              <span className={`mr-2 ${todo.completed ? 'line-through' : ''}`}>
                {todo.text}
              </span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="py-1 px-4 m-1 bg-gray-700 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:bg-blue-600"
              >
                U
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="py-1 px-4 m-1 bg-red-400 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:bg-blue-600"
              >
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