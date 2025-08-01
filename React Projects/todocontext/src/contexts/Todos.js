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
})