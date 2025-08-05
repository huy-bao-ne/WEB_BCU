import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      backgroundColor: '#fff',
      borderRadius: '20px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      {/* Timer Display */}
      <div style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: '30px',
        fontFamily: 'monospace',
        letterSpacing: '2px',
        padding: '20px',
        backgroundColor: '#ecf0f1',
        borderRadius: '15px',
        minWidth: '200px',
        textAlign: 'center',
        boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {formatTime(seconds)}
      </div>

      {/* Status Indicator */}
      <div style={{
        marginBottom: '25px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: isRunning ? '#27ae60' : '#e74c3c',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: isRunning ? '#27ae60' : '#e74c3c',
          animation: isRunning ? 'pulse 2s infinite' : 'none'
        }}></div>
        {isRunning ? 'Running' : 'Paused'}
      </div>

      {/* Control Buttons */}
      <div style={{
        display: 'flex',
        gap: '15px',
        marginBottom: '20px'
      }}>
        {!isRunning ? (
          <button
            onClick={startTimer}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              minWidth: '80px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#229954'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
          >
            Start
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#f39c12',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              minWidth: '80px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e67e22'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#f39c12'}
          >
            Pause
          </button>
        )}

        <button
          onClick={resetTimer}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            minWidth: '80px'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
        >
          Reset
        </button>
      </div>

      {/* Info */}
      <div style={{
        fontSize: '14px',
        color: '#7f8c8d',
        textAlign: 'center',
        lineHeight: '1.4'
      }}>
        <p style={{ margin: '5px 0' }}>
          <strong>Total elapsed:</strong> {seconds} seconds
        </p>
        <p style={{ margin: '5px 0' }}>
          Timer updates every second using <code>useEffect</code>
        </p>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Timer;
