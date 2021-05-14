import React, {useState, useEffect, useRef} from 'react';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import '../styles/styles.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About = (props) => {

    return (
        <>
            <Nav defaultNav={false}/>
            <div className="about-container">

                <div className="container about-header">
                    <h1>RIDGE REVENTAR</h1>
                    {/* <div className="socials">
                        <div id="mail" className="social-icon"></div>
                        <div id="ig" className="social-icon"></div>
                        <div id="linked" className="social-icon"></div>
                        <div id="git" className="social-icon"></div>
                    </div> */}
                </div>

                <div className="container about-content">
                    <div className="about-col1">
                        <div className="about-section">
                            <h2>Experience</h2>
                            <h3>Free Lance Graphic Design</h3>
                            <span>June, 2016 - Current Day</span>
                            <ul>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                            </ul>
                            <h3>Free Lance Front End Development (contract)</h3>
                            <span>June, 2016 - Current Day</span>
                            <ul>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                            </ul>
                        </div>
                        <div className="about-section">
                            <h2>Projects</h2>
                            <h3>SUI - Style Guide & UI Component Generator</h3>
                            <span>June, 2016 - Current Day</span>
                            <ul>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                            </ul>
                            <h3>Next Gen Barbers (contract)</h3>
                            <span>June, 2016 - Current Day</span>
                            <ul>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                                <li>I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-col2">
                        <div className="about-section">
                            <h2>Education</h2>
                            <h3>Ontario Tech University</h3>
                            <span>June, 2016 - Jan, 2021</span>
                            <p>B.S. in Computer Science w/ honors and distinction</p>
                        </div>
                        <div className="about-section">
                            <h2>Languages</h2>
                            <ul>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>Css</li>                                
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className="about-section">
                            <h2>Technologies</h2>
                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>                                
                                <li>Firebase (soon) </li>
                                <li>Git | SourceTree</li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>

            <Footer/>
        </>
    )
}

export default About;