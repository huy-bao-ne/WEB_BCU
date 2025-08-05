import React from 'react';
import ToggleVisibility from './ToggleVisibility';

function Exercise4() {
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
        Bài 4: Toggle Visibility
      </h2>
      <ToggleVisibility />
    </div>
  );
}

export default Exercise4;
