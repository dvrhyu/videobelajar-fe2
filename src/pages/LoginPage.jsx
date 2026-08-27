import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userProfile', JSON.stringify({
      name: formData.email.split('@')[0],
      email: formData.email
    }));
    navigate('/profile');
  };

  return (
    <div className="page-wrapper">
      <AppNavbar isAuthPage={true} /> 
      <main className="auth-container">
        <AuthForm type="login" onSubmit={handleLogin} />
      </main>
    </div>
  );
};

export default LoginPage;