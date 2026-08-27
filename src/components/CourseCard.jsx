import React from 'react';

export default function CourseCard({
  image,
  title,
  description,
  mentorImage,
  mentorName,
  mentorRole,
  price,
}) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="mentor-info">
          <img src={mentorImage} alt={mentorName} className="mentor-avatar" />
          <div>
            <h4 className="mentor-name">{mentorName}</h4>
            <p className="mentor-role">{mentorRole}</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="rating">
            <span>⭐⭐⭐⭐⭐ 3.5 (96)</span>
          </div>
          <div className="price">{price}</div>
        </div>

       
      </div>
    </div>
  );
}