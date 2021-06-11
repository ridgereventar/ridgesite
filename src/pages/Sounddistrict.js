import React, {useEffect} from 'react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import sdLogo from '../images/projects/sd/sdlogo.png';
import sdLogoFull from '../images/projects/sd/sdlogofull.png';
import breakdown from '../images/projects/sd/sdbreakdown.png';
import nl1 from '../images/projects/sd/nlfront.png';
import nl2 from '../images/projects/sd/nlback.png';
import sm1 from '../images/projects/sd/smfront.png';
import sm2 from '../images/projects/sd/smback.png';
import hs1 from '../images/projects/sd/hsfront.png';
import hs2 from '../images/projects/sd/hsback.png';

import sdbanner from '../images/projects/sd/sdbanner3.jpg';


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

            <div className="container proj-hero">
                <Fade>
                    <img id="sdLogo" src={sdLogo} alt=""/>
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p>Logo Design <br/> Brand Identity <br/> Promotional Flyers <br/> Social Media Posts</p>
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>
                    Creating an impactful brand to showcase the professionalism behind Sound District’s events and promotions. 
                    The company strives to give local artists a platform and stage to share their art through different social gatherings and events. 
                    he direction for the logo and branding needed to signify Toronto and the music its ready to showcase. 
                    </p>
                </div>
            </div>

            <div className="banner sd-banner" style={{backgroundImage: `url("${sdbanner}")`}}>
                <div className="black-gradient"></div>
                <div className="container banner-intro">
                    <Fade>
                        <img id="hometohome" src={sdLogoFull} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="container logo-breakdown">
                <Fade bottom>
                    <img id="sdIcon" src={sdLogo} alt=""/>
                    <img id="sdBreakdown" src={breakdown} alt=""/>
                </Fade>
            </div>

            <div className="container">
                <h2>Marketing Designs</h2>
                <span className="light-header light-list">Event Promotion  &nbsp;&nbsp; | &nbsp;&nbsp; Posters  &nbsp;&nbsp; | &nbsp;&nbsp; Flyers</span>
            </div>


            <div className="container">
                <div className="event-container">
                    <Fade>
                        <img className="event-poster front-poster" src={nl1} alt=""/>
                        <img className="event-poster" src={nl2} alt=""/>
                    </Fade>
                </div>
                <div className="event-container">
                    <Fade>
                        <img className="event-poster front-poster" src={sm1} alt=""/>
                        <img className="event-poster" src={sm2} alt=""/>
                    </Fade>
                </div>
                <div className="event-container">
                    <Fade>
                        <img className="event-poster front-poster" src={hs1} alt=""/>
                        <img className="event-poster" src={hs2} alt=""/>
                    </Fade>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </React.Fragment>
    )
}

export default Sounddistrict;