import React, { useEffect } from 'react';
import './failmsg.css';

const failmsg = () => {

  return (
    <div className="fail_container">
      <div className="fail_header">
        <h5>Something went wrong, please try again
        </h5>
        <div id="progressBar" className="progress-bar"></div>
      </div>
    </div>
  );
};

export default failmsg;
