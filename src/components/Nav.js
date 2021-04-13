import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {NavLink} from "react-router-dom"; 

import '../styles/Nav.css';

import logodark from '../images/logodark.png';
import logolight from '../images/logolight.png';

import {burgerF, burgerB} from '../helpers/anims';

const ProjNav = (props) => {

    const [logo, setLogo] = useState(logolight);
    const [color, setColor] = useState("white");

    const [showSlider, setShowSlider] = useState(false);
    const [toggleBurger, setToggleBurger] = useState(true);  

    const toggleSlider = () => {
        setShowSlider(!showSlider);
        setToggleBurger(!toggleBurger);
    }

    useEffect(() => {
        if(props.proj) {
            document.getElementById("burgerWrapper").style.filter = "invert(1)";
            setLogo(logodark);
            setColor("black");
        }
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {

            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;

            if ( window.pageYOffset == 0) {
                if(!props.proj) {
                    setLogo(logolight);
                    setColor("white"); 
                    document.getElementById("burgerWrapper").style.filter = "invert(0)";
                }
                document.getElementById("navbar").style.backgroundColor = "";
                document.getElementById("navbar").style.boxShadow = "";

            } 
            if (window.pageYOffset > 300) {
                setLogo(logodark);
                setColor("black");
                document.getElementById("burgerWrapper").style.filter = "invert(1)";
                document.getElementById("navbar").style.backgroundColor = "white";
                document.getElementById("navbar").style.boxShadow = "0 1px 5px rgb(0 0 0 / 10%)";

            }
        }
        
    }, []);
    
    return (
        <div id="navbar" className="nav-wrapper">

            <div className="container nav-bar">
                
                <NavLink to="/">
                    <img id="navLogo" src={logo}/>
                </NavLink>

                <div id="burgerWrapper" className="burger-wrapper" onClick={toggleSlider}>
                    {toggleBurger? 
                        <Lottie
                            options={burgerB}
                            playingState="play"/>
                        : 
                        <Lottie
                            options={burgerF}
                            playingState="play"/>}                 
                </div>

                
                <ul className="nav" style={{color: color}}>
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

