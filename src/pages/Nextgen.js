import React, {useState, useEffect} from 'react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import TechScroll from '../components/TechScroll';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import nextgenLogo from '../images/projects/nextgen/nextgenLogo.png';

import ngproto from '../images/projects/nextgen/ngprototyping.png';
import ngmockups from '../images/projects/nextgen/ngmockups.png';

import {TECH_BLOBS} from '../helpers/constants';

import landing from '../images/projects/sui/landing.png';
import home from '../images/projects/sui/home.png';

import ngbanner from '../images/projects/nextgen/ngbanner.jpg';
import ngintro from '../images/projects/nextgen/ngintro.png';

import ngBreakdown from '../images/projects/nextgen/ngbreakdown2.png';
import nghifi from '../images/projects/nextgen/nghifi5.png';


import demo from '../images/demos/SUidemoS.mov';


const Nextgen = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
      }, [])

    const techScrollImgs = [landing, home, landing, home, landing];
    
    return (
        <React.Fragment>
            <Nav defaultNav={true}/>

            <div className="container proj-hero">
                <Fade>
                    <img id="suiHeroTitle" src={nextgenLogo}></img>
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p>Responsive Website <br/> Brand Identity</p>
            
                    <h2>Roles</h2>
                    <p>UI / UX Design <br/> Develop <br/> Maintenance </p>                        
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>Creating a tool to assist the early stages of both design and development. When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface. The style guide provides brand consistency and quality while the generated UI components become the building blocks to any website.</p>
                </div>
            </div>

            <div className="banner" style={{backgroundImage: `url("${ngbanner}")`}}>
                <div className="black-gradient"></div>
                <div className="container banner-intro">
                    <Fade>
                        <img id="ngIntro" src={ngintro}/>
                    </Fade>
                </div>
            </div>

            <div className="container ng-breakdown">
                <Fade>
                    <h2>Brand Definition</h2>
                    <div className="text-img">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Fade bottom>
                            <img id="ngBreakdown" src={ngBreakdown}/>
                        </Fade>
                    </div>
                </Fade>
            </div>

            <div className="container">
                <Fade>
                    <h2>Design Process</h2>
                    <div className="text-img">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Fade bottom>
                            <img id="ngProto" src={ngproto}/>
                        </Fade>
                    </div>
                </Fade>
            </div>

            <div className="container mockup-container">
                <Fade>
                    <img src={ngmockups}></img>
                </Fade>
            </div>

            <div className="slant-container">
                <div className="slant-bg"></div>
                <div className="container">
                    <Fade bottom>
                       <img src={nghifi}></img>
                    </Fade>
                </div>
            </div>

            <TechScroll
                imgs={techScrollImgs}
                blobs={TECH_BLOBS}
            />

            <div className="demo-section">
                <div className="container demo-container">
                    <h2>Demo</h2>
                    <video src={demo} controls></video>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </React.Fragment>
    )
}

export default Nextgen;