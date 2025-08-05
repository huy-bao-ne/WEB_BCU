import React, { useState } from 'react';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Exercise4 from './components/Exercise4';
import Exercise5 from './components/Exercise5';
import Exercise6 from './components/Exercise6';
import Exercise7 from './components/Exercise7';
import Exercise8 from './components/Exercise8';
import Exercise9 from './components/Exercise9';
import Exercise10 from './components/Exercise10';
import Exercise11 from './components/Exercise11';

function App() {
  const [currentExercise, setCurrentExercise] = useState(1);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f5f5f5', 
      minHeight: '100vh' 
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#333', marginBottom: '30px', fontSize: '2.5rem' }}>
          React Lab Exercises
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <button 
            onClick={() => setCurrentExercise(1)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 1 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 1 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 1: Hello World
          </button>
          <button 
            onClick={() => setCurrentExercise(2)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 2 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 2 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 2: Greeting Card
          </button>
          <button 
            onClick={() => setCurrentExercise(3)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 3 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 3 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 3: Counter App
          </button>
          <button 
            onClick={() => setCurrentExercise(4)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 4 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 4 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 4: Toggle Visibility
          </button>
          <button 
            onClick={() => setCurrentExercise(5)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 5 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 5 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 5: Todo List
          </button>
          <button 
            onClick={() => setCurrentExercise(6)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 6 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 6 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 6: List Filtering
          </button>
          <button 
            onClick={() => setCurrentExercise(7)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 7 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 7 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 7: Timer
          </button>
          <button 
            onClick={() => setCurrentExercise(8)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 8 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 8 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 8: Data Fetching
          </button>
          <button 
            onClick={() => setCurrentExercise(9)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 9 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 9 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 9: React Router
          </button>
          <button 
            onClick={() => setCurrentExercise(10)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 10 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 10 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 10: Login Form
          </button>
          <button 
            onClick={() => setCurrentExercise(11)}
            style={{
              padding: '15px 20px',
              backgroundColor: currentExercise === 11 ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              boxShadow: currentExercise === 11 ? '0 4px 12px rgba(0,123,255,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Bài 11: Theme Switcher
          </button>
        </div>
      </div>

      {currentExercise === 1 && <Exercise1 />}
      {currentExercise === 2 && <Exercise2 />}
      {currentExercise === 3 && <Exercise3 />}
      {currentExercise === 4 && <Exercise4 />}
      {currentExercise === 5 && <Exercise5 />}
      {currentExercise === 6 && <Exercise6 />}
      {currentExercise === 7 && <Exercise7 />}
      {currentExercise === 8 && <Exercise8 />}
      {currentExercise === 9 && <Exercise9 />}
      {currentExercise === 10 && <Exercise10 />}
      {currentExercise === 11 && <Exercise11 />}
    </div>
  );
}

export default App;
