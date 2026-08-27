import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Tambahkan prop isAuthPage (default-nya false)
export default function AppNavbar({ isAuthPage = false }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userProfile');
    localStorage.removeItem('isLoggedIn');
    setIsDropdownOpen(false);
    navigate('/login');
  };

  return (
    <header className="navbar" style={{ padding: '16px 40px', backgroundColor: '#fff', borderBottom: '1px solid #eee', position: 'relative' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO (Selalu tampil di semua halaman) */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src="/images/Logo.svg" alt="videobelajar" style={{ height: '36px' }} />
        </Link>

        {/* JIKA BUKAN AUTH PAGE: Tampilkan menu Kategori & Avatar */}
        {!isAuthPage && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', position: 'relative' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#666', cursor: 'pointer' }}>Kategori</span>

            {/* AVATAR PROFIL & DROPDOWN */}
            <div style={{ position: 'relative' }}>
              <img
                src="/images/Avatar.png"
                alt="Profil User"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* DROPDOWN MENU */}
              {isDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '52px',
                    backgroundColor: '#fff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    borderRadius: '10px',
                    width: '180px',
                    border: '1px solid #f0f0f0',
                    zIndex: 1000,
                    overflow: 'hidden'
                  }}
                >
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    <li style={{ borderBottom: '1px solid #f5f5f5' }}>
                      <Link
                        to="/profile"
                        onClick={() => setIsDropdownOpen(false)}
                        style={{ display: 'block', padding: '12px 16px', color: '#333', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}
                      >
                        Profil Saya
                      </Link>
                    </li>
                    <li style={{ borderBottom: '1px solid #f5f5f5' }}>
                      <Link
                        to="/my-class"
                        onClick={() => setIsDropdownOpen(false)}
                        style={{ display: 'block', padding: '12px 16px', color: '#333', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}
                      >
                        Kelas Saya
                      </Link>
                    </li>
                    <li style={{ borderBottom: '1px solid #f5f5f5' }}>
                      <Link
                        to="/my-orders"
                        onClick={() => setIsDropdownOpen(false)}
                        style={{ display: 'block', padding: '12px 16px', color: '#333', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}
                      >
                        Pesanan Saya
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={handleLogout}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justify: 'space-between',
                          width: '100%',
                          padding: '12px 16px',
                          color: '#FF5C38',
                          background: 'none',
                          border: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        Keluar <i className="fa-solid fa-right-from-bracket"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}