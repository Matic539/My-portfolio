import React from 'react';
import YoIMG from '../assets/img/matiasimg.webp'
import './Styles/About/About.css';

function About() {
    return (
        <section className='about' id='sobreMi'>
            <div className='about-container'>
                <div className="social">
                    <img src={YoIMG} alt="Matias-img" className='me-img' />
                </div>
                <div className='aboutme'>
                    <h2>Hello!</h2>
                    <h1>I am Matias López, a web development and programming enthusiast.</h1>
                    <p>
                        I am 20 years old and currently studying Engineering, where I have acquired solid skills in programming,
                        data structures, algorithms, and system development. I enjoy front-end development and am also learning back-end.
                        My goal is to become an expert full-stack developer, specializing in scalable and efficient solutions.
                        I am constantly learning and looking for opportunities that challenge me and allow me to grow professionally.
                    </p>
                    <p>
                        I currently live in Iquique, Chile.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About