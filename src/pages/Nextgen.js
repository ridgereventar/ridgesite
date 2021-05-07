import React, {useState, useEffect} from 'react';

// import '../styles/projects/Nextgen.css';
import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import TechScroll from '../components/TechScroll';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import nextgenLogo from '../images/projects/nextgen/nextgenLogo.png';
import booklet from '../images/projects/nextgen/booklet.png';

import ngLogoDes from '../images/projects/nextgen/nglogodesign.png';
import ngproto from '../images/projects/nextgen/ngprototyping.png';
import ngmockups from '../images/projects/nextgen/ngmockups.png';
import nglanding from '../images/projects/nextgen/nglanding.png';
import ngcover from '../images/projects/nextgen/ngcover.png';
import ngabout from '../images/projects/nextgen/ngabout.png';
import ngworkshop from '../images/projects/nextgen/ngworkshop.png';

import {TECH_BLOBS} from '../helpers/constants';

import landing from '../images/projects/sui/landing.png';
import login from '../images/projects/sui/loginpanel.png';
import signup from '../images/projects/sui/signuppanel.png';
import home from '../images/projects/sui/home.png';
import create from '../images/projects/sui/create.png';

import ngbanner from '../images/projects/nextgen/ngbanner.jpg';
import ngintro from '../images/projects/nextgen/ngintro.png';

import ngBreakdown from '../images/projects/nextgen/ngbreakdown2.png';
import nghifi from '../images/projects/nextgen/nghifi5.png';


import demo from '../images/demos/SUidemoS.mov';


const Nextgen = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     window.onbeforeunload = function () {
    //         window.scrollTo(0, 0);
    //     }
    //   }, [])

    const techScrollImgs = [landing, create, login, home, signup];
    
    return (
        <React.Fragment>
            <Nav defaultNav={true}/>

            <div className="container proj-hero">
                <img id="suiHeroTitle" src={nextgenLogo}></img>
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
                    {/* <h2 id="ngBannerText">Seeking to lead the next generation of barbers towards success</h2> */}
                    <img id="ngIntro" src={ngintro}/>
                </div>
            </div>

            <div className="container">
                <h2>Brand Definition</h2>
                <div className="text-img-ng">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <img id="ngBreakdown" src={ngBreakdown}/>
                </div>
            </div>

            <div className="container">
                <h2>Design Process</h2>
                <div className="text-img-ng">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <img id="ngProto" src={ngproto}/>
                </div>
            </div>

            <div className="container mockup-container">
                <img src={ngmockups}></img>
            </div>

            <div className="slant-container">
                <div className="slant-bg"></div>
                <div className="container">
                    <img src={nghifi}></img>
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