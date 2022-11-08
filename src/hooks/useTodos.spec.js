import useTodos from './useTodos';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useTodos', () => {
  it('should return empty todo list', () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.todos).toHaveLength(0);
  });

  it('should add todo items correctly', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Take dog out');
    });

    const todos = result.current.todos;

    expect(todos).toHaveLength(1);
  });

  it('should toggle todo items state correclty', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Take dog out');
    });

    expect(result.current.todos[0]).toHaveProperty('done', false);

    act(() => {
      result.current.toggleTodo(result.current.todos[0].id);
    });

    expect(result.current.todos[0]).toHaveProperty('done', true);
  });

  it('should remove todo items correcly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Take dog out');
    });

    act(() => {
      result.current.addTodo('Prepare breakfast');
    });

    act(() => {
      result.current.addTodo('Check out email');
    });

    expect(result.current.todos).toHaveLength(3);

    act(() => {
      result.current.removeTodo(result.current.todos[0].id);
    });

    act(() => {
      result.current.removeTodo(result.current.todos[0].id);
    });

    expect(result.current.todos).toHaveLength(1);
  });
});