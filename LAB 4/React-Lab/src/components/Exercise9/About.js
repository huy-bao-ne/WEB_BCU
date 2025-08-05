import React from 'react';

function About() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      margin: '20px 0'
    }}>
      <h1 style={{ 
        color: '#28a745', 
        marginBottom: '20px',
        fontSize: '3rem'
      }}>
        ℹ️ About Us
      </h1>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        <p style={{ 
          color: '#495057', 
          fontSize: '18px',
          lineHeight: '1.8',
          marginBottom: '20px'
        }}>
          Welcome to our React Router
        </p>
        <div style={{
          display: 'grid',
          gap: '20px',
          marginTop: '30px'
        }}>
          <div style={{
            padding: '20px',
            backgroundColor: '#e8f5e8',
            borderRadius: '8px',
            borderLeft: '4px solid #28a745'
          }}>
            <h3 style={{ color: '#155724', margin: '0 0 10px 0' }}>
              🚀 Features
            </h3>
            <p style={{ color: '#155724', margin: 0, fontSize: '16px' }}>
              Single Page Application with seamless navigation, 
              no page reloads, and fast user experience.
            </p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#fff3cd',
            borderRadius: '8px',
            borderLeft: '4px solid #ffc107'
          }}>
            <h3 style={{ color: '#856404', margin: '0 0 10px 0' }}>
              🛠️ Technology
            </h3>
            <p style={{ color: '#856404', margin: 0, fontSize: '16px' }}>
              Built with React 18 and React Router v6 for modern 
              routing capabilities and component-based architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
