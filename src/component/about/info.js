import React from 'react'
// import 'boxicons'

export default function info() {
  return (
    <div className='about_info'>

      <div className="about_box">
      <i className='bx bx-briefcase'></i>
        <h3 className="about_title">Eduaction</h3>
        <span className="about_subtitle">B.E IT</span>
      </div>

      <div className="about_box">
      <i className='bx bxl-meta' ></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">Internship</span>
      </div>

      <div className="about_box">
      <i className='bx bx-support'></i>
        <h3 className="about_title">Summary</h3>
        <span className="about_subtitle">IT engineer</span>
      </div>

    </div>
  )
}
