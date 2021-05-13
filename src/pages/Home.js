import React, {useState, useEffect, useRef} from 'react';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import '../styles/styles.css';

import Nav from '../components/Nav';
import Trigger from '../components/Trigger';
import ProjectGrid from '../components/ProjectGrid';

import {pepiAnim, lowfiAnim, desAnim, devAnim, motionAnim} from '../helpers/anims';

import suiSample from '../images/demos/suiDemoFinal.mov';
import nextSample from '../images/demos/nextDemo.mov';
import suiT from '../images/titles/suiT.png';
import nextT from '../images/titles/nextgenT.png';
import uniT from '../images/titles/unicityT.png';

import arrow from '../images/arrow.png';
import logo from '../images/Rlogo.png';
import mac from '../images/mac.png';
import jazelbites from '../images/jazelbites.png';
import me from '../images/me.png';
import nextbtn from '../images/next.png';
import { isElementOfType } from 'react-dom/test-utils';

import darkmac from '../images/darkmac4.png';
import darkphone from '../images/darkphone3.png';
import ngphone from '../images/demos/nextgenmobile.mov';


const Home = (props) => {

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])


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

                        <div className="hero-intro">
                            <h1>RIDGE REVENTAR</h1>
                            <p>Front End Developer & Designer</p>
                            <button className="site-btn">View my work</button> 
                        </div>
                   
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

                <div className="container background">
                    <Fade>
                        {/* <img className="bg-logo" src={logo}></img> */}
                        <div className="background-content">
                            <h1 className="section-title">QUALITY & GROWTH</h1>
                            <p>
                                Through 7 years experience of free lance design I expanded my passion into web development. 
                                From front end sites to full stack applications, I utilize my design experience and technology capabilities to bring visions to life.
                                I continue to expand my skills and grow my toolset to ensure my applications meet the current requirements of high level development. 
                                This site showcases my work so far, however I only intend on learning much more. 
                            </p>
                        </div>

                        <Trigger onEnterViewport={() => setplayAnim(true)} onLeaveViewport={() => console.log("leave")}/>

                    </Fade>

                    <div className="dev-wrapper">
                        {playAnim? 
                            <Lottie
                                className="dev-anim"
                                options={lowfiAnim}
                                playingState='play'/>
                            : null   
                        }
                    </div>

                </div>

                {/* <div className="animation-container">
                    <Lottie
                            className="pepi-anim"
                            options={pepiAnim}
                            playingState='play'/>
                    <Lottie
                            className="dev-anim"
                            options={lowfiAnim}
                            playingState='play'/>
                </div> */}


                {/* <div className="container dev-anim-wrapper"> 
                    {playAnim?
                        <Lottie
                            className="dev-anim"
                            options={lowfiAnim}
                            playingState='play'/>
                        :null
                    }
                    <Trigger onEnterViewport={() => setplayAnim(true)} onLeaveViewport={() => console.log("leave")}/>
                </div> */}

                <div className="container tools-section">
                    <div className="tool-category">
                        {playDesIcon?
                        <>
                            <Lottie
                                className="tool-icon"
                                options={desAnim}
                                playingState='play'/> 
                            <Fade bottom>
                                <div>
                                    <h1>DESIGN</h1>
                                    <p className="tools-stacked">Sketch <br/> Figma <br/> Illustrator</p>
                                    <p className="tools-inline">Sketch, Figma, Illustrator</p>                                
                                </div>
                            </Fade>
                        </>
                        : null}
                    </div>

                    <div className="tool-category">
                        {playDevIcon?
                        <React.Fragment>
                            <Lottie
                                className="tool-icon"
                                options={devAnim}
                                playingState='play'/>
                            <Fade bottom>
                                <div>
                                    <h1>DEVELOPMENT</h1>
                                    <p className="tools-stacked">JavaScript <br/> HTML / CSS <br/> React <br/> Node.js <br/> Express <br/> MongoDB</p>
                                    <p className="tools-inline">JavaScript, HTML / CSS, React, Node.js, Express, MongoDB</p>
                                </div>
                            </Fade>
                        </React.Fragment>
                        : null}
                    </div>

                    <div className="tool-category">
                        {playMotIcon?
                        <React.Fragment>
                            <Lottie
                                className="tool-icon"
                                options={motionAnim}
                                playingState='play'/>
                            <Fade bottom>
                                <div>
                                    <h1>MOTION</h1>
                                    <p className="tools-stacked">After Effects <br/> Bodymovin <br/> AEUX</p>
                                    <p className="tools-inline">After Effects, Bodymovin, AEUX</p>
                                </div>
                            </Fade>
                        </React.Fragment>
                        : null}
                    </div>
                </div>  

                <Trigger onEnterViewport={() => playIcons()} onLeaveViewport={() => console.log("leave")}/>

                <div className="container project"> 
                    <Fade>
                        <h1 className="section-title">Projects</h1>
                    </Fade>                       
                </div>

            </div>
            
            <div className="home2">
                <ProjectGrid/>

                {/* <div className="container testimonials">
                    <Fade>
                        <div className="testimonial-card">
                            <img className="testimonial-logo" src={jazelbites}></img>
                            <h1>Jazel Bites</h1>
                            <div className="underline"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                            <p>- Jazel Zulueta, Owner</p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className="testimonial-card">
                            <img className="testimonial-logo" src={jazelbites}></img>
                            <h1>NextGen Edu.</h1>
                            <div className="underline"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  consectetur adipiscing elit, sed! sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <p>- Christopher Gonzales, Co-owner</p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className="testimonial-card">
                            <img className="testimonial-logo" src={jazelbites}></img>
                            <h1>Pepi's Techsuit</h1>
                            <div className="underline"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                            <p>- Mir Afgan Talpur, Owner</p>
                        </div>
                    </Fade>

                </div> */}

                <div className="container about-container">
                    <div className="about-text-container">
                        <Fade left>                        
                            <h1 className="section-title about-title">About</h1>
                            <p>With 5 years experience of free lance graphic design I transitioned my passion into web development. I inspire to bring visions to life through visual graphics and full stack applications</p>
                            <p>I am a designer and front-end web developer currently studying computer science at Ontario Tech University. </p>
                            <p>Through free lance work over the last 5 years, I have developed a strong passion for design and am continuously striving to transition my skills and knowledge into the web application world.</p>
                        </Fade>

                    </div>
                    <Fade right>
                        <img src={me}></img>
                    </Fade>

                </div>

            </div>

        </>
    )
}

export default Home;