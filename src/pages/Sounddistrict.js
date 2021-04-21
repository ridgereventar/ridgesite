import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/projects/Sounddistrict.css';

import Nav from '../components/Nav';

import sdLogo from '../images/projects/sd/sdlogo.png';
import sdLogoFull from '../images/projects/sd/sdlogofull.png';
import breakdown from '../images/projects/sd/sdbreakdown.png';
import nl1 from '../images/projects/sd/nlfront.png';
import nl2 from '../images/projects/sd/nlback.png';
import sm1 from '../images/projects/sd/smfront.png';
import sm2 from '../images/projects/sd/smback.png';
import hs1 from '../images/projects/sd/hsfront.png';
import hs2 from '../images/projects/sd/hsback.png';

const Sounddistrict = () => {
    
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
                    <img src={sdLogo}></img>
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
                    <img src={sdLogo}></img>
                    <img src={breakdown}></img>
                </div>
            </section>

            <section>
                <div className="container">
                    <img src={sdLogoFull}></img>
                </div>
            </section>

            <section>
                <div className="container">
                    <div>
                        <div>
                            <h1>No Limit</h1>
                            <p>Creating a tool to assist the early stages of both design and development.  When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. </p>
                        </div>
                        <div>
                            <img src={nl1}></img>
                            <img src={nl2}></img>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Summer Nights</h1>
                            <p>Creating a tool to assist the early stages of both design and development.  When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. </p>
                        </div>
                        <div>
                            <img src={sm1}></img>
                            <img src={sm2}></img>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Halloween Sound</h1>
                            <p>Creating a tool to assist the early stages of both design and development.  When beginning a new project one of the best ways to establish a solid foundation for consistency down the road is through the use of a style guide. </p>
                        </div>
                        <div>
                            <img src={hs1}></img>
                            <img src={hs2}></img>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Sounddistrict;