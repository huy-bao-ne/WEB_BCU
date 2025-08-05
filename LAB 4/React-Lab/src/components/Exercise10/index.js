import React from 'react';
import LoginForm from './LoginForm';

function Exercise10() {
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
        Bài 10: Login Form
      </h2>
      <LoginForm />
    </div>
  );
}

export default Exercise10;
