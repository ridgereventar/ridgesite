import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/Nextgen.css';

import Nav from '../components/Nav';

import nextgenLogo from '../images/projects/nextgen/nextgenLogo.png';
import booklet from '../images/projects/nextgen/booklet.png';

const Nextgen = () => {
    return (
        <React.Fragment>
            <Nav defaultNav={true}/>

            <section>
                <div className="container proj-hero">
                    <img id="suiHeroTitle" src={nextgenLogo}></img>
                    {/* <p>A school seeking to lead the next generation of barbers towards success.</p> */}
                </div>
            </section>

            <section>
                <div className="container breakdown">
                    <div className="breakdown-split-1">
                        <h2>Deliverables</h2>
                        <p>Responsive Website <br/> Brand Identity</p>
                
                        <h2>Roles</h2>
                        <p>UI / UX Design <br/> Develop <br/> Maintenance </p>                        
                    </div>
                    
                    <div className="breakdown-split-2">
                        <h2>Goals</h2>
                        <p>Creating a tool to assist the early stages of both design and development. When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. The goal of SUi is to allow users to easily generate their own custom style guides and UI components through one seamless interface. The style guide provides brand consistency and quality while the generated UI components become the building blocks to any website.</p>
                    </div>
                </div>
            </section>

            <section className="proj-intro-section">
                    <div className="proj-intro-bg black-bg"/>
                    <div className="container proj-intro">
                        
                        <h2>A school seeking to lead the next generation of barbers towards success.</h2>
                        <img id="nextgenBooklet" src={booklet}/>          
                    </div>
            </section>

        </React.Fragment>
    )
}

export default Nextgen;