import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/projects/Jv.css';

import Nav from '../components/Nav';

import jvLogo from '../images/projects/jv/jvlogo.png';
import breakdown from '../images/projects/jv/jvbreakdown.png';
import bc1 from '../images/projects/jv/jvbc1.png';
import bc2 from '../images/projects/jv/jvbc2.png';


const Jv = () => {
    
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
                    <img src={jvLogo}></img>
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
                    <img src={jvLogo}></img>
                    <img src={breakdown}></img>
                </div>
            </section>

            <section>
                <div className="container">
                    <img src={bc1}></img>
                    <img src={bc2}></img>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Jv;