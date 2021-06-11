import React, {useEffect} from 'react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import TechScroll from '../components/TechScroll';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import nextgenLogo from '../images/projects/nextgen/nextgenLogo.png';

import ngproto from '../images/projects/nextgen/ngprototyping.png';
import ngmockups from '../images/projects/nextgen/ngmockups.png';
import darkmac from '../images/darkmac.png';

import {NEXTGEN_TECH_BLOBS} from '../helpers/constants';

import ngbanner from '../images/projects/nextgen/ngbanner.jpg';
import ngintro from '../images/projects/nextgen/ngintro.png';

import ngBreakdown from '../images/projects/nextgen/ngbreakdown2.png';
import nghifi from '../images/projects/nextgen/nghifi5.png';

import demo from '../images/demos/nextDemo.mov';


const Nextgen = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
      }, [])
    
    return (
        <React.Fragment>
            <Nav defaultNav={true}/>

            <div className="container proj-hero">
                <Fade>
                    <img id="suiHeroTitle" src={nextgenLogo} alt="" />
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p>Logo Redesign <br/> Brand Identity <br/> Responsive Website </p>
            
                    <h2>Roles</h2>
                    <p>Brand Design <br/> UI / UX Design <br/> Front End Development <br/> Maintenance </p>                        
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>
                        Deliver a high quality website to officially represent Next Gen Barber Workshop. 
                        Priorities involve an eye-catching landing page and clean front end design to overall solidify 
                        the company’s brand and professionalism. This will be achieved through quality design elements, responsive web development, and proper user experience.
                    </p>
                </div>
            </div>

            <div className="banner" style={{backgroundImage: `url("${ngbanner}")`}}>
                <div className="black-gradient"></div>
                <div className="container banner-intro">
                    <Fade>
                        <img id="ngIntro" src={ngintro} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="container ng-breakdown">
                <Fade>
                    <h2>Brand Definition</h2>
                    <div className="text-img">
                        <p>
                            The direction for the rebrand focused on representing the business's professionalism. 
                            The minimal yet effective colour palette of white, black, and gold accents, results in a clean and modern look. 
                            The logo incorporating a pair of barber sheers gives the viewer an immediate understanding of the company.
                        </p>
                        <Fade bottom>
                            <img id="ngBreakdown" src={ngBreakdown} alt=""/>
                        </Fade>
                    </div>
                </Fade>
            </div>

            <div className="container">
                <Fade>
                    <h2>Design Process</h2>
                    <div className="text-img">
                        <p>
                            The web design consists of lo-fi renders and a prototype to plan out the page navigation. 
                            This project required responsive design, therefore, both desktop and mobile versions were created. 
                            The hi-fi renders display a unique layout for the site rather than the conventional full page scroll. 
                            The left panel is stationary while the right panel is the main scrollable container. 
                        </p>
                        <Fade bottom>
                            <img id="ngProto" src={ngproto} alt=""/>
                        </Fade>
                    </div>
                </Fade>
            </div>

            <div className="container mockup-container">
                <Fade>
                    <img src={ngmockups} alt=""/>
                </Fade>
            </div>

            <div className="slant-container">
                <div className="slant-bg"></div>
                <div className="container">
                    <Fade bottom>
                       <img src={nghifi} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="proj-section-header">
                <div className="container">
                    <Fade>
                       <h2>Features</h2>
                    </Fade>
                </div>
            </div>

            <TechScroll
                hideScreen={true}
                blobs={NEXTGEN_TECH_BLOBS}
            />

            <div className="visit-container">   
                <div className="visit-slant-bg"></div>
                <div className="container visit-content">
                    <Fade>
                        <a href="https://www.nextgenbarbers.ca/" target="_blank" rel="noreferrer">
                            <button className="site-btn">Visit Site</button>
                        </a>
                    </Fade>
                    <Fade bottom>
                        <div className="visit-mac-wrapper">
                            <img id="darkmacVisit" src={darkmac} alt=""/>
                            <div className="visit-mac-screen">
                                    <video src={demo} playsInline autoPlay loop muted height="100%"/>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </React.Fragment>
    )
}

export default Nextgen;