import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {NavLink} from "react-router-dom"; 
import { Fade } from "react-reveal";

import '../styles/Nav2.css';

import ProjectSlider from '../components/ProjectSlider';

import logodark from '../images/logodark.png';
import logolight from '../images/logolight.png';
// import arrowLeft from '../images/scrollleft.png';
// import arrowRight from '../images/scrollright.png';

// import ProjectIcon from '../components/ProjectIcon';

import {burgerF, burgerB} from '../helpers/anims';
// import {PROJECTS} from '../helpers/constants';

const Nav2 = (props) => {

    const [lightNav, setLightNav] = useState(false);
    const [allowInvert, setAllowInvert] = useState(false);

    const [toggleBurger, setToggleBurger] = useState(true);
    const [showBurgerSlider, setShowBurgerSlider] = useState(false);
    const [showProjSlider, setShowProjSlider] = useState(false);

    const [toggleMiniProjSlider, setToggleMiniProjSlider] = useState(false);

    const toggleBurgerSlider = () => {
        if(allowInvert) {
            setLightNav(!lightNav);
        }
        setToggleBurger(!toggleBurger);
        setShowBurgerSlider(!showBurgerSlider);
    }

    const toggleProjSlider = () => {
        if(allowInvert) {
            setLightNav(!lightNav);
        }
        setShowProjSlider(!showProjSlider);
    }

    const toggleMiniProj = () => {
        setToggleMiniProjSlider(!toggleMiniProjSlider);
    }


    useEffect(() => {

        if(window.scrollY == 0) {
            if(props.defaultLight) {
                setLightNav(true);
                setAllowInvert(true);
            }        
        }
        
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("nav").style.top = "0";
            } else {
                setShowProjSlider(false);
                setShowBurgerSlider(false);
                setToggleBurger(true);
                document.getElementById("nav").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;

            if ( window.pageYOffset == 0) {
                if(props.defaultLight) {
                    setLightNav(true);
                    setAllowInvert(true);
                }
                document.getElementById("nav").style.backgroundColor = "";
                document.getElementById("nav").style.boxShadow = "";
            } 
            if (window.pageYOffset > 200) {
                if(props.defaultLight) {
                    setLightNav(false);
                    setAllowInvert(false);
                }
                document.getElementById("nav").style.backgroundColor = "white";
                document.getElementById("nav").style.boxShadow = "0 1px 5px rgb(0 0 0 / 10%)";
            }

        }




    }, []);
    
    return (
        <div id="nav" className="nav-wrapper">
            

            <div className="slider burger-slider" style={showBurgerSlider? {top: "0"} : {top: "-400px"}}>
                <div className="container">
                    <h2>About</h2>
                    <h2 onClick={toggleMiniProj}>Projects</h2>
                    {toggleMiniProjSlider?
                        <ProjectSlider></ProjectSlider>
                    : null}
                    <h2>Contact</h2>
                </div>
            </div>

            <div className="slider proj-slider" style={showProjSlider? {top: "0"} : {top: "-200px"}}>
                <ProjectSlider/>
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

