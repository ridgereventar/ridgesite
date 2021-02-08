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
import mac from '../images/mac.png';
import vectorIcon from '../images/vectorIcon.png';
import webIcon from '../images/webIcon.png';
import motionIcon from '../images/motionIcon.png';
import jazelbites from '../images/jazelbites.png';
import me from '../images/me.png';

import suiSample from '../images/suiDemoFinal.mov';
import nextSample from '../images/nextDemo.mov';

import suiT from '../images/titles/suititle.png';
import nextT from '../images/titles/nextlogo.png';
import uniT from '../images/titles/unititle.png';
import arrow from '../images/arrow.png';


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

    const [slideArray, setSlideArray] = useState([
        {
            title: suiT,
            width: "50%",
            color: "#FFFFFF",
            bgcolor: "#2A2A2A",
            demo: suiSample,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
            title: nextT,
            width: "60%",
            color: "#000000",
            bgcolor: "#C4C4C4",
            demo: nextSample,
            desc: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: uniT,
            width: "100%",
            color: "#000000",
            bgcolor: "#FAE19D",
            demo: suiSample,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ])

    const [displayElement, setDisplayElement] = useState(slideArray[0]);
    let index = 1;

    useEffect(() => {
        console.log(slideArray.length)
        const interval = setInterval(() => {
            setDisplayElement(slideArray[index]);
            index += 1;
            if(index >= slideArray.length) {
                index = 0;
            }
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, []);



    return (
        <React.Fragment>
            {console.log(index)}
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

                <div className="container slide">
                    <div className="card" style={{color: displayElement.color, backgroundColor: displayElement.bgcolor}}>
                        <img id="cardTitle" src={displayElement.title} style={{width: displayElement.width}}></img>
                        <p>{displayElement.desc}</p>
                        <img id="cardArrow" src={arrow}></img>
                        <div className="load-bar"></div>
                    </div>
                    <div className="mac-container">
                        <img src={mac}></img>
                        <div className="demo">
                            <video src={displayElement.demo} type="video/mp4" autoPlay muted></video>
                        </div>
                    </div>
                    
                </div>

                {/* <div className="container project-slide">
                    <Fade bottom> 
                        <div className="macbook-container">
                            <div className="site">
                                <video src={displayElement.demo} type="video/mp4" autoPlay muted></video>
                            </div>
                        </div>
                    </Fade>
                    <Fade left delay={500}>
                        <div className="project-card">

                        </div>
                        <div className="project-card" style={{color: displayElement.color, backgroundColor: displayElement.bgcolor}}>
                            <img src={displayElement.title}/>
                            <p>{displayElement.desc}</p>
                        </div>
                    </Fade>
                    
                </div> */}


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
                        <img className="testimonial-logo" src={jazelbites}></img>
                        <h1>Jazel Bites</h1>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                        <p>- Jazel Zulueta, Owner</p>
                    </div>
                    <div className="testimonial-card">
                        <img className="testimonial-logo" src={jazelbites}></img>
                        <h1>NextGen Edu.</h1>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  consectetur adipiscing elit, sed! sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <p>- Christopher Gonzales, Co-owner</p>
                    </div>
                    <div className="testimonial-card">
                        <img className="testimonial-logo" src={jazelbites}></img>
                        <h1>Pepi's Techsuit</h1>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                        <p>- Mir Afgan Talpur, Owner</p>
                    </div>
                </div>

                <div className="container about-container">
                    <div className="about-text-container">
                        <h1 className="section-title about-title">About</h1>
                        <p>With 5 years experience of free lance graphic design I transitioned my passion into web development. I inspire to bring visions to life through visual graphics and full stack applications</p>
                        <p>I am a designer and front-end web developer currently studying computer science at Ontario Tech University. </p>
                        <p>Through free lance work over the last 5 years, I have developed a strong passion for design and am continuously striving to transition my skills and knowledge into the web application world.</p>
                    </div>
                    <img src={me}></img>

                </div>

            </div>

            <div className="home3">

            </div>
        </React.Fragment>
    )
}

export default Home;