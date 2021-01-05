import React from 'react';
import '../styles/Home.css';

import logowhite from '../images/ridgelogo_white.png'

const Home = (props) => {
    return (
        <div className="home">
            <div className="nav-bar">
                <img id="navlogo" src={logowhite}></img>
                <ul className="nav">
                    <li className="nav-link">About</li>
                    <li className="nav-link">Projects</li>
                    <li className="nav-link">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;