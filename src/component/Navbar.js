import React, { useState } from 'react'
import "./Nav.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Mobilenav from "./MobileNav/MobileNav"
export default function Navbar() {
    // eslint-disable-next-line
    const[openMenu, setOpenmenu] = useState(false);

    const toggleMenu = () =>{
        setOpenmenu(!openMenu)
    }

  return (
    <>
    <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
        <div className="nav_wrapper">
            <div className="nav_containt">
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
