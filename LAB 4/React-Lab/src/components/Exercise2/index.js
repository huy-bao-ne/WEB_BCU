import React from 'react';
import GreetingCard from './GreetingCard';

function Exercise2() {
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
        Bài 2: Greeting Cards
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <GreetingCard name="BCU" />
        <GreetingCard name="CS" />
        <GreetingCard name="CSBU" />
        <GreetingCard name="AWS" />
      </div>
    </div>
  );
}

export default Exercise2;
