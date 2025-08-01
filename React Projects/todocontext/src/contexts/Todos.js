import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "Message",
            completed: false
        }
    ],

    addTodo: (id, todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext)
}