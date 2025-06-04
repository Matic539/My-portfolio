import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import YoIMG from '../assets/img/matiasimg.webp';
import './Styles/Contact/Contact.css';
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    // 1. Estados para el formulario
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [feedback, setFeedback] = useState(''); // Para mostrar errores o éxito

    // 2. Función que maneja el submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación simple
        if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
            setFeedback('Por favor, completa todos los campos.');
            return;
        }
        // Muestra en consola (aquí podrías conectar con un API, EmailJS, etc.)
        console.log({ nombre, correo, mensaje });

        // Mensaje de éxito
        setFeedback('¡Gracias! Tu mensaje ha sido enviado.');
        // Limpiar formulario
        setNombre('');
        setCorreo('');
        setMensaje('');
    };

    return (
        <div className="contact">
            <Navbar />

            <h1>Contact Me</h1>

            {/* 3. Si hay feedback (error o éxito), lo mostramos aquí */}
            {feedback && <p className="feedback">{feedback}</p>}

            {/* 4. Formulario de contacto */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre completo:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Escribe tu nombre"
                />

                <label htmlFor="correo">Correo electrónico:</label>
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="ejemplo@correo.com"
                />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                />

                <button type="submit">Enviar mensaje</button>
            </form>

            {/* 5. Iconos sociales (mantenerlos como antes) */}
            <div className="social-links">
                <a
                    href="https://www.instagram.com/dinamic_office/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaInstagram />
                </a>
                <a
                    href="mailto:tuemail@ejemplo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaEnvelope />
                </a>
                <a
                    href="https://www.linkedin.com/in/matias-xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Matic539"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default Contact;
