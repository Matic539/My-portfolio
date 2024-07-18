import React from 'react';
import Navbar from '../components/Navbar';
import YoIMG from '../assets/img/matiasimg.webp';
import './Styles/Contact/Contact.css';
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact">
            <Navbar />
            <div className="social">
                <img src={YoIMG} alt="Matias-img" className='me-img' />
            </div>
            <h1>Contact Me</h1>
            <div className="social-links">
                <a href="https://www.instagram.com/dinamic_official/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                </a>
                <a href="mailto:matias.lopez.renato@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/matias-l%C3%B3pez-6978b5268/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Matic539" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default Contact;
