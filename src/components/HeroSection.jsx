import React from 'react';

export default function HeroSection() {
  const handleScrollToCourses = () => {
    const coursesSection = document.getElementById('koleksi-kelas');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
        <p>
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
        </p>
        <button
          type="button"
          className="hero-button"
          onClick={handleScrollToCourses}
        >
          Temukan Video Course Untuk Dipelajari!
        </button>
      </div>
    </section>
  );
}