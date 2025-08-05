import React from 'react';
import { useTheme } from './ThemeContext';

function Button({ children, onClick, variant = 'primary', size = 'medium' }) {
  const { colors } = useTheme();

  const getButtonStyles = () => {
    const baseStyles = {
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      outline: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    };

    const sizeStyles = {
      small: { padding: '8px 16px', fontSize: '14px' },
      medium: { padding: '12px 24px', fontSize: '16px' },
      large: { padding: '16px 32px', fontSize: '18px' }
    };

    const variantStyles = {
      primary: {
        backgroundColor: colors.primary,
        color: colors.buttonText,
        border: `2px solid ${colors.primary}`
      },
      secondary: {
        backgroundColor: 'transparent',
        color: colors.primary,
        border: `2px solid ${colors.primary}`
      },
      outline: {
        backgroundColor: 'transparent',
        color: colors.text,
        border: `2px solid ${colors.border}`
      }
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant]
    };
  };

  return (
    <button
      style={getButtonStyles()}
      onClick={onClick}
      onMouseOver={(e) => {
        if (variant === 'primary') {
          e.target.style.backgroundColor = colors.secondary;
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = `0 4px 12px ${colors.shadow}`;
        } else if (variant === 'secondary') {
          e.target.style.backgroundColor = colors.primary;
          e.target.style.color = colors.buttonText;
        } else {
          e.target.style.backgroundColor = colors.surface;
        }
      }}
      onMouseOut={(e) => {
        const styles = getButtonStyles();
        e.target.style.backgroundColor = styles.backgroundColor;
        e.target.style.color = styles.color;
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
      }}
    >
      {children}
    </button>
  );
}

export default Button;
