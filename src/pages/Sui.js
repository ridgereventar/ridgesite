import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import {Fade} from 'react-reveal';

import '../styles/Sui.css';

import {suiAnim} from '../helpers/anims';

import Trigger from '../components/Trigger';

import suiLogo from "../images/projects/sui/sui.png";
import slogo from '../images/projects/sui/slogo.png';
import sdrafts from '../images/projects/sui/sdrafts.png';
import fonts from '../images/projects/sui/fonts.png';
import colors from '../images/projects/sui/colors.png';
import lowfis from '../images/projects/sui/lowfis.png';
import mac from '../images/projects/sui/macNS.png';

const Sui = (props) => {

    const [playAnim, setPlayAnim] = useState(false);

    return (
        <React.Fragment>
            <div className="logo-hero">
                <div className="container logo-hero-content">
                    <img src={suiLogo}></img>
                    <p>A Style Guide & Ui Component Generator</p>
                </div>
            </div>

            <div className="container breakdown">
                <div className="roles-container">
                    <h3>Deliverables</h3>
                    <ul>
                        <li>Responsive Website</li>
                        <li>Brand Identity</li>
                    </ul>
                    <h3>Roles</h3>
                    <ul>
                        <li>UI / UX Design</li>
                        <li>Develop</li>
                        <li>Database Management</li>
                    </ul>
                </div>
                <div className="goal-container">
                    <h3>Goals</h3>
                    <p>Creating a tool to assist the early stages of both design and development.  When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface. The style guide provides brand consistency and quality while the generated UI components become the building blocks to any website.</p>
                </div>
            </div>

            <Trigger onEnterViewport={() => setPlayAnim(true)}></Trigger>        
            <div className="intro-graphic-section">
                <div className="intro-strip">
                    <div className="container intro-content">
                        <h1 className="intro-title">Branding & Development Made Easy</h1>
                    </div>      
                </div>
                {playAnim?
                    <Lottie
                        className="intro-anim"
                        options={suiAnim}
                        playingState='play'/>
                    : null
                }
            </div>
            

            <div className="container brand-section">
                <h3>Brand Definition / Logo Concept</h3>
                <div className="brand-images">
                    <img id="slogo" src={slogo}/>
                    <img id="sdrafts" src={sdrafts}/>
                    <img id="fonts" src={fonts}/>
                    <img id="colors" src={colors}/>
                </div>
            </div>

            <div className="container">
                <h3>Design Stage</h3>
            </div>

            <div className="design-section">
                <div className="lowfi-wrapper">
                    <img id="lowfis" src={lowfis}></img>
                </div>
                <div className="highfiMac-wrapper">
                    <img id="highfiMac" src={mac}></img>
                    <div className="highfi">

                    </div>
                </div>
            </div>

            <div className="container">
                <h3>Final State</h3>
            </div>

            <div className="finalsite-section">
                
            </div>

        </React.Fragment>
    )
}

export default Sui;