import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts/Todos";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updateTodo) => {
    setTodo((prev) => 
    prev.map((todo) => (todo.id === id ? {...todo, ...updateTodo} : todo)));
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem("todo"));
    if (Items && Items.length > 0) {
      setTodo(Items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
      <TodoProvider
        value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
         <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todo.map((todos) => (
                <div key={todos.id} className="w-full" >
                  <TodoItems todo={todos} />
                </div>
              ))}
            </div>
          </div>
         </div>
      </TodoProvider>
  );
}

export default App;
