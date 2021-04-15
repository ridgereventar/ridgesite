import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {NavLink} from "react-router-dom"; 
import { Fade } from "react-reveal";

import '../styles/Nav.css';

import ProjectSlider from './ProjectSlider';

import logodark from '../images/logodark.png';
import logolight from '../images/logolight.png';

import {burgerF, burgerB} from '../helpers/anims';


{/* <Header>
    <DesktopNav theme="dark">
        //scorllY > 0
    </DesktopNav>
    <MobileNav theme="white"/>
</Header> */}


const NavBar = (props) => {
    const {theme} = props;
    
    return (
        <div className={`container navbar ${theme}`}>
        
            <NavLink to="/">
                <Fade>
                    <img id="navLogo" src={theme ? logolight : logodark}></img> 
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
            
            <ul className="nav-list">
                <NavLink to="/about">
                    <li className="nav-link">About</li>
                </NavLink>

                <li className="nav-link" onClick={toggleProjSlider}>Projects</li>

                <NavLink to="/contact">
                    <li className="nav-link">Contact</li>
                </NavLink>
            </ul>

        </div>

    )
}

export default NavBar;

