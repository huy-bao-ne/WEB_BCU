import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themes = {
  light: {
    background: '#ffffff',
    surface: '#f8f9fa',
    primary: '#007bff',
    secondary: '#6c757d',
    text: '#212529',
    textSecondary: '#6c757d',
    border: '#dee2e6',
    shadow: 'rgba(0, 0, 0, 0.1)',
    cardBg: '#ffffff',
    buttonBg: '#007bff',
    buttonText: '#ffffff',
    toggleBg: '#e9ecef',
    toggleThumb: '#ffffff'
  },
  dark: {
    background: '#121212',
    surface: '#1e1e1e',
    primary: '#4dabf7',
    secondary: '#9ca3af',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    border: '#404040',
    shadow: 'rgba(0, 0, 0, 0.3)',
    cardBg: '#2d2d2d',
    buttonBg: '#4dabf7',
    buttonText: '#000000',
    toggleBg: '#404040',
    toggleThumb: '#ffffff'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const themeColors = themes[currentTheme];

  const value = {
    theme: currentTheme,
    colors: themeColors,
    toggleTheme,
    isLight: currentTheme === 'light',
    isDark: currentTheme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
