import React, { useState } from 'react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setShowAlert(true);
      setEmail('');
    }
  };

  return (
    <>
      <div className="newsletter-banner">
        <div className="newsletter-content">
          <p className="newsletter-label">NEWSLETTER</p>
          <h2>Mau Belajar Lebih Banyak?</h2>
          <p>
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik videobelajar.id
          </p>
        </div>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">
            Subscribe
          </button>
        </form>
      </div>

      {/* Pop-up Notifikasi Sederhana */}
      {showAlert && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99999,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '28px 32px',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              maxWidth: '360px',
              width: '90%',
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎉</div>
            <h3 style={{ color: '#222', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
              Berhasil subscribe!
            </h3>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
              Terima kasih telah berlangganan newsletter hariesok.id
            </p>
            <button
              type="button"
              className="primary-auth-button"
              onClick={() => setShowAlert(false)}
              style={{ color: '#fff', cursor: 'pointer' }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}