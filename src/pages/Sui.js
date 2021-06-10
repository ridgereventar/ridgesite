import React, {useEffect} from 'react';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

//components
import Nav from '../components/Nav';
import TechScroll from '../components/TechScroll';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

//assets
import suiLogo from "../images/projects/sui/sui.png";
import {suiAnim} from '../helpers/anims';
import lowfis from '../images/projects/sui/lowfis.png';
import {TECH_BLOBS} from '../helpers/constants';
import video from '../images/demos/suidemoUpdate.mov';

import suibreakdown from '../images/projects/sui/suibreakdown.png';
import suipalette from '../images/projects/sui/suipalette.png';
import suistyle from '../images/projects/sui/suistyle.png';
import suihifi from '../images/projects/sui/suihifi2.png';

const Sui = () => {

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
                    <img id="suiHeroTitle" src={suiLogo} alt=""/>
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p> Full Stack Application <br/> Brand Identity <br/> Npm package</p>
            
                    <h2>Roles</h2>
                    <p>UI / UX Design <br/> Full Stack Development </p>                        
                </div>
                <div className="breakdown-2">
                    <h2>Goal</h2>
                    <p>Creating a tool to assist the early stages of both design and development. When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface. The style guide provides brand consistency and quality while the generated UI components become the building blocks to any website.</p>
                </div>
            </div>

            <div className="sui-banner">
                <div className="container sui-intro">
                    <Fade>
                        <h1>Branding & Development <br/> Made Easy</h1>
                    </Fade>
                    <Lottie
                            className="sui-intro-anim"
                            options={suiAnim}
                            playingState='play'/>  
                </div>
            </div>

            <div className="container">
                <Fade>
                    <h2>Brand Definition</h2>
                    <div className="text-img">
                        <p>
                            The logo design and brand execution for this project played a large role in encapsulating what SUI is all about; quality and consistent branding. 
                            The final logo is minimal yet incorporates all three letters in ‘SUI’ when viewed upright and rotated on its side to reveal the ‘UI’.
                        </p>
                        <Fade bottom>
                            <img id="suiBreakdown" src={suibreakdown} alt=""/>
                        </Fade>
                    </div>
                </Fade>
            </div>

            <div className="grey-bg sui-style">
                <div className="container styleguide-container">
                    <Fade>
                        <img src={suipalette} alt=""/>
                        <img src={suistyle} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="container">
                <Fade>
                    <h2>Design / Prototyping</h2>
                    <div className="text-img">
                        <p>
                        The UI design of the application consisted of low-fi renders of each page as well as a prototype to plan user navigation within the site. 
                        The purpose of SUI is to make the early design process simpler for users therefore ease of use within the interface was prioritized. 
                        The high fi’s were then designed soon after to again capture the clean and consistent branding SUI promotes. 
                        </p>
                        <Fade bottom>
                            <img id="lowfis" src={lowfis} alt=""/>
                        </Fade>
                    </div>
                </Fade>
            </div>

            <div className="slant-container">
                <div className="slant-bg"></div>
                <div className="container">
                    <Fade bottom>
                        <img src={suihifi} alt=""/>
                    </Fade>
                </div>
            </div>

            <TechScroll
                hideScreen={false}
                blobs={TECH_BLOBS}
            />

            <div className="demo-section">
                <div className="container demo-container">
                    <h2>Demo</h2>
                    <video src={video} playsInline controls loop muted/>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </React.Fragment>


    )
}

export default Sui;