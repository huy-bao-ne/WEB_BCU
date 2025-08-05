import React from 'react';
import ThemeApp from './ThemeApp';

function Exercise11() {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        color: '#333'
      }}>
        Bài 11: Theme Context
      </h2>
      <ThemeApp />
    </div>
  );
}

export default Exercise11;
