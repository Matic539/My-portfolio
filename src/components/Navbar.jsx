import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Styles/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <li>
                    <NavLink to="/" activeClassName="active">
                        <p>Home</p>
                    </NavLink>
                </li>
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
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    )
}

export default Navbar