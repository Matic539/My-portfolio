import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import YoIMG from '../assets/img/matiasimg.webp';
import Navbar from '../components/Navbar';
import './Styles/About/About.css';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { t } = useTranslation();

    return (
        <section className='about' id='sobreMi'>
            <Navbar />
            <div className='about-container'>
                <div className="social" data-aos="flip-up">
                    <img src={YoIMG} alt="Matias-img" className='me-img' />
                </div>
                <div className='aboutme'>
                    <h2>{t('about.hello')}</h2>
                    <h1>{t('about.intro')}</h1>
                    <p data-aos="zoom-in">
                        {t('about.paragraph1')}
                    </p>
                    <p data-aos="zoom-in">
                        {t('about.paragraph2')}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About