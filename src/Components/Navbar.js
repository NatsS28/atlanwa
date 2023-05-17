
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/atlanwa.jpeg'


const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt='logo' className='logo'/>
                <h2>AtlanWa</h2>
            </div>
            <div className="links">
                <a href="#shop">Shop</a>
                <a href="#three_D">3D printing</a>
                <a href="#web">Web/Mobile</a>
                <a href="#building">Building Management</a>
                <a href="#robotics">Robotics</a>
                <a href="#drones">Drones</a>

            </div>
            <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>




        </nav >
    )
}

export default Navbar;