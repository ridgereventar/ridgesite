import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {NavLink} from "react-router-dom"; 
import { Fade } from "react-reveal";

import '../styles/Nav.css';

import logodark from '../images/logodark.png';
import logolight from '../images/logolight.png';

import {burgerF, burgerB} from '../helpers/anims';

const ProjNav = (props) => {

    const [darkLogo, setDarkLogo] = useState(props.proj);
    const [darkColor, setDarkColor] = useState(props.proj);
    const [darkBurger, setDarkBurger] = useState(props.proj);

    const [allowInvert, setAllowInvert] = useState(!props.proj);


    const [showSlider, setShowSlider] = useState(false);
    const [toggleBurger, setToggleBurger] = useState(true);  

    const toggleSlider = () => {
        if(allowInvert) {
            setDarkLogo(!darkLogo);
            setDarkBurger(!darkBurger);
        }
        setShowSlider(!showSlider);
        setToggleBurger(!toggleBurger);
    }

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {

            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setToggleBurger(true);
                document.getElementById("navbar").style.top = "0";
            } else {
                setShowSlider(false);
                document.getElementById("navbar").style.top = "-100px";
                
            }
            prevScrollpos = currentScrollPos;

            if ( window.pageYOffset == 0) {
                if(!props.proj) {
                    setDarkLogo(false);
                    setDarkColor(false);
                    setDarkBurger(false);
                    setAllowInvert(true);
                }
                document.getElementById("navbar").style.backgroundColor = "";
                document.getElementById("navbar").style.boxShadow = "";

            } 
            if (window.pageYOffset > 300) {
                setDarkLogo(true);
                setDarkColor(true);
                setDarkBurger(true);
                setAllowInvert(false);
                document.getElementById("navbar").style.backgroundColor = "white";
                document.getElementById("navbar").style.boxShadow = "0 1px 5px rgb(0 0 0 / 10%)";

            }
        }
        
    }, []);
    
    return (
        <div id="navbar" className="nav-wrapper">

            <div id="slider" className="slider" style={showSlider? {top: "0"} : {top: "-300px"}}>
                <div className="container">
                    {showSlider?
                        <Fade>
                            <h2>About</h2>
                            <h2>Projects</h2>
                            <h2>Contact</h2>
                        </Fade>
                    : null}
                 
                </div>
            </div>

            <div className="container nav-bar">
                
                <NavLink to="/">
                    {darkLogo?
                        <img id="navLogo" src={logodark}></img> : <img id="navLogo" src={logolight}></img>}
                </NavLink>

                <div className="burger-wrapper" onClick={toggleSlider} style={darkBurger? {filter: "invert(1)"} : {filter: "invert(0)"}}>
                    {toggleBurger? 
                            <Lottie
                                options={burgerB}
                                playingState="play"/>   
                        : 
                            <Lottie
                                options={burgerF}
                                playingState="play"/>
                        }                 
                </div>

                
                <ul className="nav" style={darkColor? {color: "black"} : {color: "white"}}>
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

