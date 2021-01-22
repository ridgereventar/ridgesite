import React, {useState, useEffect} from 'react';
import '../styles/Home.css';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import Lowfi from '../components/Lowfi';
import Trigger from '../components/Trigger';

import logowhite from '../images/Rlogo.png'
import macbook from '../images/macbook.png';

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
                            <p id="introDesc">With 7 years experience of free lance graphic design I transitioned my passion into web development. I inspire to bring visions to life through visual graphics and full stack applications</p>
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

            <div className="anim-wrapper">
                {playAnim? 
                    <Lottie
                        options={devAnim}
                        playingState='play'/>
                    : null
                }
            </div>

            <Trigger onEnterViewport={() => setplayAnim(true)} onLeaveViewport={() => console.log("leave")}/>

            <div className="container skills-content">
                <h1 className="section-title">Skills</h1>
                <div className="design-skills-container">
                    <h2 className="sm-header">DESIGN</h2>
                    <div className="vect-divider"></div>
                    <ul className="skills-list">
                        <li>Sketch</li>
                        <li>Figma</li>
                        <li>After Effects</li>
                    </ul>
                </div>
                <div className="dev-skills-container">
                    <h2 className="sm-header">DEVELOPMENT</h2>
                    <div className="vect-divider"></div>
                    <div className="skills-list-container">
                        <ul className="skills-list">
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                        <ul className="skills-list">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                        </ul>
                        <ul className="skills-list">
                            <li>MongoDB</li>
                            <li>Jquery</li>
                        </ul>
                    </div>

                </div>
               
            </div>

            <div className="container logo-anim-wrapper">
                <Lottie
                    className="logo-anim"
                    options={logoanim}
                    playingState='play'/>
            </div>



        </div>
    )
}

export default Home;