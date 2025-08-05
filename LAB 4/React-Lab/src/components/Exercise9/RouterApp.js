import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function RouterApp() {
  return (
    <Router>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '30px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          border: '2px solid #e9ecef'
        }}>
          <h1 style={{
            color: '#495057',
            margin: '0 0 10px 0',
            fontSize: '2.5rem'
          }}>
            🧭 React Router Navigation
          </h1>
          <p style={{
            color: '#6c757d',
            margin: 0,
            fontSize: '16px'
          }}>
           React Router
          </p>
        </div>

        <Navigation />
        
        <div style={{
          minHeight: '400px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default RouterApp;
