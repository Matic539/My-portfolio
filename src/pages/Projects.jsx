import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import BancoCRUD from '../assets/img/Projects/banco-CRUD.webp';
import ForoRed from '../assets/img/Projects/foro-redlife.webp';
import Childev from '../assets/img/Projects/childev-website.webp';
import PythonProjects from '../assets/img/Projects/py-projects.webp';
import Pbarber from '../assets/img/Projects/pbarber.webp';
import './Styles/Projects/Projects.css';

const projects = [
    {
        title: 'childev-website',
        description: 'We offer web and software development services, turning your ideas into high-quality technological solutions.',
        image: Childev,
        link: 'https://childev.cl/'
    },
    {
        title: 'Pbarber',
        description: 'A basic test website for a barbershop, using React.',
        image: Pbarber,
        link: 'https://pbarber-website.web.app/'
    },
    {
        title: 'RedLife-foro',
        description: 'First version of a forum, over time I will be updating, improving, and adding the missing features.',
        image: ForoRed,
        link: 'https://github.com/Matic539/RedLife-foro'
    },
    {
        title: 'Banco-CRUD',
        description: 'A banking management system developed in Python using MongoDB for storing and managing customer, account, and transaction data.',
        image: BancoCRUD,
        link: 'https://github.com/Matic539/Banco-CRUD'
    },
    {
        title: 'PY-projects',
        description: 'Simple Python Projects to Practice and Improve My Skills.',
        image: PythonProjects,
        link: 'https://github.com/Matic539/PY-projects'
    },
];

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="projects">
            <Navbar />
            <h1>{t('projects.title')}</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">{t('projects.view_project')}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
