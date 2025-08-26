
import React, { useState } from 'react';
import DataLoader from './components/Exercise13/DataLoader';
import TodoListReducer from './components/Exercise14/TodoListReducer';
import OptimizedList from './components/Exercise15/OptimizedList';
import ErrorBoundary from './components/Exercise16/ErrorBoundary';
import BuggyComponent from './components/Exercise16/BuggyComponent';
import Modal from './components/Exercise17/Modal';
import Counter from './components/Exercise18/Counter';
import LoginForm from './components/Exercise19/LoginForm';

function App() {
  const [currentExercise, setCurrentExercise] = useState('13');
  const [modalOpen, setModalOpen] = useState(false);

  const renderExercise = () => {
    switch (currentExercise) {
      case '13':
        return (
          <div>
            <h2 className="exercise-title">Exercise 13: Render Props for Data Fetching</h2>
            <DataLoader
              render={({ data, loading, error }) => {
                if (loading) return <div className="loading">🔄 Loading data...</div>;
                if (error) return <div className="error-state">❌ Error: {error}</div>;
                return (
                  <div className="data-loader-content">
                    <h3>📝 Post Data:</h3>
                    <div><strong>🏷️ Title:</strong> {data.title}</div>
                    <div><strong>📄 Body:</strong> {data.body}</div>
                    <div><strong>🆔 ID:</strong> {data.id}</div>
                    <div><strong>👤 User ID:</strong> {data.userId}</div>
                  </div>
                );
              }}
            />
          </div>
        );
      case '14':
        return <TodoListReducer />;
      case '15':
        return <OptimizedList />;
      case '16':
        return (
          <div>
            <h2 className="exercise-title">Exercise 16: Error Boundary</h2>
            <div style={{textAlign: 'center', marginBottom: '20px', color: '#666'}}>
              ⚠️ Click the button 5 times to trigger an error and see the Error Boundary in action!
            </div>
            <ErrorBoundary>
              <BuggyComponent />
            </ErrorBoundary>
          </div>
        );
      case '17':
        return (
          <div>
            <h2 className="exercise-title">Exercise 17: Modal with Portals</h2>
            <div style={{textAlign: 'center'}}>
              <button 
                onClick={() => setModalOpen(true)}
                style={{
                  padding: '15px 30px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
              >
                🚪 Open Modal
              </button>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
              <h3 style={{color: '#333', marginBottom: '15px'}}>🎉 This is a modal!</h3>
              <p style={{color: '#666', marginBottom: '20px'}}>
                This modal is rendered using React Portals, which allows it to render outside the normal DOM hierarchy.
              </p>
              <p style={{color: '#888', fontSize: '14px'}}>
                💡 Click outside or the × button to close.
              </p>
            </Modal>
          </div>
        );
      case '18':
        return <Counter />;
      case '19':
        return <LoginForm />;
      default:
        return <div>Select an exercise</div>;
    }
  };

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2.5rem'
      }}>React Lab - Advanced Exercises</h1>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '30px',
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {[
          { id: '13', title: 'Render Props', desc: 'Data Fetching' },
          { id: '14', title: 'useReducer', desc: 'Todo List' },
          { id: '15', title: 'Performance', desc: 'Optimized List' },
          { id: '16', title: 'Error Boundary', desc: 'Error Handling' },
          { id: '17', title: 'Modal Portals', desc: 'Portal Component' },
          { id: '18', title: 'Counter Testing', desc: 'React Testing' },
          { id: '19', title: 'Form Testing', desc: 'Form Validation' }
        ].map(exercise => (
          <button 
            key={exercise.id}
            onClick={() => setCurrentExercise(exercise.id)}
            style={{
              padding: '15px',
              border: currentExercise === exercise.id ? '2px solid #667eea' : '2px solid transparent',
              borderRadius: '8px',
              background: currentExercise === exercise.id 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : 'white',
              color: currentExercise === exercise.id ? 'white' : '#333',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '14px',
              fontWeight: '500',
              textAlign: 'center',
              boxShadow: currentExercise === exercise.id 
                ? '0 4px 15px rgba(102, 126, 234, 0.4)' 
                : '0 2px 4px rgba(0,0,0,0.1)',
              transform: currentExercise === exercise.id ? 'translateY(-2px)' : 'none'
            }}
            onMouseOver={(e) => {
              if (currentExercise !== exercise.id) {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (currentExercise !== exercise.id) {
                e.target.style.transform = 'none';
                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
              Exercise {exercise.id}
            </div>
            <div style={{ fontSize: '12px', opacity: '0.9' }}>
              {exercise.title}
            </div>
            <div style={{ fontSize: '10px', opacity: '0.7', marginTop: '2px' }}>
              {exercise.desc}
            </div>
          </button>
        ))}
      </div>
      
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        border: '1px solid #e9ecef'
      }}>
        {renderExercise()}
      </div>
    </div>
  );
}

export default App;
