import React from 'react';
import '../styles/Home.css';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import Lowfi from '../components/Lowfi';

import logowhite from '../images/ridgelogo_white.png'
import macbook from '../images/macbook.png';

const Home = (props) => {

    const animOptions = {
        renderer: 'svg',
        loop: false,
        autoplay: true, 
        animationData: require('../images/designanim2.json')
    }

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
                <Lottie
                    className="des-anim"
                    options={animOptions}
                    playingState='play'/>

                <div className="container hero-text-container">
                    <div className="intro">
                        <h1 id="firstName">Ridge</h1>
                        <h1 id="lastName">Reventar</h1>
                        <p id="introDesc">With 7 years experience of free lance graphic design I transitioned my passion into web development. I inspire to bring visions to life through visual graphics and full stack applications</p>
                        <button className="round-btn">
                            View my work
                        </button>
                    </div> 
                    <div className="titles">
                        <div className="design-container">
                            <span>Graphic</span>
                            <h1>DESIGNER</h1>
                        </div>
                        <h1 id="plus">+</h1>
                        <div className="develop-container">
                            <span>Front End</span>
                            <h1>DEVELOPER</h1>
                        </div>

                    </div>
                    
                </div>
            </div>

            <div className="project-slide">
                <Fade delay={1000}>
                    <Lowfi></Lowfi>
                </Fade>


                <div className="container project-slide-content">
                    <div className="macbook-container">
                        <div className="site">

                        </div>
                    </div>
                    <div className="project-card">

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Home;