import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';

import '../styles/Project.css';

//components
import Nav from '../components/Nav';
import Tech from '../components/Tech';


//assets
import {suiAnim} from '../helpers/anims';
import suiLogo from "../images/projects/sui/sui.png";
import brand from '../images/projects/sui/brand.png';
import lowfis from '../images/projects/sui/lowfis.png';

import landing from '../images/projects/sui/landing.png';
import login from '../images/projects/sui/loginpanel.png';
import signup from '../images/projects/sui/signuppanel.png';
import home from '../images/projects/sui/home.png';
import create from '../images/projects/sui/create.png';

import {TECH_BLOBS} from '../helpers/constants';
import demo from '../images/demos/SUidemoS.mov';

const Project = () => {

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

            <section>
                <div className="container proj-hero">
                    <img id="suiHeroTitle" src={suiLogo}></img>
                    <p>A Style Guide & Ui Component Generator</p>
                </div>
            </section>

            <section>
                <div className="container breakdown">
                    <div className="breakdown-split-1">
                        <h2>Deliverables</h2>
                        <p>Responsive Website <br/> Brand Identity</p>
                
                        <h2>Roles</h2>
                        <p>UI / UX Design <br/> Develop <br/> Database Management</p>                        
                    </div>
                    
                    <div className="breakdown-split-2">
                        <h2>Goals</h2>
                        <p>Creating a tool to assist the early stages of both design and development. When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface. The style guide provides brand consistency and quality while the generated UI components become the building blocks to any website.</p>
                    </div>
                </div>
            </section>

            <section className="proj-intro-section">
                <div className="blue-bg"/>
                <div className="container proj-intro">
                    
                    <h1>Branding & Development <br/> Made Easy</h1>
                    <Lottie
                        className="sui-intro-anim"
                        options={suiAnim}
                        playingState='play'/>
                </div>
            </section>

            <section>
                <div className="container text-img-container">
                    <div>
                        <h1>Brand Definition</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img src={brand}/>
                </div>
            </section>

            <section>
                <div className="container text-img-container">
                    <div>
                        <h1>Design / Prototyping</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img src={lowfis}/>
                </div>
      
            </section>

            <section className="slant-container">
                <div className="grey-slant-bg"/>
                <div className="container highfi-container">
                    <img id="hfLanding" src={landing}/>
                    <img id="hfLogin" src={login}/>
                    <img id="hfSignup" src={signup}/>
                    <img id="hfHome" src={home}/>
                    <img id="hfCreate" src={create}/>
                </div>
            </section>

            <section className="dev-section">
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
                <div className="tech-blob-wrapper">
                    {TECH_BLOBS.map((tech, index) => {
                        return (
                            <Tech 
                            onLeaveViewport={() => switchTech(index)}
                            title={tech.title}
                            par={tech.par}></Tech>
                        )
                    })}
                </div>

            </section>

            <section>
                <div className="container">
                    <h1>Final Site Demo</h1>
                    <video src={demo} controls></video>
                </div>
            </section>

        </React.Fragment>


    )
}

export default Project;