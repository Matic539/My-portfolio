import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarMenuWrapper from './components/SidebarMenuWrapper';
import Home from './pages/Home';
import About from './pages/About';
// import Projects from './pages/Projects';
// import Skills from './pages/Skills';
// import Contact from './pages/Contact';
// import SidebarMenu from './components/SidebarMenu';

const AppRouter = () => {
    return (
        <Router>
            <SidebarMenuWrapper>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/projects" component={Projects} /> */}
                    {/* <Route path="/skills" component={Skills} /> */}
                    {/* <Route path="/contact" component={Contact} /> */}
                </Routes>
            </SidebarMenuWrapper>
        </Router>
    );
};

export default AppRouter;
