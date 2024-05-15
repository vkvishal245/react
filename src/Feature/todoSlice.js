import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello todos", completed: false }],
    edits: { id: null, text: "" }
};

const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
        editTodo: (state, action) => {
            state.edits.id = action.payload.id;
            state.edits.text = action.payload.text;
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo, editTodo, toggleTodo } = todoslice.actions;
export default todoslice.reducer;
