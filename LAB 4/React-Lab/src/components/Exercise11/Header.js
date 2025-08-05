import React from 'react';
import { useTheme } from './ThemeContext';

function Header() {
  const { colors, theme } = useTheme();

  return (
    <header style={{
      padding: '30px',
      backgroundColor: colors.surface,
      borderRadius: '15px',
      border: `2px solid ${colors.border}`,
      boxShadow: `0 6px 20px ${colors.shadow}`,
      textAlign: 'center',
      marginBottom: '25px'
    }}>
      <div style={{
        fontSize: '3rem',
        marginBottom: '10px'
      }}>
        {theme === 'light' ? '🌟' : '🌌'}
      </div>
      <h1 style={{
        color: colors.text,
        margin: '0 0 10px 0',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Theme Switcher
      </h1>
      <p style={{
        color: colors.textSecondary,
        margin: 0,
        fontSize: '16px',
        fontWeight: '500'
      }}>
        Experience the power of React Context API with global theme management
      </p>
      <div style={{
        marginTop: '15px',
        padding: '8px 16px',
        backgroundColor: colors.primary + '20',
        borderRadius: '20px',
        display: 'inline-block'
      }}>
        <span style={{
          color: colors.primary,
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </span>
      </div>
    </header>
  );
}

export default Header;
