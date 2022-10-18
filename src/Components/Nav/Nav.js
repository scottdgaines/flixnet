import React from 'react';
import './Nav.css'
import logo from '../../Assets/logo1.png'

const Nav = () => {
    return (
        <nav>
            <img src={logo} alt='flixnet' className='nav-logo'/>
            {/* search bar input */}
        </nav>
    )
}

export default Nav