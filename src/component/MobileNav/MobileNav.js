import React from 'react'
import "./mobile.css"

export default function MobileNav({isOpen, toggleMenu}) {
  return (
    <>
     <div
     className={`mobile_menu ${isOpen ? "active":""}`}
     onClick={toggleMenu}
     >
        <div className="mobile_nav">
            <h2>Harshal</h2>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Experience</a>
                    </li>
                </ul>
                    <button className="hire" onClick={()=>{}}>Hire me</button>
        </div>
     </div>
    </>
  )
}
