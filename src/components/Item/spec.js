import Item from './index';
import { render, screen } from '@testing-library/react-native';

const onTodoRemove = jest.fn();
const onTodoToggle = jest.fn();

const todo = {
  title: 'Ttake dog out',
  done: true,
  id: 1,
}

describe('<Item />', () => {
  it('should render checkbox correctly', () => {
    render(<Item {...todo} onTodoRemove={onTodoRemove} onTodoToggle={onTodoToggle} />);

    const checkbox = screen.getByLabelText('Check todo icon');

    expect(checkbox).toBeDefined();
  });

  it('should render todo title correctly', () => {
    render(<Item {...todo} onTodoRemove={onTodoRemove} onTodoToggle={onTodoToggle} />);

    const title = screen.getByText(todo.title);

    expect(title).toBeDefined();
  });

  it('should render remove icon correclty', () => {
    render(<Item {...todo} onTodoRemove={onTodoRemove} onTodoToggle={onTodoToggle} />);

    const remove = screen.getByLabelText('Remove todo icon');

    expect(remove).toBeDefined();
  });
});