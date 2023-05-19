
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
                <ul>
                    <li style={{ color: '#00ade1' }} data-color="#00ade1"><a href="#shop" id='shop' data-text="&nbsp;&nbsp;Shop">&nbsp;&nbsp;Shop</a></li>
                    <li style={{ color: '#ff6493' }} data-color="#ff6493"> <a href="#three_D" id='Td' data-text="&nbsp;&nbsp;3D">&nbsp;&nbsp;3D</a></li>
                    <li style={{ color: '#ffdd1c' }} data-color="#ffdd1c"> <a href="#web" id='web' data-text="&nbsp;&nbsp;Web/Mobile">&nbsp;&nbsp;Web/Mobile</a></li>
                    <li style={{ color: '#00dc82' }} data-color="#00dc82"><a href="#building" id='bms' data-text="&nbsp;&nbsp;BMS">&nbsp;&nbsp;BMS</a></li>
                    <li style={{ color: '#00dc82' }} data-color="#00dc82"> <a href="#robotics" id='robotics' data-text="&nbsp;&nbsp;Robotics">&nbsp;&nbsp;Robotics</a></li>
                    <li style={{ color: '#dc00d4' }} data-color="#dc00d4"><a href="#drones" id='drones' data-text="&nbsp;&nbsp;Drones">&nbsp;&nbsp;Drones</a></li>
               </ul>

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