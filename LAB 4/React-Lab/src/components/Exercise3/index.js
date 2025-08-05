import React from 'react';
import Counter from './Counter';

function Exercise3() {
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
        Bài 3: Counter App
      </h2>
      <Counter />
    </div>
  );
}

export default Exercise3;
