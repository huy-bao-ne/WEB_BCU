import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React basics' },
    { id: 2, text: 'Build a todo app' },
    { id: 3, text: 'Master useState Hook' }
  ]);

  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
        fontSize: '2rem'
      }}>
        📝 My Todo List
      </h2>

      {/* Input field và Add button */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '30px'
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          style={{
            flex: 1,
            padding: '12px 16px',
            fontSize: '16px',
            border: '2px solid #e9ecef',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#007bff'}
          onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          Add
        </button>
      </div>

      {/* List rendering - Display todos */}
      <div>
        {todos.length === 0 ? (
          <p style={{
            textAlign: 'center',
            color: '#6c757d',
            fontSize: '18px',
            fontStyle: 'italic',
            margin: '50px 0'
          }}>
            No todos yet. Add your first todo above! 🚀
          </p>
        ) : (
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {todos.map((todo) => (
              <li
                key={todo.id} // Unique key prop cho mỗi list item
                style={{
                  padding: '15px 20px',
                  marginBottom: '10px',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#495057',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#e9ecef';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                • {todo.text}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Todo count */}
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        color: '#6c757d',
        fontSize: '14px'
      }}>
        Total todos: <strong>{todos.length}</strong>
      </div>
    </div>
  );
}

export default TodoList;
