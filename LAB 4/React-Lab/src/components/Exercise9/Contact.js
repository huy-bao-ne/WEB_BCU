import React from 'react';

function Contact() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      margin: '20px 0'
    }}>
      <h1 style={{ 
        color: '#dc3545', 
        marginBottom: '20px',
        fontSize: '3rem'
      }}>
        📞 Contact Us
      </h1>
      <p style={{ 
        color: '#6c757d', 
        fontSize: '18px',
        marginBottom: '40px'
      }}>
        Get in touch with us through any of the following channels:
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          padding: '25px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📧</div>
          <h3 style={{ color: '#495057', margin: '0 0 10px 0' }}>Email</h3>
          <p style={{ color: '#007bff', margin: 0, fontWeight: 'bold' }}>
            23560005@gm.uit.edu.vn
          </p>
        </div>
        
        <div style={{
          padding: '25px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📱</div>
          <h3 style={{ color: '#495057', margin: '0 0 10px 0' }}>Phone</h3>
          <p style={{ color: '#28a745', margin: 0, fontWeight: 'bold' }}>
           113
          </p>
        </div>
        
        <div style={{
          padding: '25px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📍</div>
          <h3 style={{ color: '#495057', margin: '0 0 10px 0' }}>Address</h3>
          <p style={{ color: '#6c757d', margin: 0 }}>
            UIT School<br />
            HO CHI MINH CITY
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
