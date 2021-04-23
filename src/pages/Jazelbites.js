import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/projects/Jazelbites.css';

import Nav from '../components/Nav';

import jazelbitesLogo from '../images/projects/jazelbites/jblogo.png';
import jazelbitesIcon from '../images/projects/jazelbites/logoicon.png';
import breakdown from '../images/projects/jazelbites/jazelbitesbreakdown.png';
import styleguide from '../images/projects/jazelbites/jazelbitesstyle.png';
import ipad from '../images/projects/jazelbites/ipad.png';
import bc1 from '../images/projects/jazelbites/jbbc1.png';
import bc2 from '../images/projects/jazelbites/jbbc2.png';
import ty1 from '../images/projects/jazelbites/jbty1.png';
import ty2 from '../images/projects/jazelbites/jbty2.png';



const Jazelbites = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <React.Fragment>
            <Nav defaultNav={true}/>

            <section>
                <div className="container proj-hero">
                    <img src={jazelbitesLogo}></img>
                </div>
            </section>

            <section>
                <div className="container breakdown">
                    <div className="breakdown-split-1">
                        <h2>Deliverables</h2>
                        <p>Responsive Website <br/> Brand Identity <br/> Placeholder</p>
                    </div>
                    <div className="breakdown-split-2">
                        <h2>Goals</h2>
                        <p>Creating a tool to assist the early stages of both design and development. When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1 className="img-header">Logo Design</h1>
                </div>
            </section>


            <section className="border-line">
                <div className="container">
                    <span className="light-header">Logo Breakdown</span>
                    <div className="logo-split">
                        <img id="jazelbitesIcon" src={jazelbitesIcon}></img>
                        <img id="jazelbitesBreakdown" src={breakdown}></img>
                    </div>
                    <span className="light-header">Brand Definition</span>
                </div>
            </section>

            <section className="light-grey-bg">
                <div className="container">
                    <img src={styleguide}></img>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1 className="img-header">Applications</h1>
                </div>
            </section>


            <section className="border-line">
                <div className="container">
                    <span className="light-header">Animation  &nbsp;&nbsp; | &nbsp;&nbsp; Instagram  &nbsp;&nbsp; | &nbsp;&nbsp; Business Cards</span>
                </div>
            </section>

            <section className="red-bg">
                <div className="container">
                    <div className="ipad-container">
                        <img id="jazelbitesIpad" src={ipad}></img>
                    </div>
                    <div className="mobile-anim">

                    </div>
                    <div className="bc-container bc-container-right">
                        <img className="jazelbites-card-right" src={bc1}></img>
                        <img  className="jazelbites-card-right"src={bc2}></img>
                    </div>
                    <div className="bc-container">
                        <img  className="jazelbites-card-left" src={ty1}></img>
                        <img  className="jazelbites-card-left" src={ty2}></img>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Jazelbites;