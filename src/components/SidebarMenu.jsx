import React from 'react';
import { NavLink } from 'react-router-dom';
import RingsBackground from '../components/Animated/FogBackground';
import HomeIcon from '../assets/img/Sidebar/HomeIcon.svg';
import './Styles/SidebarMenu.css';

function SidebarMenu() {
    return (
        <nav className="sidebar">
            <div className="sidebar-logo">
                <NavLink to="/">
                    <img src={HomeIcon} alt="Home-btn" />
                </NavLink>
            </div>
            <RingsBackground />
            <ul>
                <li>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" activeClassName="active">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills" activeClassName="active">
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
            <footer className='sidebar-footer'>
                <p>© 2024. All Rights Reserved.</p>
            </footer>
        </nav>
    )
}

export default SidebarMenu