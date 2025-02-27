import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
    test('renders with label', () => {
        render(<Button label="Test Button" />);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button label="Click Me" onClick={handleClick} />);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies variant styles', () => {
        const { container } = render(<Button label="Danger" variant="danger" />);
        const button = container.firstChild;
        expect(button).toHaveClass('bg-red-500');
    });

    test('applies disabled state', () => {
        render(<Button label="Disabled" disabled />);
        expect(screen.getByText('Disabled')).toBeDisabled();
    });
}); 