import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';

import '../styles/projects/projects.css';

//components
import Nav from '../components/Nav';
import TechScroll from '../components/TechScroll';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

//assets
import suiLogo from "../images/projects/sui/sui.png";
import {suiAnim} from '../helpers/anims';
import brand from '../images/projects/sui/brand.png';
import lowfis from '../images/projects/sui/lowfis.png';
import landing from '../images/projects/sui/landing.png';
import login from '../images/projects/sui/loginpanel.png';
import signup from '../images/projects/sui/signuppanel.png';
import home from '../images/projects/sui/home.png';
import create from '../images/projects/sui/create.png';
import {TECH_BLOBS} from '../helpers/constants';
import demo from '../images/demos/SUidemoS.mov';

import suibreakdown from '../images/projects/sui/suibreakdown.png';
import suipalette from '../images/projects/sui/suipalette.png';
import suistyle from '../images/projects/sui/suistyle.png';


const Sui = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     window.onbeforeunload = function () {
    //         window.scrollTo(0, 0);
    //     }
    //   }, [])

    const techScrollImgs = [landing, create, brand, home, lowfis];

    return (
        <React.Fragment>
            
            <Nav defaultNav={true}/>

            <div className="container proj-hero">
                <img id="suiHeroTitle" src={suiLogo}></img>
                <p>A Style Guide & Ui Component Generator</p>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p>Responsive Website <br/> Brand Identity</p>
            
                    <h2>Roles</h2>
                    <p>UI / UX Design <br/> Develop <br/> Database Management</p>                        
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>Creating a tool to assist the early stages of both design and development. When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface. The style guide provides brand consistency and quality while the generated UI components become the building blocks to any website.</p>
                </div>
            </div>

            <div className="sui-banner">
                <div className="container sui-intro">
                    <h1>Branding & Development <br/> Made Easy</h1>
                    <Lottie
                            className="sui-intro-anim"
                            options={suiAnim}
                            playingState='play'/>  
                </div>
            </div>

            <div className="container text-img-container">
                <div>
                    <h1>Brand Definition</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img id="suiBreakdown" src={suibreakdown}/>
            </div>

            <div className="grey-bg sui-style">
                <div className="container styleguide-container">
                    <img src={suipalette}></img>
                    <img src={suistyle}></img>
                </div>
            </div>

            <div className="container text-img-container">
                <div>
                    <h1>Design / Prototyping</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img id="lowfis" src={lowfis}/>
            </div>

            <div className="slant-container">
                <div className="grey-slant-bg"/>
                <div className="container highfi-container">
                    <img id="hfLanding" src={landing}/>
                    <img id="hfLogin" src={login}/>
                    <img id="hfSignup" src={signup}/>
                    <img id="hfHome" src={home}/>
                    <img id="hfCreate" src={create}/>
                </div>
            </div>

            <TechScroll
                imgs={techScrollImgs}
                blobs={TECH_BLOBS}
            />

            <section className="demo-section">
                <div className="container demo-container">
                    <h1>Demo</h1>
                    <video src={demo} controls></video>
                </div>
            </section>

            <ProjectGrid/>

            <Footer/>

        </React.Fragment>


    )
}

export default Sui;