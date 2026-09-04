import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourses } from '../services/api';
import { setCourses } from '../store/redux/courseSlice';

import AppNavbar from '../components/AppNavbar';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import NewsletterBanner from '../components/NewsletterBanner'; 
import Footer from '../components/Footer';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Semua Kelas');
  
  const dispatch = useDispatch();
  
  const courses = useSelector((state) => state.courses.items);

  const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];

  useEffect(() => {
    getCourses()
      .then((data) => {
        dispatch(setCourses(data));
      })
      .catch((err) => console.error('Gagal mengambil data dari API:', err));
  }, [dispatch]);

  // Filter data berdasarkan kategori yang dipilih
  const filteredCourses =
    activeTab === 'Semua Kelas'
      ? courses
      : courses.filter((item) => item.category === activeTab);

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
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <CourseCard key={course.id || index } {...course} />
              ))
            ) : (
              <p className="text-center w-100 mt-4">Memuat data kelas...</p>
            )}
          </div>

          <NewsletterBanner />
        </section>
      </main>

      <Footer />
    </div>
  );
}