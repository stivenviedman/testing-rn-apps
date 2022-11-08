import { screen, render } from '@testing-library/react-native';
import MainScreen from './index';

jest.mock('../../components/Todos');
jest.mock('../../components/CreateItem');
jest.mock('../../hooks/useTodos')

describe('<MainScreen />', () => {
  it('should render todos section', () => {
    render(<MainScreen />);

    const todosSection = screen.getByLabelText('todo section');

    expect(todosSection).toBeDefined();
  });

  it('should render create todo section', () => {
    render(<MainScreen />);

    const createTodoSection = screen.getByLabelText('create item section');

    expect(createTodoSection).toBeDefined();
  });
});