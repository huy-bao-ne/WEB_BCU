import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (value) => {
    if (!value) {
      return 'Email is required';
    }
    if (!value.includes('@')) {
      return 'Email must contain "@" symbol';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (value) => {
    if (!value) {
      return 'Password is required';
    }
    if (value.length < 6) {
      return 'Password should be at least 6 characters long';
    }
    return '';
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
    setShowSuccess(false);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
    setShowSuccess(false);
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password));
  };

  const isFormValid = () => {
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    return !emailErr && !passwordErr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    
    setEmailError(emailErr);
    setPasswordError(passwordErr);
    
    if (!emailErr && !passwordErr) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setEmail('');
        setPassword('');
        setEmailError('');
        setPasswordError('');
      }, 1500);
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '40px',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: '10px'
        }}>🔐</div>
        <h2 style={{
          color: '#333',
          margin: '0 0 5px 0',
          fontSize: '1.8rem'
        }}>
          Login Form
        </h2>
        <p style={{
          color: '#666',
          margin: 0,
          fontSize: '14px'
        }}>
          Enter your credentials to continue
        </p>
      </div>

      {showSuccess && (
        <div style={{
          padding: '15px',
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>✅</div>
          <p style={{
            color: '#155724',
            margin: 0,
            fontWeight: 'bold'
          }}>
            Login successful! Welcome back.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '12px 15px',
              fontSize: '16px',
              border: `2px solid ${emailError ? '#dc3545' : (email && !emailError ? '#28a745' : '#e9ecef')}`,
              borderRadius: '8px',
              outline: 'none',
              transition: 'all 0.2s',
              backgroundColor: emailError ? '#fff5f5' : (email && !emailError ? '#f8fff8' : '#fff'),
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              if (!emailError) {
                e.target.style.borderColor = '#007bff';
              }
            }}
          />
          {emailError && (
            <div style={{
              color: '#dc3545',
              fontSize: '12px',
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <span>⚠️</span>
              {emailError}
            </div>
          )}
          {email && !emailError && (
            <div style={{
              color: '#28a745',
              fontSize: '12px',
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <span>✓</span>
              Email looks good!
            </div>
          )}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '12px 15px',
              fontSize: '16px',
              border: `2px solid ${passwordError ? '#dc3545' : (password && !passwordError ? '#28a745' : '#e9ecef')}`,
              borderRadius: '8px',
              outline: 'none',
              transition: 'all 0.2s',
              backgroundColor: passwordError ? '#fff5f5' : (password && !passwordError ? '#f8fff8' : '#fff'),
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              if (!passwordError) {
                e.target.style.borderColor = '#007bff';
              }
            }}
          />
          {passwordError && (
            <div style={{
              color: '#dc3545',
              fontSize: '12px',
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <span>⚠️</span>
              {passwordError}
            </div>
          )}
          {password && !passwordError && (
            <div style={{
              color: '#28a745',
              fontSize: '12px',
              marginTop: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <span>✓</span>
              Password is secure!
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid() || isSubmitting}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: !isFormValid() ? '#6c757d' : (isSubmitting ? '#007bff' : '#28a745'),
            border: 'none',
            borderRadius: '8px',
            cursor: !isFormValid() || isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s',
            opacity: !isFormValid() ? 0.6 : 1,
            transform: isSubmitting ? 'scale(0.98)' : 'scale(1)'
          }}
          onMouseOver={(e) => {
            if (isFormValid() && !isSubmitting) {
              e.target.style.backgroundColor = '#218838';
              e.target.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseOut={(e) => {
            if (isFormValid() && !isSubmitting) {
              e.target.style.backgroundColor = '#28a745';
              e.target.style.transform = 'translateY(0)';
            }
          }}
        >
          {isSubmitting ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid #ffffff40',
                borderTop: '2px solid #ffffff',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></div>
              Logging in...
            </span>
          ) : (
            '🚀 Login'
          )}
        </button>
      </form>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        fontSize: '12px',
        color: '#6c757d'
      }}>
        <strong>Validation Rules:</strong>
        <ul style={{ margin: '5px 0 0 0', paddingLeft: '15px' }}>
          <li>Email must contain "@" symbol and be valid format</li>
          <li>Password must be at least 6 characters long</li>
        </ul>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default LoginForm;
