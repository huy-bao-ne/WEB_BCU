import React from 'react';
import Timer from './Timer';

function Exercise7() {
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
        Bài 7: Timer
      </h2>
      <Timer />
    </div>
  );
}

export default Exercise7;
