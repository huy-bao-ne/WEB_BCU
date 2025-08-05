import React from 'react';
import HelloWorld from './HelloWorld';

function Exercise1() {
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
        Bài 1: Hello World
      </h2>
      <HelloWorld />
    </div>
  );
}

export default Exercise1;
