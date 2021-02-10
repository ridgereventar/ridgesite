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
// import vectorIcon from '../images/vectorIcon.png';
// import webIcon from '../images/webIcon.png';
// import motionIcon from '../images/motionIcon.png';
import jazelbites from '../images/jazelbites.png';
import me from '../images/me.png';

import suiSample from '../images/suiDemoFinal.mov';
import nextSample from '../images/nextDemo.mov';

import suiT from '../images/suiT.png';
import nextT from '../images/nextgenT.png';
import uniT from '../images/unicityT.png';
import arrow from '../images/arrow.png';

import designIcon from '../images/designIcon.json';
import developIcon from '../images/devIcon.json';
import motionIcon from '../images/motionIcon.json';

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

    const desIcon = {
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: designIcon
    }

    const devIcon = {
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: developIcon
    }

    const motIcon = {
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: motionIcon
    }

    const [playAnim, setplayAnim] = useState(false);
    const [playDesIcon, setPlayDesIcon] = useState(false);
    const [playDevIcon, setPlayDevIcon] = useState(false);
    const [playMotIcon, setPlayMotIcon] = useState(false);

    const playIcons = () => {
        setPlayDesIcon(true);
        setTimeout(() => {setPlayDevIcon(true);}, 500);
        setTimeout(() => {setPlayMotIcon(true);}, 1000);
    }

    const [slideArray, setSlideArray] = useState([
        {
            title: suiT,
            width: "50%",
            color: "#FFFFFF",
            bgcolor: "#2A2A2A",
            demo: suiSample,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            title: nextT,
            width: "60%",
            color: "#000000",
            bgcolor: "#C4C4C4",
            demo: nextSample,
            desc: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut magna aliqua."
        },
        {
            title: uniT,
            width: "100%",
            color: "#000000",
            bgcolor: "#FAE19D",
            demo: suiSample,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim ad minim veniam."
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
        }, 10000);
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
                    <Fade left delay={300}>
                        <div className="mac-container">
                            <img src={mac}></img>
                            <div className="demo">
                                <video src={displayElement.demo} type="video/mp4" autoPlay muted></video>
                            </div>
                        </div>
                    </Fade>
                    <Fade left delay={1000}>
                        <div className="card">
                            <div className="title-container">
                                <img id="cardTitle" src={displayElement.title} style={{width: displayElement.width}}></img>
                            </div>
                            <p>{displayElement.desc}</p>
                            {/* <img id="cardArrow" src={arrow}></img> */}
                            <div className="load-bar"></div>
                        </div>
                    </Fade>

                </div>


                <div className="container anim-wrapper">
                    
                    <div className="background-intro">
                        <Fade delay={1000}>
                            <img id="background-logo" src={logowhite}></img>
                            <p className="background-text">Through 7 years experience of free lance design I expanded my passion into web development. I inspire to bring visions to life through visual graphics and full stack applications.</p>
                        </Fade>
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
                    {playDesIcon?
                    <Fade>
                        <h1 className="section-title">Tools</h1>
                    </Fade>
                    : null}
                
                    <div className="tools-wrapper">
                        <div className="tool-category">
                            {playDesIcon?
                            <React.Fragment>
                                <Lottie
                                    className="tool-icon"
                                    options={desIcon}
                                    playingState='play'/> 
                                <Fade bottom>
                                    <h1 className="sm-header">DESIGN</h1>
                                    <ul className="tools-list">
                                        <li>Sketch</li>
                                        <li>Figma</li>
                                        <li>Illustrator</li>
                                    </ul>
                                </Fade>
                            </React.Fragment>
                            : null}
                        </div>

                        <div className="tool-category">
                            {playDevIcon?
                            <React.Fragment>
                                <Lottie
                                    className="tool-icon"
                                    options={devIcon}
                                    playingState='play'/>
                                <Fade bottom>
                                    <h1 className="sm-header">DEVELOPMENT</h1>
                                    <ul className="tools-list">
                                        <li>JavaScript</li>
                                        <li>HTML / CSS</li>
                                        <li>React</li>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </Fade>
                            </React.Fragment>
                            : null}
                        </div>

                        <div className="tool-category">
                            {playMotIcon?
                            <React.Fragment>
                                <Lottie
                                    className="tool-icon"
                                    options={motIcon}
                                    playingState='play'/>
                                <Fade bottom>
                                    <h1 className="sm-header">MOTION</h1>
                                    <ul className="tools-list">
                                        <li>After Effects</li>
                                        <li>Bodymovin</li>
                                        <li>AEUX</li>
                                    </ul>
                                </Fade>
                            </React.Fragment>
                            : null}
                        </div>
                    </div>
                </div>  

                <Trigger onEnterViewport={() => playIcons()} onLeaveViewport={() => console.log("leave")}/>

                <div className="container project-container"> 
                    <Fade delay={500}>
                        <h1 className="section-title">Projects</h1>
                    </Fade>                       
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