import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validate = () => {
    if (!email || !password) return 'Email and password are required.';
    if (!email.includes('@')) return 'Email is invalid.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      setSuccess('');
    } else {
      setError('');
      setSuccess('Login successful!');
    }
  };

  const isValid = !validate();

  return (
    <div className="login-form">
      <h2>🔐 Login Form</h2>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-label="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              aria-label="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" disabled={!isValid} className="submit-button">
            {isValid ? 'Sign In' : 'Please complete form'}
          </button>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </form>
        <div className="form-footer">
          <p>Test with any email and password (6+ characters)</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
