import React, {useState, useEffect} from 'react';

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import pepiTech from '../images/projects/pepi/pepitech.png';
import pepiWet from '../images/projects/pepi/pepiwet.png';
import pepiSpace from '../images/projects/pepi/pepispace.png';

import techsuit from '../images/projects/pepi/techsuit.png';
import wetsuit from '../images/projects/pepi/wetsuit.png';
import spacesuit from '../images/projects/pepi/spacesuit.png';


import og1 from '../images/projects/pepi/og1.png';
import og2 from '../images/projects/pepi/og2.png';
import avatar from '../images/projects/pepi/avatar.png';
import blue from '../images/projects/pepi/bluehex.png';
import yellow from '../images/projects/pepi/yellowhex.png';
import purple from '../images/projects/pepi/purplehex.png';

import pepiBanner from '../images/projects/pepi/pepibg3.jpg';
import pepiIntro from '../images/projects/pepi/pepiintro.png';


const Pepi = () => {

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
                <img src={pepiTech}></img>
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

            <div className="banner pepi-banner" style={{backgroundImage: `url("${pepiBanner}")`}}>
                {/* <div className="white-gradient"></div> */}
                <div className="container banner-intro">
                    {/* <img id="hometohome" src={pepiIntro}/> */}
                </div>
            </div>

            <div className="proj-section-header">
                <div className="container">
                    <h2>Rebranding Project</h2>
                </div>
            </div>

            <div className="container">
                <p className="light-header">Original Logo</p>
                <div className="img-split">
                    <img src={og1}/>
                    <img src={og2}/>
                </div>
            </div>

            <div className="container">
                <p className="light-header">Design Process</p>
                <img id="pepiBreakdown" src={avatar}/>
                <div className="pepi-img-split">
                    <img src={pepiTech}></img>
                    <img src={pepiWet}></img>
                    <img id="pepiSpace" src={pepiSpace}></img>
                </div>                
            </div>

            <div className="grey-bg">
                <div className="container pepi-brand-container">
                    <img className="suit" src={techsuit}></img>
                    <div>
                        <h1>The Techsuit</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <img className="hexColor mobile-hex" src={blue}></img>
                    </div>
                    <img className="hexColor desktop-hex" src={blue}></img>
                </div>
                <div className="container pepi-brand-container">
                    <img className="suit" src={wetsuit}></img>
                    <div>
                        <h1>The Wetsuit</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <img className="hexColor mobile-hex" src={yellow}></img>
                    </div>
                    <img className="hexColor desktop-hex" src={yellow}></img>
                </div>
                <div className="container pepi-brand-container">
                    <img className="suit" src={spacesuit}></img>
                    <div>
                        <h1>The Spacesuit</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <img className="hexColor mobile-hex" src={purple}></img>
                    </div>
                    <img className="hexColor desktop-hex" src={purple}></img>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </>
    )
}

export default Pepi;