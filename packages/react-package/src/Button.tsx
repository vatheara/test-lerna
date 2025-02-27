import React from 'react';

export interface ButtonProps {
    /**
     * Button text content
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Button variant
     */
    variant?: 'primary' | 'secondary' | 'danger';
    /**
     * Optional additional class names
     */
    className?: string;
    /**
     * Disabled state
     */
    disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    className = '',
    disabled = false,
}) => {
    const baseStyles = 'px-4 py-2 rounded font-medium focus:outline-none transition-colors';

    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button; 