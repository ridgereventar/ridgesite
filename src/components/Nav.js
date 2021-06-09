import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {NavLink} from "react-router-dom"; 
import { Fade } from "react-reveal";

import '../styles/Nav.css';

import ProjectSlider from './ProjectSlider';

import logodark from '../images/logodark.png';
import logolight from '../images/logolight.png';

import {burgerF, burgerB} from '../helpers/anims';


const Nav = (props) => {

    const {defaultNav} = props;

    const [isAtTop, setIsAtTop] = useState(true);
    const [downToHide, setDownToHide] = useState(false);

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setDownToHide(false);
            } else { 
                if(isAtTop && currentScrollPos > 100) {
                    setDownToHide(true);
                } 
            }
            prevScrollpos = currentScrollPos;
            if ( window.pageYOffset < 100) {
                setIsAtTop(true);
            } 
            if (window.pageYOffset > 200) {
                setIsAtTop(false);
            }
        }
    });
    
    const navClassName = `nav-wrapper ${isAtTop ? 'nav-wrapper--no-bg' : ''} ${downToHide ? 'nav-wrapper--hidden' : ''}`;
    
    return (
        <nav id="nav" className={navClassName}>
            <NavMobile isAtTop={defaultNav? false : isAtTop} downToHide={downToHide}/>
            <NavDesktop isAtTop={defaultNav? false : isAtTop} downToHide={downToHide}/>
        </nav>
    )
}

const NavMobile = (props) => {

    const {isAtTop, downToHide} = props;

    const [toggleBurger, setToggleBurger] = useState(true);
    const [showBurgerSlider, setShowBurgerSlider] = useState(false);

    const toggleBurgerSlider = () => {
        setToggleBurger(!toggleBurger);
        setShowBurgerSlider(!showBurgerSlider);
    }

    // const [toggleMiniProjSlider, setToggleMiniProjSlider] = useState(false);
    
    // const toggleMiniProj = () => {
    //     setToggleMiniProjSlider(!toggleMiniProjSlider);
    // }

    useEffect(() => {
        if(downToHide) {
            setShowBurgerSlider(false);
            setToggleBurger(true);
        }
    }, [downToHide]);
    
    const isDarkTheme = showBurgerSlider ? false : isAtTop;

    return (
        <>
            <div className="slider burger-slider" style={showBurgerSlider? {top: "0"} : {top: "-400px"}}>
                <div className="container">
                    <NavLink to="/about">
                        <h2>About</h2>
                    </NavLink>

                    <NavLink to="/projects">
                        <h2>Projects</h2>
                    </NavLink>

                    {/* {toggleMiniProjSlider?
                        <ProjectSlider></ProjectSlider>
                    : null} */}

                    <NavLink to="/contact">
                        <h2>Contact</h2>
                    </NavLink>
                </div>
            </div>

            <div className={`container navbar navbar-mobile ${isDarkTheme ? "dark" : "light"}`}>
                <NavLink to="/">
                    <Fade>
                        <img id="navLogo" className={`${isDarkTheme? "invert" : ""}`}src={logodark} alt=""></img> 
                    </Fade>
                </NavLink>

                <Fade>
                    <div onClick={toggleBurgerSlider}>
                        <Lottie
                            id="burgerAnim"
                            className={`burger-anim ${isDarkTheme ? "invert" : ""}`}
                            options={toggleBurger? burgerB : burgerF}
                            playingState="play"/>  
                    </div>
                </Fade>
            </div>
        </>
    )
}


const NavDesktop = (props) => {

    const {isAtTop, downToHide} = props;
    const [showProjSlider, setShowProjSlider] = useState(false);

    const toggleProjSlider = () => {
        setShowProjSlider(!showProjSlider);
    }

    useEffect(() => {
        if(downToHide) {
            setShowProjSlider(false);
        }
    }, [downToHide]);
    

    const isDarkTheme = showProjSlider ? false : isAtTop;

    return (

        <>
            <div className="slider proj-slider" onMouseLeave={toggleProjSlider} style={showProjSlider? {top: "0"} : {top: "-200px"}}>
                <ProjectSlider/>
            </div>

            <div className={`container navbar navbar-desktop ${isDarkTheme ? "dark" : "light"}`}>
            
                <NavLink to="/">
                    <Fade>
                        <img id="navLogo" src={isDarkTheme? logolight : logodark} alt=""></img> 
                    </Fade>
                </NavLink>
                
                <ul className="nav-list">
                    <NavLink to="/about">
                        <li className="nav-link">About</li>
                    </NavLink>

                    <NavLink to="/projects">
                        <li className="nav-link" onMouseEnter={toggleProjSlider}>Projects</li>
                    </NavLink>

                    <NavLink to="/contact">
                        <li className="nav-link">Contact</li>
                    </NavLink>
                </ul>

            </div>
        </>

    )
}

export default Nav;

