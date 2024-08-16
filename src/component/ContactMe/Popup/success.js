import React, { useEffect } from 'react';
import './success.css';

const Success = () => {

  return (
    <div className="success_container">
      <div className="success_header">
        <h5>Message sent ✅
        will get back to you
        </h5>
        <div id="progressBar" className="progress-bar"></div>
      </div>
    </div>
  );
};

export default Success;
