import React, {useState, useEffect} from 'react';

import '../styles/Nav.css';

import logodark from '../images/logodark.png';
import logolight from '../images/logolight.png';
import burger from '../images/burger.png';

const ProjNav = (props) => {
    
    return (
        <div className="container nav-bar">
            {props.proj? <img id="navLogo" src={logodark}/> : <img id="navLogo" src={logolight}/>}
            {/* <img id="burger" src={burger}></img> */}
            <ul className="nav" style={props.proj? {color: "black"} : {color: "white"}}>
                    <li className="nav-link">About</li>
                    <li className="nav-link">Projects</li>
                    <li className="nav-link">Contact</li>
            </ul>
        </div>
    )
}

export default ProjNav;

