import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import HomeIcon from '../assets/img/Sidebar/HomeIcon.svg';
import './Styles/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <div className="navbar-logo">
                    <NavLink to="/My-portfolio/">
                        <img src={HomeIcon} alt="Home-btn" />
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            <p>About</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName="active">
                            <p>Projects</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" activeClassName="active">
                            <p>Skills</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">
                            <p>Contact</p>
                        </NavLink>
                    </li>
                </ul>
                <footer className='navbar-footer'>
                    <p>© 2024. All Rights Reserved.</p>
                </footer>
            </ul>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    )
}

export default Navbar