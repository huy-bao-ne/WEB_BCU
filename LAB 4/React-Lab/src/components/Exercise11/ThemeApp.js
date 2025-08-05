import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Header from './Header';
import ThemeToggle from './ThemeToggle';
import Card from './Card';
import Button from './Button';

function ThemeContent() {
  const { colors, theme } = useTheme();
  const [clickCount, setClickCount] = useState(0);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: colors.background,
      padding: '20px',
      transition: 'all 0.3s ease',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <Header />
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px'
        }}>
          <ThemeToggle />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <Card title="Context API" icon="⚡">
            <p style={{ margin: '0 0 15px 0' }}>
              This theme switcher demonstrates React Context API in action. 
              The theme state is shared across all components without prop drilling.
            </p>
            <div style={{
              padding: '10px',
              backgroundColor: colors.surface,
              borderRadius: '6px',
              fontSize: '14px',
              fontStyle: 'italic'
            }}>
              Current theme colors are automatically applied to all components!
            </div>
          </Card>

          <Card title="Persistent Storage" icon="💾">
            <p style={{ margin: '0 0 15px 0' }}>
              Your theme preference is automatically saved to localStorage 
              and will persist across browser sessions.
            </p>
            <div style={{
              padding: '10px',
              backgroundColor: colors.surface,
              borderRadius: '6px',
              fontSize: '14px'
            }}>
              <strong>Storage Key:</strong> <code style={{ 
                backgroundColor: colors.primary + '20',
                padding: '2px 6px',
                borderRadius: '4px',
                color: colors.primary
              }}>theme</code><br/>
              <strong>Current Value:</strong> <code style={{ 
                backgroundColor: colors.primary + '20',
                padding: '2px 6px',
                borderRadius: '4px',
                color: colors.primary
              }}>{theme}</code>
            </div>
          </Card>

          <Card title="Interactive Demo" icon="🎮">
            <p style={{ margin: '0 0 15px 0' }}>
              Test the theme switching with interactive elements. 
              All components respond to theme changes instantly.
            </p>
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              marginTop: '15px'
            }}>
              <Button 
                variant="primary" 
                size="small"
                onClick={() => setClickCount(c => c + 1)}
              >
                🚀 Click Me ({clickCount})
              </Button>
              <Button variant="secondary" size="small">
                📋 Secondary
              </Button>
              <Button variant="outline" size="small">
                📝 Outline
              </Button>
            </div>
          </Card>
        </div>

        <div style={{
          backgroundColor: colors.surface,
          padding: '25px',
          borderRadius: '12px',
          border: `2px solid ${colors.border}`,
          textAlign: 'center'
        }}>
          <h3 style={{
            color: colors.text,
            margin: '0 0 15px 0'
          }}>
            🎨 Theme Features
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px',
            marginTop: '20px'
          }}>
            <div style={{
              padding: '15px',
              backgroundColor: colors.cardBg,
              borderRadius: '8px',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🌈</div>
              <strong style={{ color: colors.text }}>Dynamic Colors</strong>
              <p style={{ 
                color: colors.textSecondary, 
                fontSize: '14px', 
                margin: '5px 0 0 0' 
              }}>
                All colors change instantly
              </p>
            </div>
            
            <div style={{
              padding: '15px',
              backgroundColor: colors.cardBg,
              borderRadius: '8px',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🔄</div>
              <strong style={{ color: colors.text }}>State Management</strong>
              <p style={{ 
                color: colors.textSecondary, 
                fontSize: '14px', 
                margin: '5px 0 0 0' 
              }}>
                Global state with Context
              </p>
            </div>
            
            <div style={{
              padding: '15px',
              backgroundColor: colors.cardBg,
              borderRadius: '8px',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>💾</div>
              <strong style={{ color: colors.text }}>Persistence</strong>
              <p style={{ 
                color: colors.textSecondary, 
                fontSize: '14px', 
                margin: '5px 0 0 0' 
              }}>
                Remembers your choice
              </p>
            </div>
            
            <div style={{
              padding: '15px',
              backgroundColor: colors.cardBg,
              borderRadius: '8px',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>⚡</div>
              <strong style={{ color: colors.text }}>Performance</strong>
              <p style={{ 
                color: colors.textSecondary, 
                fontSize: '14px', 
                margin: '5px 0 0 0' 
              }}>
                No prop drilling needed
              </p>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '20px',
          textAlign: 'center',
          padding: '15px',
          backgroundColor: colors.primary + '15',
          borderRadius: '8px',
          border: `1px solid ${colors.primary}30`
        }}>
          <span style={{
            color: colors.primary,
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            💡 Try switching themes and notice how all components update instantly!
          </span>
        </div>
      </div>
    </div>
  );
}

function ThemeApp() {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  );
}

export default ThemeApp;
