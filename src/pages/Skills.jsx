import React from 'react';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import CSSimg from '../assets/img/Skills/css.svg';
import HTML5img from '../assets/img/Skills/html5.svg';
import JSimg from '../assets/img/Skills/javascript.svg';
import PYimg from '../assets/img/Skills/python.svg';
import REACTimg from '../assets/img/Skills/react.svg';
import './Styles/Skills/Skills.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CustomArrow from '../components/Carrusel/CustomArrow';

const skills = [
    {
        name: 'Python',
        experience: '2 years of experience',
        image: PYimg
    },
    {
        name: 'HTML',
        experience: '2 years of experience',
        image: HTML5img
    },
    {
        name: 'CSS',
        experience: '2 years of experience',
        image: CSSimg
    },
    {
        name: 'JavaScript',
        experience: '1.5 years of experience',
        image: JSimg
    },
    {
        name: 'React',
        experience: '1 years of experience',
        image: REACTimg
    },
];

function Skills() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="skills">
            <Navbar />
            <h1>My Skills</h1>
            <Slider {...settings} className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <div className="skill-content">
                            <h2>{skill.name}</h2>
                            <p>{skill.experience}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Skills