import React from 'react';
import BancoCRUD from '../assets/img/Projects/banco-CRUD.webp';
import ForoRed from '../assets/img/Projects/foro-redlife.webp';
import Childev from '../assets/img/Projects/childev-website.webp';
import './Styles/Projects/Projects.css';

const projects = [
    {
        title: 'Banco-CRUD',
        description: 'A banking management system developed in Python using MongoDB for storing and managing customer, account, and transaction data.',
        image: BancoCRUD,
        link: 'https://github.com/Matic539/Banco-CRUD'
    },
    {
        title: 'RedLife-foro',
        description: 'First version of a forum, over time I will be updating, improving, and adding the missing features.',
        image: ForoRed,
        link: 'https://github.com/Matic539/RedLife-foro'
    },
    {
        title: 'childev-website',
        description: 'We offer web and software development services, turning your ideas into high-quality technological solutions. This project is in its final phase and will soon be launched to the public.',
        image: Childev,
        link: ''
    },
];

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
