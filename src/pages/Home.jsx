import React from 'react';
import { Link } from 'react-router-dom';
import FogBackground from '../components/Animated/FogBackground';
import './Styles/Home/Home.css';

const Home = () => {
    return (
        <div className='home-section'>
            <FogBackground />
            <h1>Matias López</h1>
            <h2>My Portfolio</h2>
            <div className="language-button">
                <Link to="/about">
                    <button>
                        <b>English</b>
                    </button>
                </Link>
                <Link to="/about">
                    <button>
                        <b>Español</b>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
