import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

export default function ProfilePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'Perempuan',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  // 1. Ambil data registrasi/login dari localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setFormData((prev) => ({
        ...prev,
        name: parsed.name || prev.name,
        email: parsed.email || prev.email,
        phone: parsed.phone || prev.phone,
        gender: parsed.gender || prev.gender,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. Simpan perubahan ke localStorage menggunakan key 'userProfile'
  const handleSave = (e) => {
    e.preventDefault();
    const updatedUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
    };
    localStorage.setItem('userProfile', JSON.stringify(updatedUser));
    alert('Profil berhasil diperbarui!');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      gender: 'Perempuan',
      phone: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div style={{ backgroundColor: '#FFFDF8', minHeight: '100vh' }}>
      {/* Gunakan Reusable AppNavbar */}
      <AppNavbar />

      {/* CONTAINER KONTEN UTAMA */}
      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        
        {/* SIDEBAR KIRI */}
        <aside style={{ width: '280px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#222', margin: '0 0 4px 0' }}>Ubah Profile</h2>
          <p style={{ color: '#888', fontSize: '14px', margin: '0 0 24px 0' }}>Ubah Data Diri Anda</p>

          <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #eaeaea', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button type="button" style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '12px 16px', background: '#FFFDF0', border: '1px solid #FFC045', borderRadius: '8px', color: '#FF5C00', fontWeight: '600', cursor: 'pointer', textAlign: 'left' }}>
              <i className="fa-regular fa-user"></i> Profile
            </button>
            <button type="button" style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '12px 16px', background: 'transparent', border: 'none', borderRadius: '8px', color: '#777', fontWeight: '500', cursor: 'pointer', textAlign: 'left' }}>
              <i className="fa-regular fa-bookmark"></i> Kelas Saya
            </button>
            <button type="button" style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '12px 16px', background: 'transparent', border: 'none', borderRadius: '8px', color: '#777', fontWeight: '500', cursor: 'pointer', textAlign: 'left' }}>
              <i className="fa-solid fa-cart-shopping"></i> Pesanan Saya
            </button>
          </div>
        </aside>

        {/* KARTU FORM KANAN */}
        <section style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '16px', padding: '36px' }}>
          
          {/* HEADER PROFIL & FOTO */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingBottom: '24px', borderBottom: '1px solid #eaeaea', marginBottom: '28px' }}>
            <img src="/images/Avatar.png" alt="profile" style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 4px 0', color: '#222' }}>{formData.name || 'User'}</h3>
              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '14px' }}>{formData.email}</p>
              <button type="button" style={{ background: 'transparent', border: 'none', color: '#FF5C00', fontWeight: '600', fontSize: '13px', cursor: 'pointer', padding: 0 }}>
                Ganti Foto Profile
              </button>
            </div>
          </div>

          {/* FORM UBAH DATA */}
          <form onSubmit={handleSave}>
            {/* Nama Lengkap */}
            <div style={{ marginBottom: '20px' }}>
              <label className="form-label">Nama Lengkap</label>
              <input type="text" name="name" className="form-control" style={{ width: '100%' }} value={formData.name} onChange={handleChange} />
            </div>

            {/* E-Mail */}
            <div style={{ marginBottom: '20px' }}>
              <label className="form-label">E-Mail</label>
              <input type="email" name="email" className="form-control" style={{ width: '100%' }} value={formData.email} onChange={handleChange} />
            </div>

            {/* Jenis Kelamin */}
            <div style={{ marginBottom: '20px' }}>
              <label className="form-label">Jenis Kelamin</label>
              <select name="gender" className="form-select" style={{ width: '100%' }} value={formData.gender} onChange={handleChange}>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* No.Hp */}
            <div style={{ marginBottom: '20px' }}>
              <label className="form-label">No.Hp</label>
              <div className="phone-group">
                <select className="form-select dial-code">
                  <option value="+62">🇮🇩 +62</option>
                </select>
                <input type="tel" name="phone" className="form-control" style={{ flex: 1 }} value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            {/* Password Baru */}
            <div style={{ marginBottom: '20px' }}>
              <label className="form-label">Password Baru</label>
              <div className="password-wrapper">
                <input type="password" name="password" className="form-control" style={{ width: '100%' }} placeholder="Masukkan Password" value={formData.password} onChange={handleChange} />
                <button type="button" className="password-toggle"><i className="fa-regular fa-eye-slash"></i></button>
              </div>
            </div>

            {/* Konfirmasi Password Baru */}
            <div style={{ marginBottom: '32px' }}>
              <label className="form-label">Konfirmasi Password Baru</label>
              <div className="password-wrapper">
                <input type="password" name="confirmPassword" className="form-control" style={{ width: '100%' }} placeholder="Masukkan Konfirmasi Password" value={formData.confirmPassword} onChange={handleChange} />
                <button type="button" className="password-toggle"><i className="fa-regular fa-eye-slash"></i></button>
              </div>
            </div>

            {/* TOMBOL HAPUS & SIMPAN */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
              <button type="button" onClick={handleReset} style={{ backgroundColor: '#FF5C38', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 28px', fontWeight: '600', cursor: 'pointer' }}>
                Hapus
              </button>
              <button type="submit" style={{ backgroundColor: '#3EC163', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 28px', fontWeight: '600', cursor: 'pointer' }}>
                Simpan
              </button>
            </div>
          </form>

        </section>
      </main>
      <Footer />
    </div>
  );
}