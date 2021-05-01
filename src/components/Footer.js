import React, {useState, useEffect} from 'react';

import '../styles/styles.css';
import logo from '../images/Rlogo.png';

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="container footer">
                <div className="footer-content">
                    <div className="personal-desc">
                        <p id="footerName">RIDGE REVENTAR</p>
                        <p className="footer-desc footer-desc-desktop">Front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</p>
                        <p className="footer-desc footer-desc-mobile">Front End Developer <br/> & Designer.</p>
                    </div>
                    <ul className="footer-nav">
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div className="socials">
                        <div id="mail" className="social-icon"></div>
                        <div id="ig" className="social-icon"></div>
                        <div id="linked" className="social-icon"></div>
                        <div id="git" className="social-icon"></div>
                    </div>
                    <img src={logo}></img>
                </div>
                
            </div>
        </div>
    )
}
 
export default Footer;