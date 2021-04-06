import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {Fade} from 'react-reveal';
import { StickyContainer, Sticky } from 'react-sticky';

import '../styles/Sui.css';

import {suiAnim} from '../helpers/anims';
import {TECH_BLOBS} from '../helpers/constants';
 
import Trigger from '../components/Trigger';
import Tech from '../components/Tech';
import Nav from '../components/Nav';

import suiLogo from "../images/projects/sui/sui.png";
import slogo from '../images/projects/sui/slogo.png';
import brand from '../images/projects/sui/brand.png';
import lowfis from '../images/projects/sui/lowfis.png';
import demo from '../images/demos/SUidemoS.mov';
import landing from '../images/projects/sui/landing.png';
import login from '../images/projects/sui/loginpanel.png';
import signup from '../images/projects/sui/signuppanel.png';
import home from '../images/projects/sui/home.png';
import create from '../images/projects/sui/create.png';

const Sui = (props) => {

    const [playAnim, setPlayAnim] = useState(false);
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const setArray = [setShow1, setShow2, setShow3, setShow4, setShow5]
    const [scrollDir, setScrollDir] = useState("down");

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;
      
        const updateScrollDir = () => {
          const scrollY = window.pageYOffset;
      
          if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
          }
          setScrollDir(scrollY > lastScrollY ? "down" : "up");
          lastScrollY = scrollY > 0 ? scrollY : 0;
          ticking = false;
        };
      
        const onScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
          }
        };
      
        window.addEventListener("scroll", onScroll);
        console.log(scrollDir);
      
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollDir]);

    const setAllFalse = () => {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);
    }

    const switchTech = (index) => {
        setAllFalse();
        console.log(index);
        
        if(scrollDir === "down") {
            if(index < 4) {
                setArray[index + 1](true);
            } else if (index == 4) {
                setArray[index](true);
            }    
        } else {
            if(index > 0) {
                setArray[index - 1](true);
            } else if(index == 0) {
                setArray[index](true);
            }
        }

    }

    return (
        <React.Fragment>
            
            <Nav proj={true}/>
            
            <div className="proj-container proj-hero">
                <Fade left distance="80px">
                    <img src={suiLogo}></img>
                    <p>A Style Guide & Ui Component Generator</p>
                    <Trigger onLeaveViewport={() => setPlayAnim(true)}></Trigger>        
                </Fade>
            </div>

            <div className="proj-container breakdown">
                <Fade>
                    <div className="roles-container">
                        <div>
                            <h2>Deliverables</h2>
                            <ul className="proj-p">
                                <li>Responsive Website</li>
                                <li>Brand Identity</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Roles</h2>
                            <ul className="proj-p">
                                <li>UI / UX Design</li>
                                <li>Develop</li>
                                <li>Database Management</li>
                            </ul>
                        </div>
                    </div>
                    <div className="goal-container">
                        <h2>Goals</h2>
                        <p className="proj-p">Creating a tool to assist the early stages of both design and development.  When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface. The style guide provides brand consistency and quality while the generated UI components become the building blocks to any website.</p>
                    </div>
                </Fade>
            </div>

            <div className="graphic">
                <Fade left>
                    <div className="graphic-strip">
                        <div className="proj-container graphic-content">
                            <Fade delay={500}>
                                <h1 className="intro-title">Branding & Development Made Easy</h1>
                            </Fade>
                        </div>      
                    </div>
                </Fade>

                {playAnim?
                    <Lottie
                        className="intro-anim"
                        options={suiAnim}
                        playingState='play'/>
                    : null
                }
            </div>
            
            <div className="proj-container brand">
                <Fade>
                    <div className="context">
                        <h1>Brand Definition</h1>
                        <p className="proj-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="visual">
                        <img src={brand}></img>
                    </div>
                </Fade>
            </div>

            <div className="proj-container design"> 
                <Fade>
                    <div className="context">
                        <h1>Design / Prototyping</h1>
                        <p className="proj-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </Fade>
                <Fade right>
                    <div className="visual">
                        <span id="lowfi-text" className="light-text">Lowfi's</span>
                        <img id="lowfis" src={lowfis}></img>         
                    </div>
                </Fade>
            </div>

            <div className="highfis">
                <div className="slant-bg"/>
                <div className="proj-container highfi-imgs">
                    <div className="highfi-imgs-wrapper">
                        <span id="highfi-text" className="light-text">HighFi's</span>
                        <Fade top distance="80px">
                            <img id="landing" src={landing}></img>
                            <img id="login" src={login}></img>
                            <img id="signup" src={signup}></img>
                            <img id="home" src={home}></img>
                            <img id="create" src={create}></img>
                        </Fade>
                    </div>
                </div>                
            </div>

            <div className="dev">
                <div className="screen-wrapper">
                    <div className="screen">
                        <div className="screen-content">
                            {show1? <img src={landing}/> : null}
                            {show2? <img src={create}/> : null}
                            {show3? <img src={landing}/> : null}
                            {show4? <img src={home}/> : null}
                            {show5? <img src={create}/> : null}
                        </div>
                    </div>
                </div>

                {TECH_BLOBS.map((tech, index) => {
                    return (
                        <Tech 
                        onLeaveViewport={() => switchTech(index)}
                        title={tech.title}
                        par={tech.par}></Tech>
                    )
                })}

            </div>

            <div className="proj-container finalsite">
                <h3>Final Site</h3>
                <video className="final-demo" src={demo} controls></video>
            </div>                

            <div className="finalsite-section">
                <div></div>
            </div>

        </React.Fragment>
    )
}

export default Sui;