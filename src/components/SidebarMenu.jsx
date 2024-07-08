import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/SidebarMenu.css';

function SidebarMenu() {
    return (
        <nav className="sidebar">
            <ul>
                {/* <li>
                    <NavLink exact to="/" activeClassName="active">
                        Home
                    </NavLink>
                </li> */}
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
        </nav>
    )
}

export default SidebarMenu