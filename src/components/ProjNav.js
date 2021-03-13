import React, {useState, useEffect} from 'react';

import '../styles/Nav.css';

import logodark from '../images/logodark.png';
import burger from '../images/burger.png';

const ProjNav = (props) => {
    
    return (
        <div className="container proj-nav-bar">
            <img id="darklogo" src={logodark}></img>
            {/* <img id="burger" src={burger}></img> */}
            <ul className="nav">
                    <li className="nav-link">About</li>
                    <li className="nav-link">Projects</li>
                    <li className="nav-link">Contact</li>
            </ul>
        </div>
    )
}

export default ProjNav;

