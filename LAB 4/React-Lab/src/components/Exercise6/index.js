import React from 'react';
import FilterableTodoList from './FilterableTodoList';

function Exercise6() {
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
        Bài 6: Filterable Todo List
      </h2>
      <FilterableTodoList />
    </div>
  );
}

export default Exercise6;
