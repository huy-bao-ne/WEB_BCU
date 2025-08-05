import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <button 
        onClick={toggleVisibility}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: isVisible ? '#dc3545' : '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          marginBottom: '30px'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = isVisible ? '#c82333' : '#218838';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = isVisible ? '#dc3545' : '#28a745';
        }}
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
      {isVisible && (
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          border: '2px solid #dee2e6',
          textAlign: 'center',
          animation: 'fadeIn 0.3s ease-in'
        }}>
          <h3 style={{ 
            color: '#495057', 
            marginBottom: '15px',
            fontSize: '1.5rem'
          }}>
            🎉 Nội dung được hiển thị!
          </h3>
          <p style={{ 
            color: '#6c757d', 
            fontSize: '16px',
            lineHeight: '1.5',
            margin: 0
          }}>
            Xin chào, tôi là 23560005. Nice to meet you! 
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default ToggleVisibility;
