import React from 'react';

function GreetingCard({ name }) {
  return (
    <div style={{
      border: '2px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
      maxWidth: '300px'
    }}>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>
        Hello, {name}!
      </h2>
      <p style={{ color: '#666', fontSize: '16px' }}>
        Welcome to React!
      </p>
    </div>
  );
}

export default GreetingCard;
