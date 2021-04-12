import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom"; 

import '../styles/Nav.css';

import logodark from '../images/logodark.png';
import logolight from '../images/logolight.png';
import burger from '../images/burger.png';

const ProjNav = (props) => {
    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }
        
    }, []);
    
    return (
        <div id="navbar" className="nav-wrapper">
            <div className="container nav-bar">
                <NavLink to="/">
                    {props.proj? <img id="navLogo" src={logodark}/> : <img id="navLogo" src={logolight}/>}
                </NavLink>
                {/* <img id="burger" src={burger}></img> */}
                <ul className="nav" style={props.proj? {color: "black"} : {color: "white"}}>
                    <NavLink to="/about">
                        <li className="nav-link">About</li>
                    </NavLink>
                    <NavLink to="/projects">
                        <li className="nav-link">Projects</li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li className="nav-link">Contact</li>
                    </NavLink>
                
                </ul>
            </div>
        </div>

    )
}

export default ProjNav;

