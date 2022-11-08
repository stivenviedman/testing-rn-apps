import { render, screen, fireEvent, within } from '@testing-library/react-native';
import MainScreen from './index';

const addItem = (title) => {
  fireEvent(screen.getByDisplayValue(''), 'onChangeText', title);
  fireEvent(screen.getByLabelText('Add todo button'), 'press');
}

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<MainScreen />', () => {
  it('should start with an empty state', () => {
    render(<MainScreen />);

    const emptyState = screen.getByText('Please, start by adding a todo item.');

    expect(emptyState).toBeDefined();
  });

  it('should add todo items successfully in the todo list', () => {
    render(<MainScreen />);

    addItem('Take dog out');
    addItem('Prepare breakfast');

    const todoItems = screen.getAllByHintText('Todo item');

    expect(todoItems).toHaveLength(2);
  });

  it('should mark items as done successfully in the todo list', () => {
    render(<MainScreen />);

    addItem('Take dog out');
    
    const takeDogOutItem = within(screen.getByLabelText('Take dog out'));
    const unchecked = takeDogOutItem.getByAccessibilityState({ checked: false });
    
    fireEvent(unchecked, 'press');

    const checked = takeDogOutItem.getByAccessibilityState({ checked: true });

    expect(checked).toBeDefined();
  });

  it('should remove items successfully from the todo list', () => {
    render(<MainScreen />);

    addItem('Take dog out');
    addItem('Prepare breakfast');
    
    const takeDogOutItem = within(screen.getByLabelText('Take dog out'));
    const removeButton = takeDogOutItem.getByLabelText('Remove todo icon');
    let todoItems = screen.getAllByHintText('Todo item');

    expect(todoItems).toHaveLength(2);
    
    fireEvent(removeButton, 'press');

    todoItems = screen.getAllByHintText('Todo item');

    expect(todoItems).toHaveLength(1);
  });
});