import { render, screen } from '@testing-library/react-native';
import Todos from './index';

const onTodoRemove = jest.fn();
const onTodoToggle = jest.fn();

const todosData = [
  {
    title: 'Take dog out',
    done: false,
    id: 1
  },
  {
    title: 'Prepare breakfast',
    done: true,
    id: 2
  },
  {
    title: 'Submit report',
    done: false,
    id: 3
  },
]

describe('<Todos />', () => {
  it('should render empty state', () => {
    render(<Todos onTodoRemove={onTodoRemove} onTodoToggle={onTodoToggle} todos={[]} />);

    const result = screen.getByText('Please, start by adding a todo item.');

    expect(result).toBeDefined();
  });

  it('should render all todo items', () => {
    render(<Todos onTodoRemove={onTodoRemove} onTodoToggle={onTodoToggle} todos={todosData} />);

    const result = screen.getAllByAccessibilityHint('Todo item');

    expect(result).toHaveLength(3)
  });
});