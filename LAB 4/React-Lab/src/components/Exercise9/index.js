import React from 'react';
import RouterApp from './RouterApp';

function Exercise9() {
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
        Bài 9: React Router
      </h2>
      <RouterApp />
    </div>
  );
}

export default Exercise9;
