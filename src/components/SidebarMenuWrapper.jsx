// src/components/SidebarMenuWrapper.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';

const SidebarMenuWrapper = ({ children }) => {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(true);

    useEffect(() => {
        if (location.pathname === '/') {
            setShowSidebar(false);
        } else {
            setShowSidebar(true);
        }
    }, [location]);

    return (
        <div>
            {showSidebar && <SidebarMenu />}
            {children}
        </div>
    );
};

export default SidebarMenuWrapper;
