import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const reloadData = () => {
    setUserData(null);
    setError(null);
    setLoading(true);
    
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setUserData(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }, 1000); // Simulate loading delay
  };

  // Loading state
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid #e3f2fd',
          borderTop: '5px solid #2196f3',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '20px'
        }}></div>
        <h3 style={{ color: '#666', margin: 0 }}>Loading user data...</h3>
        <p style={{ color: '#999', fontSize: '14px', marginTop: '10px' }}>
          Fetching from JSONPlaceholder API
        </p>
        
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <div style={{
          fontSize: '4rem',
          marginBottom: '20px'
        }}>❌</div>
        <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>
          Error Loading Data
        </h3>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: '25px' }}>
          {error}
        </p>
        <button
          onClick={reloadData}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: '#3498db',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 15px',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}>
          {userData.name.charAt(0)}
        </div>
        <h2 style={{ color: '#2c3e50', margin: '0 0 5px 0' }}>
          {userData.name}
        </h2>
        <p style={{ color: '#7f8c8d', margin: 0, fontSize: '16px' }}>
          @{userData.username}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gap: '15px',
        marginBottom: '25px'
      }}>
        {/* Email */}
        <div style={{
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ color: '#6c757d', fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>
            EMAIL
          </div>
          <div style={{ color: '#495057', fontSize: '16px' }}>
            {userData.email}
          </div>
        </div>

        {/* Website */}
        <div style={{
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ color: '#6c757d', fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>
            WEBSITE
          </div>
          <div style={{ color: '#495057', fontSize: '16px' }}>
            <a href={`http://${userData.website}`} target="_blank" rel="noopener noreferrer" 
               style={{ color: '#007bff', textDecoration: 'none' }}>
              {userData.website}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div style={{
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ color: '#6c757d', fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>
            PHONE
          </div>
          <div style={{ color: '#495057', fontSize: '16px' }}>
            {userData.phone}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={reloadData}
          style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
        >
          🔄 Reload Data
        </button>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#e3f2fd',
        borderRadius: '6px',
        fontSize: '12px',
        color: '#1976d2',
        textAlign: 'center'
      }}>
        Data fetched from: JSONPlaceholder API
      </div>
    </div>
  );
}

export default UserProfile;
