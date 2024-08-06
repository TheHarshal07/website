import React from 'react'
import "./mobile.css"
import { Link } from "react-scroll";

export default function MobileNav({isOpen, toggleMenu}) {

  const offsetvalue = -150 

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
                    <Link to="home" smooth={true} duration={500} offset={offsetvalue}>Home</Link>
                    </li>
                    <li>
                    <Link to="skills" smooth={true} duration={500} offset={offsetvalue} >Skills</Link>
                    </li>
                    <li>
                    <Link to="project" smooth={true} duration={500}  offset={offsetvalue}>Project</Link>
                    </li>
                    <li>
                    <Link to="experience" smooth={true} duration={500}  offset={offsetvalue}>Experience</Link>
                    </li>
                </ul>
                    <button className="hire" onClick={()=>{}}>Hire me</button>
        </div>
     </div>
    </>
  )
}
