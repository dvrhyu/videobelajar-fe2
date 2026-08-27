import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          {/* SISI KIRI: LOGO & ALAMAT */}
          <div className="footer-info">
            <img src="/images/Logo.svg" alt="logo" className="footer-logo" />
            <p className="footer-description">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p>JL. Usman Effendi No. 50, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>

          {/* SISI KANAN: MENU LINK */}
          <div className="footer-menu">
            <div className="footer-column">
              <button type="button" className="footer-column-title">
                Kategori <i className="fa-solid fa-chevron-right"></i>
              </button>
              <div className="footer-links">
                <a href="#">Digital & Teknologi</a>
                <a href="#">Pemasaran</a>
                <a href="#">Manajemen Bisnis</a>
                <a href="#">Pengembangan Diri</a>
                <a href="#">Desain</a>
              </div>
            </div>

            <div className="footer-column">
              <button type="button" className="footer-column-title">
                Perusahaan <i className="fa-solid fa-chevron-right"></i>
              </button>
              <div className="footer-links">
                <a href="#">Tentang Kami</a>
                <a href="#">FAQ</a>
                <a href="#">Kebijaksanaan Privasi</a>
                <a href="#">Ketentuan Layanan</a>
                <a href="#">Bantuan</a>
              </div>
            </div>

            <div className="footer-column">
              <button type="button" className="footer-column-title">
                Komunitas <i className="fa-solid fa-chevron-right"></i>
              </button>
              <div className="footer-links">
                <a href="#">Tips Sukses</a>
                <a href="#">Blog</a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* FOOTER BWAH: COPYRIGHT & SOCIAL */}
        <div className="footer-bottom">
          <p>@ 2026 Devi Oktavia Rahayu. All Right Reserved.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com" aria-label="Linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.twitter.com" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}