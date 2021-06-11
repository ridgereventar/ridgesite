import React, {useEffect} from 'react'
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import TechScroll from '../components/TechScroll';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import amazonlogo from '../images/projects/amazon/amazonLogo.png';
import demo from '../images/demos/amazoncloneDemo.mov';
import darkmac from '../images/darkmac.png';
import {AMAZON_TECH_BLOBS} from '../helpers/constants';

function Amazon() {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <>
            <Nav defaultNav={true}/>

            <div className="container proj-hero">
                <Fade>
                    <img id="cgLogo" src={amazonlogo} alt=""></img>
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p>Full Stack Application <br/> Deployment with Firebase</p>
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>
                        The purpose of this project was to gain further practice with full stack development. 
                        Applying my front-end experience I was able to create a clone of Amazon's interface and mimic the exact user experience while navigating the application.
                        Furthermore, I was able to implement Context APIs, Firebase, and Stripe to allow the user to make a fully functioning transaction that communicates to the back-end. 
                    </p>
                </div>
            </div>

            <div className="visit-container">
                <div className="visit-slant-bg"></div>
                <div className="container visit-content">
                    <Fade>
                        <a href="https://clone-d6432.web.app/" target="_blank" rel="noreferrer">
                            <button className="site-btn">Visit Site</button>
                        </a>
                    </Fade>
                    <Fade bottom>
                        <div className="visit-mac-wrapper">
                            <img id="darkmacVisit" src={darkmac} alt=""/>
                            <div className="visit-mac-screen">
                                    <video src={demo} playsInline autoPlay loop muted/>
                            </div>
                        </div>
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
                blobs={AMAZON_TECH_BLOBS}
            />
            
            <ProjectGrid/>

            <Footer/>
        </>
    )
}

export default Amazon
