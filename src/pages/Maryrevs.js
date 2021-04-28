import React, {useState, useEffect} from 'react';

// import '../styles/Project.css';
// import '../styles/projects/Maryrevs.css';

import '../styles/projects/projects.css';


import Nav from '../components/Nav';

import maryrevsLogo from '../images/projects/maryrevs/maryrevslogo.png';
import maryrevsIcon from '../images/projects/maryrevs/maryrevsIcon.png';
import breakdown from '../images/projects/maryrevs/mrbreakdown.png';
import maryrevsBg from '../images/projects/maryrevs/maryrevssushi.jpg';
import styleguide from '../images/projects/maryrevs/maryrevsstyle2.png';
import ig1 from '../images/projects/maryrevs/ig1.png';
import ig2 from '../images/projects/maryrevs/ig2.png';

const Maryrevs = () => {
    
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     window.onbeforeunload = function () {
    //         window.scrollTo(0, 0);
    //     }
    // }, [])

    return (
        <React.Fragment>
            <Nav defaultNav={true}/>

            <div className="container proj-hero">
                <img src={maryrevsLogo}></img>
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

            <div className="logo-section" style={{backgroundImage: `url("${maryrevsBg}")`}}>
                <div className="container maryrevs-intro">
                    <h1>Home to Home Favourites</h1>
                </div>
            </div>

            <div className="proj-section-header">
                <div className="container">
                    <h2 className="img-header">Logo Design</h2>
                </div>
            </div>


            <div className="container">
                <p className="light-header">Breakdown & Brand Guide</p>
                <div className="logo-split">
                    <img id="maryrevsIcon" src={maryrevsIcon}></img>
                    <img id="maryrevsBreakdown" src={breakdown}></img>
                </div>
            </div>

            <div className="grey-bg">
                <div className="container">
                    <img src={styleguide}></img>
                </div>
            </div>

            <section className="pink-bg">
                <div className="container">
                    <div className="mobile-anim">

                    </div>
                    <div className="mobile-anim">

                    </div>
                    <div className="ig-post-container">
                        <img id="maryrevsIg1" src={ig1}></img>
                        <img id="maryrevsIg2" src={ig2}></img>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Maryrevs;