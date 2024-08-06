import React, {useState} from 'react'
// import 'boxicons'
import Education from './Popup/Education'

export default function Info() {

  const [modal, setModal] = useState(false)
  const [experience, setExpe] = useState(false)
  const [summary , setSummary] = useState(false)

  const toggleDetails = () =>{
    setModal(!modal)
  }

  const toggleExperience = () => {
    setExpe(!experience)
  }

  const toggleSummary = () =>{
    setSummary(!summary)
  }


  return (
    <>
    <div className='about_info'>

      <div className="about_box" onClick={toggleDetails}>
      <i className='bx bx-briefcase'></i>
        <h3 className="about_title">Eduaction</h3>
      </div>

      <div className="about_box" onClick={toggleExperience}>
      <i className='bx bxl-meta' ></i>
        <h3 className="about_title">Experience</h3>
      </div>

      <div className="about_box" onClick={toggleSummary

      }>
      <i className='bx bx-support'></i>
        <h3 className="about_title">Summary</h3>
      </div>

    </div>

    {modal && <Education onClose={toggleDetails}/> }

</>
  )
}
