import CreateItem from './index';
import { render, screen, fireEvent } from '@testing-library/react-native';

const onTodoAdd = jest.fn();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<CreateItem />', () => {
  it('should render text input field', () => {
    render(<CreateItem onTodoAdd={onTodoAdd} />);

    const emptyTextInput = screen.getByDisplayValue('');

    expect(emptyTextInput).toBeDefined();
  });

  it('should render add button', () => {
    render(<CreateItem onTodoAdd={onTodoAdd} />);

    const addButton = screen.getByLabelText('Add todo button');

    expect(addButton).toBeDefined();
  });

  it('should disable button when no text has been typed', () => {
    render(<CreateItem onTodoAdd={onTodoAdd} />);

    const disabledAddButton = screen.getByLabelText('Add todo button', { disabled: true });

    expect(disabledAddButton).toBeDefined();
  });

  it('should enable button when some text was typed', () => {
    render(<CreateItem onTodoAdd={onTodoAdd} />);

    fireEvent(screen.getByDisplayValue(''), 'onChangeText', 'Take dog out');

    const enabledAddButton = screen.getByLabelText('Add todo button', { disabled: false });

    expect(enabledAddButton).toBeDefined();
  });

  it('should call onTodoAdd with input text and clear text when add is pressed', () => {
    render(<CreateItem onTodoAdd={onTodoAdd} />);
  
    fireEvent(screen.getByDisplayValue(''), 'onChangeText', 'Take dog out');
    fireEvent(screen.getByLabelText('Add todo button'), 'press');

    const disabledAddButton = screen.getByLabelText('Add todo button', { disabled: true });

    expect(onTodoAdd).toHaveBeenCalledWith('Take dog out');
    expect(disabledAddButton).toBeDefined();
  });
});