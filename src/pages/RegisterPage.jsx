import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import AuthForm from '../components/AuthForm';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    localStorage.setItem('userProfile', JSON.stringify({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender
    }));
    
    
    navigate('/login');
  };

  return (
    <div style={{ backgroundColor: '#FFFDF8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <AppNavbar isAuthPage={true} />

      {/* Form Card via AuthForm Component */}
      <main className="auth-wrapper" style={{ flex: 1, padding: '40px 0' }}>
        <div className="auth-container">
          <AuthForm type="register" onSubmit={handleRegister} />
        </div>
      </main>
    </div>
  );
}