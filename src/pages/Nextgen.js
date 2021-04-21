import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/projects/Nextgen.css';

import Nav from '../components/Nav';
import TechScroll from '../components/TechScroll';

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

import demo from '../images/demos/SUidemoS.mov';


const Nextgen = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
      }, [])

    const techScrollImgs = [landing, create, login, home, signup];
    
    return (
        <React.Fragment>
            <Nav defaultNav={true}/>

            <section>
                <div className="container proj-hero">
                    <img id="suiHeroTitle" src={nextgenLogo}></img>
                    {/* <p>A school seeking to lead the next generation of barbers towards success.</p> */}
                </div>
            </section>

            <section>
                <div className="container breakdown">
                    <div className="breakdown-split-1">
                        <h2>Deliverables</h2>
                        <p>Responsive Website <br/> Brand Identity</p>
                
                        <h2>Roles</h2>
                        <p>UI / UX Design <br/> Develop <br/> Maintenance </p>                        
                    </div>
                    
                    <div className="breakdown-split-2">
                        <h2>Goals</h2>
                        <p>Creating a tool to assist the early stages of both design and development. When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface. The style guide provides brand consistency and quality while the generated UI components become the building blocks to any website.</p>
                    </div>
                </div>
            </section>

            <section className="proj-intro-section">
                    <div className="proj-intro-bg black-bg"/>
                    <div className="container proj-intro">
                        
                        <h2>A school seeking to lead the next generation of barbers towards success.</h2>
                        <img id="nextgenBooklet" src={booklet}/>          
                    </div>
            </section>

            <section>
                <div className="container text-img-container">
                    <div>
                        <h1>Brand Definition</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img src={ngLogoDes}/>
                </div>
            </section>

            <section>
                <div className="container text-img-container">
                    <div>
                        <h1>Design / Prototyping</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <img src={ngproto}/>
                </div>
            </section>

            <section>
                <div className="container mockup-container">
                    <img src={ngmockups}></img>
                </div>
            </section>

            <section className="ngslant-container">
                <div className="grey-slant-bg"/>
                <div className="nghighfi-container">
                    <img id="ngcover" src={ngcover}/>
                    <img id="nglanding" src={nglanding}/>
                    <img id="ngworkshop" src={ngworkshop}/>
                    <img id="ngabout" src={ngabout}/>
                </div>
            </section>

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

        </React.Fragment>
    )
}

export default Nextgen;