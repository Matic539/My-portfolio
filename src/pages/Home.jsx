import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Home/Home.css';

const Home = () => {
    return (
        <div className='home-section'>
            <h1>Matias López</h1>
            <h2>My Portfolio</h2>
            <div className="language-button">
                <button>
                    <Link to="/about"><b>English</b></Link>
                </button>
                <button>
                    <Link to="/about"><b>Español</b></Link>
                </button>
            </div>
        </div>
    );
};

export default Home;
