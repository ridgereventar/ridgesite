import React, {useState, useEffect} from 'react';
import '../styles/Home.css';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import Lowfi from '../components/Lowfi';
import Trigger from '../components/Trigger';
import ProjectIcon from '../components/ProjectIcon';

import {PROJECTS} from '../helpers/constants';

import logowhite from '../images/Rlogo.png';
import macbook from '../images/macbook.png';
import vectorIcon from '../images/vectorIcon.png';
import webIcon from '../images/webIcon.png';
import motionIcon from '../images/motionIcon.png';

const Home = (props) => {

    const pepiAnim = {
        renderer: 'svg',
        loop: false,
        autoplay: true, 
        animationData: require('../images/designanimFinal.json')
    }

    const devAnim = {
        renderer: 'svg',
        loop: false, 
        autoplay: true,
        animationData: require('../images/devanimFinal.json')
    }

    const logoanim = {
        renderer: 'svg',
        loop: false, 
        autoplay: true,
        animationData: require('../images/logoanim3.json')
    }

    const [playAnim, setplayAnim] = useState(false);

    return (
        <React.Fragment>

            <div className="home">

                <div className="container nav-bar">
                    <img id="navlogo" src={logowhite}></img>
                    <ul className="nav">
                        <li className="nav-link">About</li>
                        <li className="nav-link">Projects</li>
                        <li className="nav-link">Contact</li>
                    </ul>
                </div>


                <div className="hero">
                    <div className="hero-anim-wrapper">
                        <Lottie
                            className="des-anim"
                            options={pepiAnim}
                            playingState='play'/>
                    </div>
                    {/* <Lottie
                        className="des-anim"
                        options={pepiAnim}
                        playingState='play'/> */}

                    <div className="container hero-text-container">
                        <div className="intro">
                            <Fade left>
                            <h1 id="firstName">Ridge</h1>
                                <h1 id="lastName">Reventar</h1>
                                {/* <p id="introDesc">Welcome to my personal portfolio!</p> */}
                                <button className="round-btn">
                                    View my work
                                </button> 
                            </Fade>
                            
                        </div> 

                        
                        <div className="titles">
                            <Fade right>
                                <div className="design-container">
                                    <span>Graphic</span>
                                    <h1>DESIGNER</h1>
                                </div>
                                <h1 id="plus">+</h1>
                                <div className="develop-container">
                                    <span>Front End</span>
                                    <h1>DEVELOPER</h1>
                                </div>
                            </Fade>
                            

                        </div>
                        
                    </div>
                </div>

                <div className="project-slide">

                    <div className="container project-slide-content">
                        <div className="macbook-container">
                            <div className="site">

                            </div>
                        </div>
                        <div className="project-card">
                        </div>
                    </div>

                </div>

                <div className="container anim-wrapper">
                    
                    <div className="background-intro">
                        <img id="background-logo" src={logowhite}></img>
                        <p className="background-text">Through 7 years experience of free lance design I expanded my passion into web development. I inspire to bring visions to life through visual graphics and full stack applications.</p>
                    </div>

                    {playAnim? 
                        <Lottie
                            className="dev-anim"
                            options={devAnim}
                            playingState='play'/>
                        : null
                    }
                </div>

                <Trigger onEnterViewport={() => setplayAnim(true)} onLeaveViewport={() => console.log("leave")}/>

                <div className="container tools-container">
                    <h1 className="section-title">Tools</h1>
                    <div className="tools-wrapper">
                        <div className="tool-category">
                            <img className="tool-icon" src={vectorIcon}></img>
                            <h1 className="sm-header">DESIGN</h1>
                            <ul className="tools-list">
                                <li>Sketch</li>
                                <li>Figma</li>
                                <li>Illustrator</li>
                            </ul>
                        </div>
                        <div className="tool-category">
                            <img className="tool-icon" src={webIcon}></img>
                            <h1 className="sm-header">DEVELOPMENT</h1>
                            <ul className="tools-list">
                                <li>JavaScript</li>
                                <li>HTML / CSS</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>

                            </ul>
                        </div>
                        <div className="tool-category">
                            <img className="tool-icon" src={motionIcon}></img>
                            <h1 className="sm-header">MOTION</h1>
                            <ul className="tools-list">
                                <li>After Effects</li>
                                <li>Bodymovin</li>
                                <li>AEUX</li>
                            </ul>
                        </div>
                    </div>
                </div>  

                <div className="container project-container">                        
                    <h1 className="section-title">Projects</h1>
                    {/* <ul className="projects-nav">
                        <li className="active">All</li>
                        <li>Development</li>
                        <li>Design</li>
                    </ul> */}
                </div>

            </div>
            
            <div className="home2">
                <div className="container projects-grid">
                    
                    {PROJECTS.map((proj, index) => {
                        return (
                            
                            <ProjectIcon
                                key={index}
                                proj={proj}/>
                        );
                    })}
                </div>

                <div className="container testimonial-container">
                    <div className="testimonial-card">
                        <img className="testimonial-logo" src={PROJECTS[3].iconhover}></img>
                        <h1>JazelBites</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                        <p>- Jazel Zulueta, Owner</p>
                    </div>
                    <div className="testimonial-card">

                    </div>
                    <div className="testimonial-card">

                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Home;