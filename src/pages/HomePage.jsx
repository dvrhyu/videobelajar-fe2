import React, { useState } from 'react';

import AppNavbar from '../components/AppNavbar';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import NewsletterBanner from '../components/NewsletterBanner'; 
import Footer from '../components/Footer';

const initialCourses = [
  {
    id: 1,
    image: '/images/course1.png',
    title: 'Big 4 Auditor Financial Analyst',
    description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    mentorImage: '/images/Avatar-2.png',
    mentorName: 'Jenna Ortega',
    mentorRole: 'Senior Accountant di Gojek',
    price: 'Rp 300K',
    category: 'Pemasaran',
  },
  {
    id: 2,
    image: '/images/course2.png',
    title: 'Big 4 Auditor Financial Analyst',
    description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    mentorImage: '/images/Avatar-3.png',
    mentorName: 'Jenna Ortega',
    mentorRole: 'Senior Accountant di Gojek',
    price: 'Rp 300K',
    category: 'Desain',
  },
  {
    id: 3,
    image: '/images/course3.png',
    title: 'Big 4 Auditor Financial Analyst',
    description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    mentorImage: '/images/Avatar-3.png',
    mentorName: 'Jenna Ortega',
    mentorRole: 'Senior Accountant di Gojek',
    price: 'Rp 300K',
    category: 'Pengembangan Diri',
  },
  {
    id: 4,
    image: '/images/course4.png',
    title: 'Big 4 Auditor Financial Analyst',
    description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    mentorImage: '/images/Avatar-4.png',
    mentorName: 'Jenna Ortega',
    mentorRole: 'Senior Accountant di Gojek',
    price: 'Rp 300K',
    category: 'Bisnis',
  },
  {
    id: 5,
    image: '/images/course5.png',
    title: 'Big 4 Auditor Financial Analyst',
    description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    mentorImage: '/images/Avatar-5.png',
    mentorName: 'Jenna Ortega',
    mentorRole: 'Senior Accountant di Gojek',
    price: 'Rp 300K',
    category: 'Pemasaran',
  },
  {
    id: 6,
    image: '/images/course6.png',
    title: 'Big 4 Auditor Financial Analyst',
    description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    mentorImage: '/images/Avatar-6.png',
    mentorName: 'Jenna Ortega',
    mentorRole: 'Senior Accountant di Gojek',
    price: 'Rp 300K',
    category: 'Desain',
  },
  {
    id: 7,
    image: '/images/course7.png',
    title: 'Big 4 Auditor Financial Analyst',
    description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    mentorImage: '/images/Avatar-7.png',
    mentorName: 'Jenna Ortega',
    mentorRole: 'Senior Accountant di Gojek',
    price: 'Rp 300K',
    category: 'Pengembangan Diri',
  },
  {
    id: 8,
    image: '/images/course8.png',
    title: 'Big 4 Auditor Financial Analyst',
    description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    mentorImage: '/images/Avatar-8.png',
    mentorName: 'Jenna Ortega',
    mentorRole: 'Senior Accountant di Gojek',
    price: 'Rp 300K',
    category: 'Bisnis',
  },
  {
    id: 9,
    image: '/images/course9.png',
    title: 'Big 4 Auditor Financial Analyst',
    description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    mentorImage: '/images/Avatar-9.png',
    mentorName: 'Jenna Ortega',
    mentorRole: 'Senior Accountant di Gojek',
    price: 'Rp 300K',
    category: 'Pemasaran',
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Semua Kelas');

  const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];

  const filteredCourses =
    activeTab === 'Semua Kelas'
      ? initialCourses
      : initialCourses.filter((item) => item.category === activeTab);

  return (
    <div>
      <AppNavbar />

      <main className="main-content">
        <HeroSection />

        <section id="koleksi-kelas" className="courses-section">
          <div className="container">
            <div>
              <h2>Koleksi Video Pembelajaran Unggulan</h2>
              <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
            </div>
          </div>

          <div className="tabs-container">
            {categories.map((tab) => (
              <button
                key={tab}
                className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <NewsletterBanner />
        </section>
      </main>

      <Footer />
    </div>
  );
}