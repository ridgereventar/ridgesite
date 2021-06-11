import React, {useEffect} from 'react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

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

import pepiBanner from '../images/projects/pepi/pepibg3.jpg';


const Pepi = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <>
            <Nav defaultNav={true}/>

            <div className="container proj-hero">
                <Fade>
                    <img src={pepiTech} alt=""/>
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p> Logo Redesign <br/> Brand Identity </p>
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>
                        The goal for this project was to create a foundation in which the three sub-brands could co-exist under the umbrella of Pepi’s Universe. 
                        This consists of three separate social media outlets and YouTube channels based around different content categories. 
                        The challenge was to provide each with their own distinct look while being unified under the same general branding/format. 
                        This was accomplished through a base avatar being styled in three different ways with unique colour schemes. 
                    </p>
                </div>
            </div>

            <div className="banner pepi-banner" style={{backgroundImage: `url("${pepiBanner}")`}}>
            </div>

            <div className="proj-section-header">
                <div className="container">
                    <Fade>
                       <h2>Rebranding Project</h2>
                    </Fade>
                </div>
            </div>

            <div className="container">
                <Fade>
                    <p className="light-header">Original Logo</p>
                    <div className="img-split">
                        <img src={og1} alt=""/>
                        <img src={og2} alt=""/>
                    </div>
                </Fade>
            </div>

            <div className="container">
                <Fade>
                    <p className="light-header">Design Process</p>
                    <img id="pepiBreakdown" src={avatar} alt=""/>
                    <div className="pepi-img-split">
                        <img src={pepiTech} alt=""/>
                        <img src={pepiWet} alt=""/>
                        <img id="pepiSpace" src={pepiSpace} alt=""/>
                    </div>                
                </Fade>
            </div>

            <div className="grey-bg pepi-grey-section">
                <div className="container pepi-brand-container">
                    <Fade left>
                        <img className="suit" src={techsuit} alt=""/>
                    </Fade>
                    <div>
                        <Fade>
                            <h2>The Techsuit</h2>
                            <p>The Tech Channel. From everyday tech videos to product overviews and reviews, Pepi gears up in his techsuit to provide quality content of the most recent products in the industry. </p>
                            <img className="hexColor mobile-hex" src={blue} alt=""/>
                        </Fade>
                    </div>
                    <Fade right>
                        <img className="hexColor desktop-hex" src={blue} alt=""/>
                    </Fade>
                </div>
                <div className="container pepi-brand-container">
                    <Fade left>
                        <img className="suit" src={wetsuit} alt=""/>
                    </Fade>
                    <div>
                        <Fade>
                            <h2>The Wetsuit</h2>
                            <p>The Lifestyle Channel. Join as Pepi puts on his wetsuit and enjoys life. This brand shares lifestyle content, and features the different journeys of the creator. </p>
                            <img className="hexColor mobile-hex" src={yellow} alt=""/>
                        </Fade>
                    </div>
                    <Fade right>
                        <img className="hexColor desktop-hex" src={yellow} alt=""/>
                    </Fade>
                </div>
                <div className="container pepi-brand-container">
                    <Fade left>
                        <img className="suit" src={spacesuit} alt=""/>
                    </Fade>
                    <div>
                        <Fade>
                            <h2>The Spacesuit</h2>
                            <p>The Entertainment Channel. Pepi throws on his new suit to explore a larger space showing off his creative side. From short films to entertaining videos this channel promotes nothing but good vibes.  </p>
                            <img className="hexColor mobile-hex" src={purple} alt=""/>
                        </Fade>
                    </div>
                    <Fade right>
                        <img className="hexColor desktop-hex" src={purple} alt=""/>
                    </Fade>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </>
    )
}

export default Pepi;