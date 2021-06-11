import React, {useEffect} from 'react';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import Phone from '../components/Phone';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import jazelbitesLogo from '../images/projects/jazelbites/jblogo.png';
import jazelbitesIcon from '../images/projects/jazelbites/logoicon.png';
import breakdown from '../images/projects/jazelbites/jazelbitesbreakdown.png';

import jbbg from '../images/projects/jazelbites/jbbg.png';
import jbintro from '../images/projects/jazelbites/jbintro.png';

import palette from '../images/projects/jazelbites/jbpalette.png';
import style from '../images/projects/jazelbites/jbstyle.png';

import phone from '../images/projects/jazelbites/jbphone.png';
import post from '../images/projects/jazelbites/jbpost.png';

import ipad from '../images/projects/jazelbites/ipad.png';
import bc1 from '../images/projects/jazelbites/jbbc1.png';
import bc2 from '../images/projects/jazelbites/jbbc2.png';
import ty1 from '../images/projects/jazelbites/jbty1.png';
import ty2 from '../images/projects/jazelbites/jbty2.png';

import {jazelBitesAnim} from '../helpers/anims';



const Jazelbites = () => {
    
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
                    <img src={jazelbitesLogo} alt=""/>
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p> Logo Design <br/> Brand Identity <br/> Social Media Posts <br/> Business Cards / Packaging</p>
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>The goal of this project was to create a branding that was simplistic, minimalist, and fun to look at. A strong colour palette was important to the brand in order to catch eyes and make a lasting impression. The logo itself should represent the business as a whole. “J” for the owner's name, and a mixer to symbolize the yummy desserts she has to offer. </p>
                </div>
            </div>

            <div className="banner jazelbites-banner" style={{backgroundImage: `url("${jbbg}")`}}>
                <div className="container banner-intro">
                    <Fade>
                        <img id="hometohome" src={jbintro} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="container logo-breakdown">
                <Fade bottom>
                    <img id="jazelbitesIcon" src={jazelbitesIcon} alt=""/>
                    <img id="jazelbitesBreakdown" src={breakdown} alt=""/>
                </Fade>
            </div>

            <div className="grey-bg">
                <div className="container styleguide-container">
                    <Fade>
                        <img src={palette} alt=""/>
                        <img src={style} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="container">
                <h2>Deliverables</h2>
                <span className="light-header light-list">Animation  &nbsp;&nbsp; | &nbsp;&nbsp; Instagram  &nbsp;&nbsp; | &nbsp;&nbsp; Business Cards</span>
            </div>

            <div className="deliverables-container">
                <div className="red-bg">
                    <div className="container">

                            <div className="ipad-section">
                                <div className="ipad-wrapper">
                                    <img id="jbIpad" src={ipad} alt=""/>
                                    <Lottie
                                        className="jazelbites-anim"
                                        options={jazelBitesAnim}
                                        playingState='play'/>
                                </div>
                            </div>

                            <Phone 
                                right={false}
                                shell={phone}
                                slide={post}/>        
                            <div className="bc-container bc-container-right">
                                <img className="jazelbites-card-right" src={bc1} alt=""/>
                                <img  className="jazelbites-card-right"src={bc2} alt=""/>
                            </div>
                            <div className="bc-container">
                                <img  className="jazelbites-card-left" src={ty1} alt=""/>
                                <img  className="jazelbites-card-left" src={ty2} alt=""/>
                            </div>
                    </div>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </>
    )
}

export default Jazelbites;