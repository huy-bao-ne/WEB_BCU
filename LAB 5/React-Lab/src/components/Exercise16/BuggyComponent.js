import React, { useState } from 'react';

function BuggyComponent() {
  const [count, setCount] = useState(0);
  if (count === 5) {
    throw new Error('BuggyComponent crashed!');
  }
  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '30px',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      textAlign: 'center'
    }}>
      <h3 style={{color: '#333', marginBottom: '15px'}}>🐛 Buggy Component</h3>
      <p style={{color: '#666', marginBottom: '20px'}}>
        Click the button. It will crash when count reaches 5! 💥
      </p>
      <div style={{
        fontSize: '2rem',
        marginBottom: '20px',
        color: count >= 4 ? '#e74c3c' : '#333',
        fontWeight: 'bold'
      }}>
        Count: {count} {count >= 4 && '⚠️'}
      </div>
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '12px 24px',
          background: count >= 4 
            ? 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
          transition: 'all 0.3s ease'
        }}
      >
        {count >= 4 ? '💀 Danger Zone!' : '👆'} Click me ({count})
      </button>
    </div>
  );
}

export default BuggyComponent;
