import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {NavLink} from "react-router-dom"; 
import { Fade } from "react-reveal";

import '../styles/Nav2.css';

import logodark from '../images/logodark.png';
import logolight from '../images/logolight.png';
// import arrowLeft from '../images/scrollleft.png';
// import arrowRight from '../images/scrollright.png';

// import ProjectIcon from '../components/ProjectIcon';

import {burgerF, burgerB} from '../helpers/anims';
// import {PROJECTS} from '../helpers/constants';

const Nav2 = (props) => {

    const [lightNav, setLightNav] = useState(props.light);
    const [toggleBurger, setToggleBurger] = useState(true);
    const [showBurgerSlider, setShowBurgerSlider] = useState(false);
    const [showProjSlider, setShowProjSlider] = useState(false);

    const toggleBurgerSlider = () => {
        // if Nav already light: 
        setLightNav(!lightNav);
        // else
        setToggleBurger(!toggleBurger);
        setShowBurgerSlider(!showBurgerSlider);
    }

    const toggleProjSlider = () => {
        // if Nav already light:
        setLightNav(!lightNav);
        // else
        setShowProjSlider(!showProjSlider);
    }


    useEffect(() => {
        window.addEventListener('resize', function(event){
            if(document.getElementById("burgerAnim").offsetParent == null) {
                setToggleBurger(true);
                setShowBurgerSlider(false);
            } else {
                setShowProjSlider(false);
            }      
        });
    }, []);
    
    return (
        <div className="nav-wrapper">
            
            <div className="slider burger-slider" style={showBurgerSlider? {top: "0"} : {top: "-280px"}}>
                <div className="container">
                    <h2>About</h2>
                    <h2>Projects</h2>
                    <h2>Contact</h2>
                </div>
            </div>

            <div className="slider proj-slider" style={showProjSlider? {top: "0"} : {top: "-200px"}}>
                <div className="container">
                    <h2>proj slider</h2>
                </div>
            </div>

            <div className="container navbar">
                
                <NavLink to="/">
                    <Fade>
                        <img id="navLogo" src={lightNav? logolight : logodark}></img> 
                    </Fade>
                </NavLink>

                <Fade>
                    <div onClick={toggleBurgerSlider}>
                        <Lottie
                            id="burgerAnim"
                            className={lightNav? "burger-anim invert" : "burger-anim"}
                            options={toggleBurger? burgerB : burgerF}
                            playingState="play"/>  
                    </div>
                </Fade>
                
                <ul className="nav-list" style={lightNav? {color: "white"} : {color: "black"}}>
                    <NavLink to="/about">
                        <li className="nav-link">About</li>
                    </NavLink>

                    <li className="nav-link" onClick={toggleProjSlider}>Projects</li>

                    <NavLink to="/contact">
                        <li className="nav-link">Contact</li>
                    </NavLink>
                </ul>

            </div>
        </div>

    )
}

export default Nav2;

