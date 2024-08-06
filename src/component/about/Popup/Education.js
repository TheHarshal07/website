import React from 'react';
import './Education.css';

const Education = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3 className='title'>Education</h3>
        <div className="education_details">
          <div className="education_section">
            <h3>B.E Information Technology</h3>
            <p><strong>CGPA:</strong> 9.32</p>
            <p><strong>College:</strong> Saraswati College of Engineering, Kharghar</p>
          </div>
          <div className="education_section">
            <h3>HSC</h3>
            <p><strong>Percentage:</strong> 70.77%</p>
            <p><strong>School:</strong> Aspee Vidyalaya Uchat</p>
          </div>
          <div className="education_section">
            <h3>SSC</h3>
            <p><strong>Percentage:</strong> 85.6%</p>
            <p><strong>School:</strong> Aspee Vidyalaya Uchat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
