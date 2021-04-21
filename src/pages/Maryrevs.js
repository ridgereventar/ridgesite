import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/projects/Maryrevs.css';

import Nav from '../components/Nav';

import maryrevsLogo from '../images/projects/maryrevs/maryrevslogo.png';
import maryrevsIcon from '../images/projects/maryrevs/logoicon.png';
import breakdown from '../images/projects/maryrevs/mrbreakdown.png';
import styleguide from '../images/projects/maryrevs/maryrevsstyle.png';
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

            <section>
                <div className="container proj-hero">
                    <img src={maryrevsLogo}></img>
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
                    <img src={maryrevsIcon}></img>
                    <img src={breakdown}></img>
                </div>
            </section>

            <section>
                <div className="container">
                    <img src={styleguide}></img>
                </div>
            </section>

            <section>
                <div className="container">
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>
                        <img src={ig1}></img>
                        <img src={ig2}></img>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Maryrevs;