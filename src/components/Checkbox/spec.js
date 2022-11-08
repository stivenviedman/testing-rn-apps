import Checkbox from './index';
import { render, screen } from '@testing-library/react-native';

describe('<Checkbox />', () => {
  it('should render in checked state when checked prop is true', () => {
    render(<Checkbox checked />);

    const checkedCheckBox = screen.getByAccessibilityState({ checked: true });

    expect(checkedCheckBox).toBeDefined();
  });

  it('should render in unchecked state when checked prop is false', () => {
    render(<Checkbox checked={false} />);

    const uncheckedCheckBox = screen.getByAccessibilityState({ checked: false });

    expect(uncheckedCheckBox).toBeDefined();
  });
});