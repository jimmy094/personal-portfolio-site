import React from 'react'
import './Header.css'



const Header = () => {
    return (
        <div className='header-container'>
            
            <div className="header-logo">
                <h1>Portfolio</h1>
            </div>
            <div className="header-links">
                <li className='nav-links'>Who am I?</li>
                <li className='nav-links'>My Projects</li>
                <li className='nav-links'>Work experience</li>
                <li className='nav-links'>Education</li>
                <li className='nav-links'>Resume & Links</li>
            </div>
            
        </div>
    )
}

export default Header
