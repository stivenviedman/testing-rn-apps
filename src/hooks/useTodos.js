import { useState } from 'react';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addTodo = (title) => {
    setTodos([...todos, { title, done: false, id: idCounter }]);
    setIdCounter(idCounter + 1);
  }

  const toggleTodo = id => {
    const todosCopy = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
    setTodos(todosCopy);
  }

  const removeTodo = id => {
    const todosCopy = todos.filter(todo => todo.id !== id);
    setTodos(todosCopy);
  }

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo
  }
}

export default useTodos;
