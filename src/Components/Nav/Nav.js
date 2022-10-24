import React from 'react'
import logo from '../../Assets/logo1.png'
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <img src={logo} alt='flixnet' className='nav-logo'/>
        </nav>
    )
}

export default Nav