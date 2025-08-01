import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/Todos'

function App() {
  
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodo((prevTodo) => (prevTodo.id === todo.id) ? todo : prevTodo)
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    ))
  }

  useEffect(() => {
    const Items = JSON.parse(localStorage.getItem('todo'))
    if(Items && Items.length > 0){
      setTodo(todo)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  return (
    <TodoProvider value={{todo, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1 className='bg-gray-500 text-white'>Hello World</h1>
    </TodoProvider>
  )
}

export default App
