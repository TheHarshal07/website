import React, { useState } from 'react'
import "../../App.css"
import "./Nav.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Mobilenav from "../MobileNav/MobileNav"
import { Link } from "react-scroll";
export default function Navbar() {
    // eslint-disable-next-line
    const[openMenu, setOpenmenu] = useState(false);

    const toggleMenu = () =>{
        setOpenmenu(!openMenu)
    }

    const offsetvalue = -150;

  return (
    <>
    <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
        <div className="nav_wrapper">
            <div className="nav_containt">
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
                    
                    <button className="hire" onClick={()=>{}}>Hire me</button>
                </ul>

                <button className="menu-btn" onClick={toggleMenu}>
                    <span className={'material-symbols-outlined'}
                     style={{fontSize:"1.8rem"}}
                    >
                    {openMenu ? <CloseIcon/> : <MenuIcon/> }
                    </span>
                </button>
            </div>
        </div>
    
    
    </>
  )
}
