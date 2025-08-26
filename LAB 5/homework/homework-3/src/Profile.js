import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <button onClick={() => { logout(); navigate('/login'); }}>Logout</button>
    </div>
  );
}

export default Profile;
