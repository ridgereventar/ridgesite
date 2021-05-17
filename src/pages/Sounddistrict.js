import React, {useState, useEffect} from 'react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import sdLogo from '../images/projects/sd/sdlogo.png';
import sdLogoFull from '../images/projects/sd/sdlogofull.png';
import breakdown from '../images/projects/sd/sdbreakdown.png';
import nl1 from '../images/projects/sd/nlfront.png';
import nl2 from '../images/projects/sd/nlback.png';
import sm1 from '../images/projects/sd/smfront.png';
import sm2 from '../images/projects/sd/smback.png';
import hs1 from '../images/projects/sd/hsfront.png';
import hs2 from '../images/projects/sd/hsback.png';

import sdbanner from '../images/projects/sd/sdbanner3.jpg';


const Sounddistrict = () => {
    
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
                    <img id="sdLogo" src={sdLogo}></img>
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p>Responsive Website <br/> Brand Identity <br/> Placeholder</p>
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>Creating a tool to assist the early stages of both design and development. When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface.</p>
                </div>
            </div>

            <div className="banner sd-banner" style={{backgroundImage: `url("${sdbanner}")`}}>
                <div className="black-gradient"></div>
                <div className="container banner-intro">
                    <Fade>
                        <img id="hometohome" src={sdLogoFull}/>
                    </Fade>
                </div>
            </div>

            <div className="container logo-breakdown">
                <Fade bottom>
                    <img id="sdIcon" src={sdLogo}></img>
                    <img id="sdBreakdown" src={breakdown}></img>
                </Fade>
            </div>

            <div className="container">
                <h2>Marketing Designs</h2>
                <span className="light-header light-list">Event Promotion  &nbsp;&nbsp; | &nbsp;&nbsp; Posters  &nbsp;&nbsp; | &nbsp;&nbsp; Flyers</span>
            </div>

            <div className="container">
                <div className="event-container">
                    <div className="event-info-container">
                        <Fade>
                            <h1>No Limit</h1>
                            <p>Creating a tool to assist the early stages of both design and development.  When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. </p>
                        </Fade>
                    </div>
                    <div className="poster-container">
                        <Fade right>
                            <img className="event-poster" src={nl1}></img>
                            <img className="event-poster" src={nl2}></img>
                        </Fade>
                    </div>
                </div>
                <div className="event-container">
                    <div className="event-info-container">
                        <Fade>
                            <h1>Summer Nights</h1>
                            <p>Creating a tool to assist the early stages of both design and development.  When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. </p>
                        </Fade>
                    </div>
                    <div className="poster-container">
                        <Fade right>
                            <img className="event-poster" src={sm1}></img>
                            <img className="event-poster" src={sm2}></img>
                        </Fade>
                    </div>
                </div>
                <div className="event-container">
                    <div className="event-info-container">
                        <Fade>
                            <h1>Halloween Sound</h1>
                            <p>Creating a tool to assist the early stages of both design and development.  When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. </p>
                        </Fade>
                    </div>
                    <div className="poster-container">
                        <Fade right>
                            <img className="event-poster" src={hs1}></img>
                            <img className="event-poster" src={hs2}></img>
                        </Fade>
                    </div>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </React.Fragment>
    )
}

export default Sounddistrict;