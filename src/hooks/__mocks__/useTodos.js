const useTodos = () => ({
  todos: [],
  addTodo: jest.fn(),
  removeTodo: jest.fn(),
  toggleTodo: jest.fn()
})

export default useTodos;
