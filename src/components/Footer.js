import React from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/styles.css';
import logo from '../images/Rlogo.png';
import Socials from './Socials';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="container footer">
                <div className="footer-content">
                    <div className="personal-desc">
                        <p id="footerName">RIDGE REVENTAR</p>
                        <p className="footer-desc footer-desc-desktop">Front-end developer and designer who inspires to bring visions to life through visual graphics and responsive applications.</p>
                        <p className="footer-desc footer-desc-mobile">Front End Developer <br/> & Designer.</p>
                    </div>
                    <ul className="footer-nav">
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-links">
                    <Socials/>
                    <NavLink to="/">
                        <img src={logo} alt=""></img>
                    </NavLink>
                </div>
                
            </div>
        </div>
    )
}
 
export default Footer;