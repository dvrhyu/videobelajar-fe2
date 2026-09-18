import React from 'react';

export default function CourseCard({ course, onEdit, onDelete }) {
  return (
    <div className="card">
      <img src={course.image} alt={course.title} className="card-image" />
      
      <div className="card-body">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-description">{course.description}</p>
        
        <div className="mentor-info">
          {course.mentorImage && (
            <img src={course.mentorImage} alt={course.mentorName} className="mentor-avatar" />
          )}
          <div>
            <h4 className="mentor-name">{course.mentorName || 'Mentor VideoBelajar'}</h4>
            <p className="mentor-role">{course.mentorRole || 'Instructor'}</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="rating">
            <span>⭐⭐⭐⭐⭐ 3.5 (96)</span>
          </div>
          <div className="price">{course.price}</div>
        </div>

        {/* Tombol Aksi Sesuai Instruksi Mentor */}
        <div className="card-actions d-flex gap-2 p-3 border-top">
          <button 
            type="button"
            className="btn btn-sm btn-outline-primary w-50" 
            onClick={() => onEdit(course)}
          >
            Edit
          </button>
          <button 
            type="button"
            className="btn btn-sm btn-outline-danger w-50" 
            onClick={() => onDelete(course.id)}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}