import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {Fade} from 'react-reveal';
import { StickyContainer, Sticky } from 'react-sticky';

import '../styles/Sui.css';

import {suiAnim} from '../helpers/anims';

import Trigger from '../components/Trigger';
import Tech from '../components/Tech';

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

    const [playAnim, setPlayAnim] = useState(false);

    const techBlobs = [
        {
            title: "Development Technologies",
            par: ""
        },
        {
            title: "React Hooks & Contexts",
            par: "This is when a huge portion of the work was devoted to learning React hooks and contexts. The idea behind this, is that all components wrapped by a context provider can consume its values. Therefore by wrapping my application in a Theme Context, I was able to retrieve and manipulate its object values with any component. React Hooks is a fairly new concept that allows functional components to maintain its own state. Originally, components must be a class to have a state, but with react hooks, my functional components were able to utilize state variables and consume the theme context." 
        },
        {
            title: "Animations",
            par: "For example, to create this animation, I took the time to experiment with adobe after effects. To do this, I used a plugin called AEUX to transfer my sketch vectors into after effects. From there I animated each individual vector. Once the animation was complete, I used a plugin called bodymovin to export the animation as a json file so that it can be rendered as an svg through a library called lottie-web-react."
        },
        {
            title: "Image Files in MongoDB",
            par: "This was accomplished by first using mongoose to create a new connection to the database, then gridfs-stream to link to a new collection called “uploads”. Next a storage engine was made using multer-gridfs-storage. This allowed me to define what information was being stored and where to store it. Next a library called Multer was used to handle the storage of the file. Finally I used express to handle the post request using a multer file instance."
        },
        {
            title: "Npm Package",
            par: "The final task was to allow users to export their theme and bring the custom UI components into their own projects. To do this I first used a library called Blob to transform the theme object into a downloadable json document. The next step of creating my npm package took a fair amount of research however I discovered a rollup wrapper called micro-bundle to create a my react component library. This wrapper acted as a template that allowed me to create my custom components and have the code distributed through a private npm registry from GitHub. With this registry, anyone is able to download my package using ‘npm install @ridgereventar/sui’ to obtain the default components. Then by linking the theme object inside the json file, the components will automatically link to the defined colours and fonts. Below is an outline of how this structure works."
        }
    ]

    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);

    const setArray = [setShow1, setShow2, setShow3, setShow4, setShow5]

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
            <div className="logo-hero">
                <div className="container logo-hero-content">
                    <img src={suiLogo}></img>
                    <p>A Style Guide & Ui Component Generator</p>
                </div>
            </div>

            <div className="container breakdown">
                <div className="roles-container">
                    <h3>Deliverables</h3>
                    <ul>
                        <li>Responsive Website</li>
                        <li>Brand Identity</li>
                    </ul>
                    <h3>Roles</h3>
                    <ul>
                        <li>UI / UX Design</li>
                        <li>Develop</li>
                        <li>Database Management</li>
                    </ul>
                </div>
                <div className="goal-container">
                    <h3>Goals</h3>
                    <p>Creating a tool to assist the early stages of both design and development.  When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface. The style guide provides brand consistency and quality while the generated UI components become the building blocks to any website.</p>
                </div>
            </div>

            <Trigger onEnterViewport={() => setPlayAnim(true)}></Trigger>        
            <div className="intro-graphic-section">
                <div className="intro-strip">
                    <div className="container intro-content">
                        <h1 className="intro-title">Branding & Development Made Easy</h1>
                    </div>      
                </div>
                {playAnim?
                    <Lottie
                        className="intro-anim"
                        options={suiAnim}
                        playingState='play'/>
                    : null
                }
            </div>
            
            <div className="container brand-section">
                <div className="context">
                    <h1>Brand Definition</h1>
                    <p className="context-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="visual">
                    <img src={brand}></img>
                </div>
            </div>

            <div className="container design-section">   
                <div className="context">
                    <h1>Design / Prototyping</h1>
                    <p className="context-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="visual">
                    <span id="lowfi-text" className="light-text">Lowfi's</span>
                    <img id="lowfis" src={lowfis}></img>         
                </div>

            </div>

            <div className="highfi-section">
                <div className="slant-bg"/>
                <div className="container highfis">
                    <div className="highfi-imgs-wrapper">
                        <span id="highfi-text" className="light-text">HighFi's</span>
                        <img id="landing" src={landing}></img>
                        <img id="login" src={login}></img>
                        <img id="signup" src={signup}></img>
                        <img id="home" src={home}></img>
                        <img id="create" src={create}></img>

                    </div>
                </div>                
            </div>

            <div className="dev-section">
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

                {techBlobs.map((tech, index) => {
                    return (
                        <Tech 
                        onLeaveViewport={() => switchTech(index)}
                        title={tech.title}
                        par={tech.par}></Tech>
                    )
                })}

            </div>

            <div className="container finalsite-header">
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