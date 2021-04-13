import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {NavLink} from "react-router-dom"; 
import { Fade } from "react-reveal";

import '../styles/Nav.css';

import logodark from '../images/logodark.png';
import logolight from '../images/logolight.png';
import ProjectIcon from '../components/ProjectIcon';

import {burgerF, burgerB} from '../helpers/anims';
import {PROJECTS} from '../helpers/constants';

const ProjNav = (props) => {

    const [darkLogo, setDarkLogo] = useState(props.proj);
    const [darkColor, setDarkColor] = useState(props.proj);
    const [darkBurger, setDarkBurger] = useState(props.proj);

    const [allowInvert, setAllowInvert] = useState(!props.proj);


    const [showSlider, setShowSlider] = useState(false);
    const [showProjSlider, setShowProjSlider] = useState(false);

    const [toggleBurger, setToggleBurger] = useState(true);  

    const toggleSlider = () => {
        if(allowInvert) {
            setDarkLogo(!darkLogo);
            setDarkBurger(!darkBurger);
        }
        setShowSlider(!showSlider);
        setToggleBurger(!toggleBurger);
    }

    const toggleProjSlider = () => {
        if(allowInvert) {
            setDarkLogo(!darkLogo);
            setDarkColor(!darkColor);
        }
        setShowProjSlider(!showProjSlider);
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
                setShowProjSlider(false);
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

    var scrolling = null;

    const scrollLeft = () => {
        var d = document.getElementById('scroller');
        d.scrollLeft = d.scrollLeft - 5;
        scrolling = window.setTimeout(function() {
            scrollLeft();
        }, 20);
        console.log("Scrolling left");
    }

    const scrollRight = () => {
        var d = document.getElementById('scroller');
        d.scrollLeft = d.scrollLeft + 5;
        scrolling = window.setTimeout(function() {
            scrollRight();
        }, 20);
        console.log("Scrolling Right");
    }

    const stopScroll = () => {
        window.clearTimeout(scrolling);
    }

    
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

            <div className="proj-slider" style={showProjSlider? {top: "0"} : {top: "-300px"}}>
                
                <div className="scrollLeft" onMouseOver={scrollLeft} onMouseOut={stopScroll}></div>
                <div className="scrollRight" onMouseOver={scrollRight} onMouseOut={stopScroll}></div>

                <div id="scroller" className="container proj-slider-container">

                    {PROJECTS.map((proj, index) => {
                        return (
                            <Fade>
                                <ProjectIcon
                                    small={true}
                                    key={index}
                                    proj={proj}/>
                            </Fade>

                        );
                    })}
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

                    <li className="nav-link" onClick={toggleProjSlider}>Projects</li>

                    <NavLink to="/contact">
                        <li className="nav-link">Contact</li>
                    </NavLink>
                
                </ul>
            </div>
        </div>

    )
}

export default ProjNav;

