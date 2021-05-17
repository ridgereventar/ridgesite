import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import '../styles/styles.css';

// components 
import Nav from '../components/Nav';
import Trigger from '../components/Trigger';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

// anims
import {lowfiAnim, desAnim, devAnim, motionAnim} from '../helpers/anims';
import suiSample from '../images/demos/suiDemoFinal.mov';
import nextSample from '../images/demos/nextDemo.mov';
import ngphone from '../images/demos/nextgenmobile.mov';

// images
import suiT from '../images/titles/suiT.png';
import nextT from '../images/titles/nextgenT.png';
import me from '../images/me.png';
import darkmac from '../images/darkmac4.png';
import darkphone from '../images/darkphone3.png';


const Home = (props) => {

    const [playBgAnim, setPlayBgAnim] = useState(false);
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
            color: "#FFFFFF",
            bgcolor: "#2A2A2A",
            demo: suiSample,
            desc: "Full Stack Application"
        },
        {
            title: nextT,
            color: "#000000",
            bgcolor: "#C4C4C4",
            demo: nextSample,
            desc: "Front End Design & Development"
        }
    ])

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const slideNext = () => {
        if(currentSlideIndex >= slideArray.length - 1) {
            setCurrentSlideIndex(0)
        } else {
            setCurrentSlideIndex(currentSlideIndex + 1);            
        }
    }

    const currentSlideObj = slideArray[currentSlideIndex]

    return (
        <>

            <Nav defaultNav={false}/>

            <div className="home">

                <div className="hero">
                    <div className="container hero-wrapper">

                        <Fade left>
                            <div className="hero-intro">
                                <h1>RIDGE REVENTAR</h1>
                                <p>Front End Developer & Designer</p>
                                <button className="site-btn">View my work</button> 
                            </div>
                        </Fade>
                   
                        <Fade right>
                            <div className="hero-mockup">
                                <div className="mockup-wrapper mac-mockup">
                                    <img id="darkMac" src={darkmac}/>
                                    <div className="mockup-demo mac-demo">
                                        <video src={currentSlideObj.demo} type="video/mp4" playsInline autoPlay loop muted></video>
                                    </div>
                                </div>
                                <div className="mockup-wrapper mobile-mockup">
                                    <img id="darkPhone" src={darkphone}></img>
                                    <div className="mockup-demo phone-demo">
                                        <video src={ngphone} type="video/mp4" playsInline autoPlay loop muted></video>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        
                    </div>
                </div>

                <div className="container bg-intro">
                    <Fade>
                        <div className="bg-intro-p">
                            <h1 className="section-title">QUALITY & GROWTH</h1>
                            <p>
                                Through 7 years experience of free lance design I expanded my passion into web development. 
                                From front end sites to full stack applications, I utilize my design experience and technology capabilities to bring visions to life.
                                I continue to expand my skills and grow my toolset to ensure my applications meet the current requirements of high level development. 
                                This site showcases my work so far, however I only intend on learning much more. 
                            </p>
                            <Trigger onEnterViewport={() => setPlayBgAnim(true)} onLeaveViewport={() => console.log("leave")}/>
                        </div>
                    </Fade>

                    <div className="bg-intro-anim">
                        {playBgAnim?
                            <Lottie
                                className="dev-anim"
                                options={lowfiAnim}
                                playingState='play'/>
                        : null}
                    </div>
                </div> 

                <Trigger onEnterViewport={() => playIcons()} onLeaveViewport={() => console.log("leave")}/>

                <div className="container tools-section">
                    <div className="tool-category">
                        <div className="tool-icon-wrapper"> 
                            {playDesIcon?
                                <Lottie
                                    className="tool-icon"
                                    options={desAnim}
                                    playingState='play'/> 
                            : null}
                        </div>
                        <Fade bottom>
                            <div>
                                <h1>DESIGN</h1>
                                <p className="tools-stacked">Sketch <br/> Figma <br/> Illustrator</p>
                                <p className="tools-inline">Sketch, Figma, Illustrator</p>                                
                            </div>
                        </Fade>
                    </div>

                    <div className="tool-category">
                        <div className="tool-icon-wrapper"> 
                            {playDevIcon?
                                <Lottie
                                    className="tool-icon"
                                    options={devAnim}
                                    playingState='play'/>
                            : null }
                        </div>
                        <Fade bottom>
                            <div>
                                <h1>DEVELOPMENT</h1>
                                <p className="tools-stacked">JavaScript <br/> HTML / CSS <br/> React <br/> Node.js <br/> Express <br/> MongoDB</p>
                                <p className="tools-inline">JavaScript, HTML / CSS, React, Node.js, Express, MongoDB</p>
                            </div>
                        </Fade>
                    </div>

                    <div className="tool-category">
                        <div className="tool-icon-wrapper"> 
                            {playMotIcon?
                                <Lottie
                                    className="tool-icon"
                                    options={motionAnim}
                                    playingState='play'/>
                            : null}
                        </div>
                        <Fade bottom>
                            <div>
                                <h1>MOTION</h1>
                                <p className="tools-stacked">After Effects <br/> Bodymovin <br/> AEUX</p>
                                <p className="tools-inline">After Effects, Bodymovin, AEUX</p>
                            </div>
                        </Fade>
                    </div>
                </div>  

                <div className="container projects-title">
                    <h1 className="section-title">PROJECTS</h1>
                </div>
            
            </div>
            
            <div className="home2">

                <ProjectGrid/>

                <div className="container home-about">
                    <Fade>
                        <div>
                            <p>I inspire to bring visions to life through visual graphics and full stack applications</p>
                            <button className="site-btn">About Me</button> 
                            <button className="site-btn">Get In Touch</button> 
                        </div>
                    </Fade>
                    <Fade right>
                        <img src={me}></img>
                    </Fade>
                </div>

                <Footer/>

            </div>

        </>
    )
}

export default Home;