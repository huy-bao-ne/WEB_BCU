import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme, colors, isLight } = useTheme();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '15px 20px',
      backgroundColor: colors.surface,
      borderRadius: '12px',
      border: `2px solid ${colors.border}`,
      boxShadow: `0 4px 12px ${colors.shadow}`
    }}>
      <span style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: colors.text
      }}>
        {isLight ? '☀️' : '🌙'} {theme === 'light' ? 'Light' : 'Dark'} Mode
      </span>
      
      <button
        onClick={toggleTheme}
        style={{
          position: 'relative',
          width: '60px',
          height: '30px',
          backgroundColor: colors.toggleBg,
          border: `2px solid ${colors.border}`,
          borderRadius: '15px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          outline: 'none'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        <div style={{
          position: 'absolute',
          top: '2px',
          left: isLight ? '2px' : '28px',
          width: '22px',
          height: '22px',
          backgroundColor: colors.toggleThumb,
          borderRadius: '50%',
          transition: 'all 0.3s ease',
          boxShadow: `0 2px 4px ${colors.shadow}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px'
        }}>
          {isLight ? '☀️' : '🌙'}
        </div>
      </button>
      
      <span style={{
        fontSize: '14px',
        color: colors.textSecondary,
        fontStyle: 'italic'
      }}>
        Click to switch theme
      </span>
    </div>
  );
}

export default ThemeToggle;
