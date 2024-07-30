import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FogBackground from '../components/Animated/FogBackground';
import './Styles/Home/Home.css';

const Home = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className='home-section'>
            <FogBackground />
            <h1>Matias López</h1>
            <h2>My Portfolio</h2>
            <div className="language-button">
                <Link to="/about">
                    <button onClick={() => changeLanguage('en')}>
                        <b><span className="flag-icon flag-icon-gb"></span>English</b>
                    </button>
                </Link>
                <Link to="/about">
                    <button onClick={() => changeLanguage('es')}>
                        <b><span className="flag-icon flag-icon-es"></span>Español</b>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
