import { render, screen } from '@testing-library/react';
import { ThemeButton, Button } from './Button';

describe('Button', () => {
    test('render button with text', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('render button with text with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
