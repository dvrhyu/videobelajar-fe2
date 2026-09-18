import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCourses, addCourseApi, updateCourseApi, deleteCourseApi } from '../services/api';
import { setCourses, addCourse, updateCourse, deleteCourse } from '../store/redux/courseSlice';

import AppNavbar from '../components/AppNavbar';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import NewsletterBanner from '../components/NewsletterBanner'; 
import Footer from '../components/Footer';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Semua Kelas');
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses.items);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: 'Pemasaran',
    mentorName: '',
    mentorRole: '',
    mentorImage: ''
  });

  const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];

  useEffect(() => {
    getCourses()
      .then((data) => dispatch(setCourses(data)))
      .catch((err) => console.error('Gagal mengambil data dari API:', err));
  }, [dispatch]);

  const handleOpenAdd = () => {
    setIsEdit(false);
    setSelectedId(null);
    setFormData({
      title: '',
      description: '',
      price: '',
      image: '',
      category: 'Pemasaran',
      mentorName: '',
      mentorRole: '',
      mentorImage: ''
    });
    setShowModal(true);
  };

  const handleOpenEdit = (course) => {
    setIsEdit(true);
    setSelectedId(course.id);
    setFormData({
      title: course.title || '',
      description: course.description || '',
      price: course.price || '',
      image: course.image || '',
      category: course.category || 'Pemasaran',
      mentorName: course.mentorName || '',
      mentorRole: course.mentorRole || '',
      mentorImage: course.mentorImage || ''
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus kursus ini?')) {
      deleteCourseApi(id)
        .then(() => {
          dispatch(deleteCourse(id));
          alert('Kursus berhasil dihapus!');
        })
        .catch((err) => alert('Gagal menghapus kursus: ' + err.message));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateCourseApi(selectedId, formData)
        .then((res) => {
          dispatch(updateCourse(res));
          setShowModal(false);
          alert('Kursus berhasil diperbarui!');
        })
        .catch((err) => alert('Gagal memperbarui kursus: ' + err.message));
    } else {
      addCourseApi(formData)
        .then((res) => {
          dispatch(addCourse(res));
          setShowModal(false);
          alert('Kursus berhasil ditambahkan!');
        })
        .catch((err) => alert('Gagal menambahkan kursus: ' + err.message));
    }
  };

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
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <div>
                <h2>Koleksi Video Pembelajaran Unggulan</h2>
                <p className="mb-0">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami</p>
              </div>

              {/* Tombol Tambah Kursus */}
              <button className="btn btn-primary btn-sm" onClick={handleOpenAdd}>
                + Tambah Kursus
              </button>
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
                <CourseCard 
                  key={course.id || index} 
                  course={course}
                  onEdit={handleOpenEdit}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <p className="text-center w-100 mt-4">Memuat data kelas...</p>
            )}
          </div>

          <NewsletterBanner />
        </section>
      </main>

     
      {showModal && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isEdit ? 'Edit Kursus' : 'Tambah Kursus Baru'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                  <div className="mb-3">
                    <label className="form-label">Judul Kursus</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Kategori</label>
                    <select
                      className="form-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      {categories
                        .filter((c) => c !== 'Semua Kelas')
                        .map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Deskripsi</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Harga</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="misal: Rp 250.000"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">URL Gambar Kursus</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Batal
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}