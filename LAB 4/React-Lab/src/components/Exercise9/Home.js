import React from 'react';

function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      margin: '20px 0'
    }}>
      <h1 style={{ 
        color: '#007bff', 
        marginBottom: '20px',
        fontSize: '3rem'
      }}>
        🏠 Welcome Home
      </h1>
      <p style={{ 
        color: '#6c757d', 
        fontSize: '18px',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
           React Router application 
      </p>
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        display: 'inline-block'
      }}>
        <p style={{ 
          color: '#1976d2', 
          margin: 0,
          fontWeight: 'bold'
        }}>
          ✨ React Router Demo
        </p>
        <p style={{ 
          color: '#1976d2', 
          margin: '5px 0 0 0',
          fontSize: '14px'
        }}>
              Client-side Routing
        </p>
      </div>
    </div>
  );
}

export default Home;
