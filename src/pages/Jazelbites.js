import React, {useState, useEffect} from 'react';

// import '../styles/Project.css';
// import '../styles/projects/Jazelbites.css';

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import Phone from '../components/Phone';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import jazelbitesLogo from '../images/projects/jazelbites/jblogo.png';
import jazelbitesIcon from '../images/projects/jazelbites/logoicon.png';
import breakdown from '../images/projects/jazelbites/jazelbitesbreakdown.png';
import ipad from '../images/projects/jazelbites/ipad.png';
import bc1 from '../images/projects/jazelbites/jbbc1.png';
import bc2 from '../images/projects/jazelbites/jbbc2.png';
import ty1 from '../images/projects/jazelbites/jbty1.png';
import ty2 from '../images/projects/jazelbites/jbty2.png';

import jbbanner from '../images/projects/jazelbites/jbbanner3.jpg';
import jbintro from '../images/projects/jazelbites/jbcrave3.png';

import palette from '../images/projects/jazelbites/jbpalette.png';
import style from '../images/projects/jazelbites/jbstyle.png';

import phone from '../images/projects/jazelbites/jbphone.png';
import post from '../images/projects/jazelbites/jbpost.png';


const Jazelbites = () => {
    
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     window.onbeforeunload = function () {
    //         window.scrollTo(0, 0);
    //     }
    // }, [])

    return (
        <>
            <Nav defaultNav={true}/>

            <div className="container proj-hero">
                <img src={jazelbitesLogo}></img>
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

            <div className="banner" style={{backgroundImage: `url("${jbbanner}")`}}>
                <div className="white-gradient"></div>
                <div className="container banner-intro">
                    <img id="hometohome" src={jbintro}/>
                </div>
            </div>

            <div className="container logo-breakdown">
                    <img id="jazelbitesIcon" src={jazelbitesIcon}></img>
                    <img id="jazelbitesBreakdown" src={breakdown}></img>
            </div>

            <div className="grey-bg">
                <div className="container styleguide-container">
                    <img src={palette}></img>
                    <img src={style}></img>
                </div>
            </div>

            <div className="container">
                <h2>Deliverables</h2>
                <span className="light-header light-list">Animation  &nbsp;&nbsp; | &nbsp;&nbsp; Instagram  &nbsp;&nbsp; | &nbsp;&nbsp; Business Cards</span>
            </div>


            <div className="red-bg">
                <div className="container">
                    <div className="ipad-container">
                        <img id="jazelbitesIpad" src={ipad}></img>
                    </div>
                    <Phone 
                        right={false}
                        shell={phone}
                        slide={post}/>        
                    <div className="bc-container bc-container-right">
                        <img className="jazelbites-card-right" src={bc1}></img>
                        <img  className="jazelbites-card-right"src={bc2}></img>
                    </div>
                    <div className="bc-container">
                        <img  className="jazelbites-card-left" src={ty1}></img>
                        <img  className="jazelbites-card-left" src={ty2}></img>
                    </div>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </>
    )
}

export default Jazelbites;