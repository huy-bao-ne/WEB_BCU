import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '40px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          textAlign: 'center',
          border: '2px solid #e74c3c'
        }}>
          <div style={{fontSize: '4rem', marginBottom: '20px'}}>💥</div>
          <h3 style={{color: '#e74c3c', marginBottom: '15px'}}>Oops! Something went wrong</h3>
          <p style={{color: '#666', marginBottom: '25px'}}>
            The Error Boundary caught an error and prevented the entire app from crashing.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            🔄 Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
