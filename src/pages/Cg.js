import React, {useEffect} from 'react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import cgIcon from '../images/projects/cg/cglogoicon.png';
import breakdown2 from '../images/projects/cg/cgbreakdown2.png';
import bc1 from '../images/projects/cg/cgfront.png';
import bc2 from '../images/projects/cg/cgback.png';

import cgbanner from '../images/projects/cg/cgbanner8.jpg';
import cgname from '../images/projects/cg/cgname5.png';
import cgProcess from '../images/projects/cg/cgsteps.png';


const Cg = () => {
    
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
                    <img id="cgLogo" src={cgIcon} alt=""></img>
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p>Logo Design <br/> Personal Brand Identity <br/> Social Media Posts</p>
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>
                        Creating a logo that professionally represents a personal brand. 
                        The design direction was focused on a blend of both an elegant and modern approach. 
                        The branding utilizes white space and high contrast to put emphasis on bold dark lines and crisp white text. 
                    </p>
                </div>
            </div>

            <div className="banner cg-banner" style={{backgroundImage: `url("${cgbanner}")`}}>
                <div className="container banner-intro">
                    <Fade>
                        <img id="cgName" src={cgname} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="container logo-breakdown">
                <Fade bottom>
                    <img id="cgIcon" src={cgIcon} alt=""></img>
                    <img id="cgBreak" src={breakdown2} alt=""></img>
                </Fade>
            </div>

            <div className="proj-section-header">
                <div className="container">
                    <Fade>
                        <h2>Design Process</h2>
                    </Fade>
                </div>
            </div>

            <div className="container">
                <Fade>
                    <img id="cgProcess" src={cgProcess} alt=""></img>
                </Fade>
            </div>

            <div className="container">
                <h2>Deliverables</h2>
                <span className="light-header light-list">Logo Design  &nbsp;&nbsp; | &nbsp;&nbsp; Business Card  &nbsp;&nbsp; | &nbsp;&nbsp; Social Media Branding</span>
            </div>

            <div className="grey-bg">
                <div className="container half-split">
                    <Fade>
                        <img src={bc1} alt=""></img>
                        <img src={bc2} alt=""></img>
                    </Fade>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>   

        </React.Fragment>
    )
}

export default Cg;