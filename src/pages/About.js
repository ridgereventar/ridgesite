import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom"; 
import { Fade } from "react-reveal";

import '../styles/styles.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <>
            <Nav defaultNav={true}/>
            <div className="about-container">
                {/* <div className="about-slant"/> */}
                <div className="container about-header">
                    <Fade>
                        <h1>RIDGE REVENTAR</h1>
                    </Fade>
                </div>

                <div className="container about-content">
                    <div className="about-col1">
                        <Fade>
                            <div className="about-section">
                                <h2>About Me</h2>
                                <p>
                                    Computer Science Graduate with honours and distinction. Seven years experience in freelance design. Six years experience in modern web development practices, front-end design, and full stack applications. Assists businesses in representing their brands through cutting edge designs and quality deliverables. 
                                    <br/><br/>
                                    As a developer and designer, I strive to provide both professional work and exceptional customer experience. I look to continue this in a positive work environment where the opportunity to expand my skills and toolset exists through communication, teamwork, and consistent learning.
                                </p>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="about-section">
                                <h2>Experience</h2>
                                <h3>Freelance Web Development</h3>
                                <span>Sept 2018 - Current Day</span>
                                <ul>
                                    <li>
                                        Worked with <NavLink className="about-proj-link" to="/nextgen">Next Gen Barbers</NavLink> to rebrand and create a professional website to display their educational service 
                                        <a className="about-proj-link" href="https://www.nextgenbarbers.ca/" target="_blank" rel="noreferrer"> (visit www.nextgenbarbers.ca).</a>
                                    </li>
                                    <li>
                                        Capable of delivering UI/UX designs and deploying fully responsive websites and full stack applications.                                    
                                    </li>
                                    <li>
                                        Experience with React.js framework and modern practices including React Hooks and Context APIs.                                     
                                    </li>
                                    <li>
                                        4 years experience with MERN/FERN Stack (MongoDB/Firebase, Express, React, Node.js).                                    
                                    </li>
                                </ul>
                                <h3>Freelance Design</h3>
                                <span>June 2016 - Current Day</span>
                                <ul>
                                    <li>
                                        Works with several Toronto-based businesses as a designer and brand consultant.                                        
                                        <br/>
                                        <NavLink className="about-proj-link" to="/sounddistrict"> Sound District</NavLink> &nbsp;&nbsp; | &nbsp;&nbsp; 
                                        <NavLink className="about-proj-link" to="/nextgen">Next Gen</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp; 
                                        <NavLink className="about-proj-link" to="/cg">Christopher Gonzales</NavLink> &nbsp;&nbsp; | &nbsp;&nbsp;  
                                        <NavLink className="about-proj-link" to="/jazelbites">Jazel Bites</NavLink> 
                                    </li>
                                    <li>
                                        Capable of creating a variety of design deliverables such as logos, brand concepts, business cards, marketing content, etc.                                   
                                    </li>
                                    <li>
                                        Further assists businesses in maintaining and managing brand consistency through style guides and outlines.                                     
                                    </li>
                                    <li>
                                        Partners with a virtual assistant business as an outsource designer to provide design services to small businesses and entrepreneurs.                                     
                                    </li>
                              
                                </ul>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="about-section">
                                <h2>Education</h2>
                                <h3>Ontario Tech University</h3>
                                <span>June 2016 - Apr 2021</span>
                                <p>B.S. (Honours) in Computer Science with distinction</p>
                            </div>
                        </Fade>
                    </div>

                    <div className="about-col2">
                        {/* <Fade>
                            <div className="about-section">
                                <h2>Education</h2>
                                <h3>Ontario Tech University</h3>
                                <span>June, 2016 - Apr, 2021</span>
                                <p>B.S. (Honours) in Computer Science with distinction</p>
                            </div>
                        </Fade> */}
                        <Fade>
                            <div className="about-section">
                                <h2>Languages</h2>
                                <ul>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>HTML &nbsp; | &nbsp; CSS</li>
                                    <li>Python</li>                                
                                    <li>C++</li>
                                </ul>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="about-section">
                                <h2>Technologies</h2>
                                <ul>
                                    <li>React.js</li>
                                    <li>Node.js &nbsp; | &nbsp; Express</li>
                                    <li>MongoDB</li>                                
                                    <li>Firebase &nbsp; | &nbsp; Cloud Functions</li>
                                    <li>SASS / SCSS</li>
                                    <li>AJAX &nbsp; | &nbsp; JSON</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="about-section">
                                <h2>Tools</h2>
                                <ul>
                                    <li>VScode</li>
                                    <li>Git &nbsp; | &nbsp; Github &nbsp; | &nbsp; SourceTree</li>
                                    <li>Visual Studio</li>                                
                                </ul>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="about-section">
                                <h2>Design</h2>
                                <ul>
                                    <li>Sketch</li>
                                    <li>Figma</li>
                                    <li>Illustrator &nbsp; | &nbsp; After Effects</li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>  
            </div>

            <Footer/>
        </>
    )
}

export default About;