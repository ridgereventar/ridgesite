import React, {useState, useEffect} from 'react';

import "../styles/Nav.css";

import logowhite from '../images/Rlogo.png';

const Nav = (props) => {
    return (
        <div className="container nav-bar">
            <img id="navlogo" src={logowhite}></img>
            <ul className="nav">
                <li className="nav-link">About</li>
                <li className="nav-link">Projects</li>
                <li className="nav-link">Contact</li>
            </ul>
        </div>
    )
}

export default Nav;