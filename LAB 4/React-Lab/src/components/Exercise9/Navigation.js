import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const navLinkStyle = {
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  };

  const activeStyle = {
    ...navLinkStyle,
    backgroundColor: '#007bff',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,123,255,0.3)'
  };

  const inactiveStyle = {
    ...navLinkStyle,
    backgroundColor: '#f8f9fa',
    color: '#495057',
    border: '2px solid #e9ecef'
  };

  return (
    <nav style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        <NavLink
          to="/"
          style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
          onMouseOver={(e) => {
            if (!e.target.matches('.active')) {
              e.target.style.backgroundColor = '#e9ecef';
              e.target.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseOut={(e) => {
            if (!e.target.matches('.active')) {
              e.target.style.backgroundColor = '#f8f9fa';
              e.target.style.transform = 'translateY(0)';
            }
          }}
        >
          🏠 Home
        </NavLink>
        
        <NavLink
          to="/about"
          style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
          onMouseOver={(e) => {
            if (!e.target.matches('.active')) {
              e.target.style.backgroundColor = '#e9ecef';
              e.target.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseOut={(e) => {
            if (!e.target.matches('.active')) {
              e.target.style.backgroundColor = '#f8f9fa';
              e.target.style.transform = 'translateY(0)';
            }
          }}
        >
          ℹ️ About
        </NavLink>
        
        <NavLink
          to="/contact"
          style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
          onMouseOver={(e) => {
            if (!e.target.matches('.active')) {
              e.target.style.backgroundColor = '#e9ecef';
              e.target.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseOut={(e) => {
            if (!e.target.matches('.active')) {
              e.target.style.backgroundColor = '#f8f9fa';
              e.target.style.transform = 'translateY(0)';
            }
          }}
        >
          📞 Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
