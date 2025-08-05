import React from 'react';
import { useTheme } from './ThemeContext';

function Card({ title, children, icon }) {
  const { colors } = useTheme();

  return (
    <div style={{
      backgroundColor: colors.cardBg,
      padding: '25px',
      borderRadius: '12px',
      border: `2px solid ${colors.border}`,
      boxShadow: `0 4px 15px ${colors.shadow}`,
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = `0 8px 25px ${colors.shadow}`;
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `0 4px 15px ${colors.shadow}`;
    }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <span style={{
          fontSize: '2rem',
          marginRight: '10px'
        }}>
          {icon}
        </span>
        <h3 style={{
          color: colors.text,
          margin: 0,
          fontSize: '1.3rem',
          fontWeight: 'bold'
        }}>
          {title}
        </h3>
      </div>
      <div style={{
        color: colors.textSecondary,
        lineHeight: '1.6'
      }}>
        {children}
      </div>
    </div>
  );
}

export default Card;
