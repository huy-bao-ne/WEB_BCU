import React from 'react';
import UserProfile from './UserProfile';

function Exercise8() {
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
        Bài 8: User Profile
      </h2>
      <UserProfile />
    </div>
  );
}

export default Exercise8;
