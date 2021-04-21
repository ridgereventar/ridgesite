import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/projects/Pepi.css';

import Nav from '../components/Nav';

import pepiTech from '../images/projects/pepi/pepitech.png';
import pepiWet from '../images/projects/pepi/pepiwet.png';
import pepiSpace from '../images/projects/pepi/pepispace.png';

import og1 from '../images/projects/pepi/og1.png';
import og2 from '../images/projects/pepi/og2.png';
import base from '../images/projects/pepi/base.png';
import identity from '../images/projects/pepi/identity.png';
import complete from '../images/projects/pepi/complete.png';
import styleguide from '../images/projects/pepi/pepistyle.png';

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
                    <h1>Rebranding Project</h1>
                    <img src={og1}/>
                    <img src={og2}/>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1>1. Creating the avatar base</h1>
                    <img src={base}/>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1>2. Adding avatar identity</h1>
                    <img src={identity}/>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1>3. Finalizing logo</h1>
                    <img src={complete}/>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1>4. Style Guide & Branding</h1>
                </div>
                <div>
                    <div className="container">
                        <img src={pepiTech}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <img src={pepiWet}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <img src={pepiSpace}></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div className="container">
                    <img src={styleguide}></img>
                </div>
            </section>


        </React.Fragment>
    )
}

export default Pepi;