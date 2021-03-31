import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import '../styles/Home.css';

import Nav from '../components/Nav';
import Trigger from '../components/Trigger';
import ProjectIcon from '../components/ProjectIcon';

import {pepiAnim, lowfiAnim, desAnim, devAnim, motionAnim} from '../helpers/anims';
import {PROJECTS} from '../helpers/constants';

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

const Home = (props) => {

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
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            title: nextT,
            color: "#000000",
            bgcolor: "#C4C4C4",
            demo: nextSample,
            desc: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut magna aliqua."
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
            {console.log(displayElement.demo)}

            <div className="home">

                <Nav proj={false}/>

                <div className="hero">
                    <div className="container hero-content">
                        <Fade left distance="80px">
                            <div className="hero-intro">
                                <h1 id="fullName">RIDGE REVENTAR</h1>
                                <p id="introDesc">I am a front end developer and designer that inspires to bring visions to life through visual graphics and full stack applications.</p>
                                <button className="site-btn">View my work</button> 
                            </div> 
                        </Fade>

                        <Lottie
                            className="hero-anim"
                            options={pepiAnim}
                            playingState='play'/>

                        <div className="hero-titles">
                            <Fade right>
                                <div>
                                    <span>Graphic</span>
                                    <p>DESIGNER</p>
                                </div>
                                <h2 id="plus">+</h2>
                                <div>
                                    <span>Front End</span>
                                    <p>DEVELOPER</p>
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
                                <video src={displayElement.demo} type="video/mp4" playsInline autoPlay loop muted></video>
                            </div>
                        </div>
                    </Fade>
                    <Fade left delay={800}>
                        <div className="card">
                            <img className="card-title" src={displayElement.title}></img>
                            <p>{displayElement.desc}</p>
                            <div className="load-bar"></div>
                            <img id="cardArrow" src={arrow}></img>
                        </div>
                    </Fade>
                </div>

                <div className="container background">
                    
                    <div className="container background-content">
                        <img id="background-logo" src={logo}></img>
                        <p className="background-text">
                            Through 7 years experience of free lance design I expanded my passion into web development. 
                            I inspire to bring visions to life through visual graphics and full stack applications.
                        </p>
                    </div>
                    
                    <Trigger onEnterViewport={() => setplayAnim(true)} onLeaveViewport={() => console.log("leave")}/>

                    {playAnim? 
                        <Lottie
                            className="dev-anim"
                            options={lowfiAnim}
                            playingState='play'/>
                        : null
                    }
                </div>

                <div className="container tools">
                    <Fade delay={800}>
                        <h1 className="section-title">Tools</h1>
                    </Fade>
                
                    <div className="tools-content">
                        <div className="tool-category">
                            {playDesIcon?
                            <React.Fragment>
                                <Lottie
                                    className="tool-icon"
                                    options={desAnim}
                                    playingState='play'/> 
                                <Fade bottom>
                                    <div className="tool-content">
                                        <h1 className="sm-header">DESIGN</h1>
                                        <p>Sketch, Figma, Illustrator</p>
                                        <ul className="tools-list">
                                            <li>Sketch</li>
                                            <li>Figma</li>
                                            <li>Illustrator</li>
                                        </ul>
                                    </div>
                                    
                                </Fade>
                            </React.Fragment>
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
                                    <div className="tool-content">
                                        <h1 className="sm-header">DEVELOPMENT</h1>
                                        <p>JavaScript, HTML / CSS, React, Node.js, Express, MongoDB</p>
                                        <ul className="tools-list">
                                            <li>JavaScript</li>
                                            <li>HTML / CSS</li>
                                            <li>React</li>
                                            <li>Node.js</li>
                                            <li>Express</li>
                                            <li>MongoDB</li>
                                        </ul>
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
                                    <div className="tool-content">
                                        <h1 className="sm-header">MOTION</h1>
                                        <p>After Effects, Bodymovin, AEUX</p>
                                        <ul className="tools-list">
                                            <li>After Effects</li>
                                            <li>Bodymovin</li>
                                            <li>AEUX</li>
                                        </ul>
                                    </div>
                                </Fade>
                            </React.Fragment>
                            : null}
                        </div>
                    </div>
                </div>  

                <Trigger onEnterViewport={() => playIcons()} onLeaveViewport={() => console.log("leave")}/>

                <div className="container project"> 
                    <Fade delay={500}>
                        <h1 className="section-title">Projects</h1>
                    </Fade>                       
                </div>

            </div>
            
            <div className="home2">
                <div className="container projects-grid">
                    {PROJECTS.map((proj, index) => {
                        return (
                            <Fade>
                                <ProjectIcon
                                    key={index}
                                    proj={proj}/>
                            </Fade>

                        );
                    })}
                </div>

                <div className="container testimonials">
                    <Fade>
                        <div className="testimonial-card">
                            <img className="testimonial-logo" src={jazelbites}></img>
                            <h1>Jazel Bites</h1>
                            <div className="underline"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                            <p>- Jazel Zulueta, Owner</p>
                        </div>
                    </Fade>
                    <Fade delay={300}>
                        <div className="testimonial-card">
                            <img className="testimonial-logo" src={jazelbites}></img>
                            <h1>NextGen Edu.</h1>
                            <div className="underline"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  consectetur adipiscing elit, sed! sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <p>- Christopher Gonzales, Co-owner</p>
                        </div>
                    </Fade>
                    <Fade delay={800}>
                        <div className="testimonial-card">
                            <img className="testimonial-logo" src={jazelbites}></img>
                            <h1>Pepi's Techsuit</h1>
                            <div className="underline"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                            <p>- Mir Afgan Talpur, Owner</p>
                        </div>
                    </Fade>

                </div>

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

        </React.Fragment>
    )
}

export default Home;