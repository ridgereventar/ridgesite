import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/projects/Pepi.css';

import Nav from '../components/Nav';

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

const Pepi = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     window.onbeforeunload = function () {
    //         window.scrollTo(0, 0);
    //     }
    // }, [])

    return (
        <React.Fragment>
            <Nav defaultNav={true}/>

            <section>
                <div className="container proj-hero">
                    <img src={pepiTech}></img>
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
                    <h1 className="img-header">Rebranding Project</h1>
                </div>
            </section>

            <section className="border-line img-section">
                <div className="container">
                    <span className="light-header">Original Logo</span>
                    <div className="split-img-container">
                        <img src={og1}/>
                        <img src={og2}/>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1 className="img-header">Design Process</h1>
                </div>
            </section>

            <section className="border-line">
                <div className="container img-container">
                    <span className="light-header">Creating the avatar</span>
                    <img src={avatar}/>
                    <span className="light-header">Finalizing Logo</span>
                    <div className="triple-split">
                        <img id="pepiTech" src={pepiTech}></img>
                        <img id="pepiWet" src={pepiWet}></img>
                        <img id="pepiSpace" src={pepiSpace}></img>
                    </div>
                    <span className="light-header">Branding</span>
                    {/* <img id="pepiStyle" src={styleguide}></img> */}
                </div>
            </section>

            <section className="grey-bg">
                <div>
                    <div className="container suit-branding-wrapper">
                        <img className="suit" src={techsuit}></img>
                        <div>
                            <h1>The Techsuit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <img className="hexColor mobile-hex" src={blue}></img>
                        </div>
                        <img className="hexColor desktop-hex" src={blue}></img>
                    </div>
                </div>
                <div>
                    <div className="container suit-branding-wrapper">
                        <img className="suit" src={wetsuit}></img>
                        <div>
                            <h1>The Wetsuit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <img className="hexColor mobile-hex" src={yellow}></img>
                        </div>
                        <img className="hexColor desktop-hex" src={yellow}></img>
                    </div>
                </div>
                <div>
                    <div className="container suit-branding-wrapper">
                        <img className="suit" src={spacesuit}></img>
                        <div>
                            <h1>The Spacesuit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <img className="hexColor mobile-hex" src={purple}></img>
                        </div>
                        <img className="hexColor desktop-hex" src={purple}></img>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Pepi;