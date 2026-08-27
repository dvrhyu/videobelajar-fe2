import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ type = 'login', onSubmit }) => {
  const isRegister = type === 'register';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="auth-card">
      <h1>{isRegister ? 'Pendaftaran Akun' : 'Masuk ke Akun'}</h1>
      <p className="subtitle">
        {isRegister ? 'Yuk, daftarkan akunmu sekarang juga!' : 'Yuk, tingkatkan kemampuannmu bersama Video Course.'}
      </p>

      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div style={{ marginBottom: '16px' }}>
            <label className="form-label">
              Nama Lengkap <span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              style={{ width: '100%' }}
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div style={{ marginBottom: '16px' }}>
          <label className="form-label">
            E-Mail <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            style={{ width: '100%' }}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {isRegister && (
          <>
            <div style={{ marginBottom: '16px' }}>
              <label className="form-label">
                Jenis Kelamin <span className="required">*</span>
              </label>
              <select
                name="gender"
                className="form-select"
                style={{ width: '100%' }}
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label className="form-label">
                No. Hp <span className="required">*</span>
              </label>
              <div className="phone-group">
                <select className="form-select dial-code">
                  <option value="+62">🇮🇩 +62</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  style={{ flex: 1 }}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </>
        )}

        <div style={{ marginBottom: '16px' }}>
          <label className="form-label">
            Kata Sandi <span className="required">*</span>
          </label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="form-control"
              style={{ width: '100%' }}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
        </div>

        {isRegister ? (
          <div style={{ marginBottom: '8px' }}>
            <label className="form-label">
              Konfirmasi Kata Sandi <span className="required">*</span>
            </label>
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                className="form-control"
                style={{ width: '100%' }}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className={`fa-regular ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="form-action">
            <a href="#forgot">Lupa Password?</a>
          </div>
        )}

        {isRegister && (
          <div className="form-action">
            <a href="#forgot">Lupa Password?</a>
          </div>
        )}

        <button type="submit" className="primary-auth-button" style={{ color: '#fff', cursor: 'pointer' }}>
          {isRegister ? 'Daftar' : 'Masuk'}
        </button>

        <Link to={isRegister ? '/login' : '/register'} style={{ textDecoration: 'none', display: 'block' }}>
          <button type="button" className="secondary-auth-button" style={{ width: '100%', cursor: 'pointer' }}>
            {isRegister ? 'Masuk' : 'Daftar'}
          </button>
        </Link>

        <div className="divider">
          <span>Atau</span>
        </div>

        <button type="button" className="google-button" style={{ cursor: 'pointer' }}>
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            style={{ width: '18px', height: '18px' }}
          />
          {isRegister ? 'Daftar dengan Google' : 'Masuk dengan Google'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;