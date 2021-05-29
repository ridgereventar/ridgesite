import React, {useEffect} from 'react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import Phone from '../components/Phone';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import maryrevsLogo from '../images/projects/maryrevs/maryrevslogo.png';
import maryrevsIcon from '../images/projects/maryrevs/maryrevsIcon.png';
import breakdown from '../images/projects/maryrevs/mrbreakdown.png';

import maryrevsBg from '../images/projects/maryrevs/maryrevsbg5.jpg';
import hometohome from '../images/projects/maryrevs/hometohome.png';

import palette from '../images/projects/maryrevs/maryrevspalette.png';
import styleguide from '../images/projects/maryrevs/maryrevsstyle.png';

import ig1 from '../images/projects/maryrevs/ig1.png';
import ig2 from '../images/projects/maryrevs/ig2.png';
import phone from '../images/projects/maryrevs/maryrevsphone.png';
import sushi from '../images/projects/maryrevs/sushilines.png';
import mango from '../images/projects/maryrevs/mango.png';

const Maryrevs = () => {
    
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
                    <img src={maryrevsLogo} alt=""/>
                </Fade>
            </div>

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p>Logo Design <br/> Brand Identity <br/>  Business Card / Flyers </p>
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>
                        Creating a unified logo and brand that appropriately represents the home to home feel of this small business. 
                        The goal was to create a light, simple, and unique design for the logo icon that incorporates an ‘M’ for the owners name and utensils to symbolize the meals.
                    </p>
                </div>
            </div>

            <div className="banner" style={{backgroundImage: `url("${maryrevsBg}")`}}>
                <div className="white-gradient"></div>
                <div className="container banner-intro">
                    <Fade>
                        <img id="hometohome" src={hometohome} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="container logo-breakdown">
                <Fade bottom>
                    <img id="maryrevsIcon" src={maryrevsIcon} alt=""/>
                    <img id="maryrevsBreakdown" src={breakdown} alt=""/>
                </Fade>
            </div>

            <div className="grey-bg">
                <div className="container styleguide-container">
                    <Fade>
                        <img src={palette} alt=""/>
                        <img src={styleguide} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="container">
                <h2>Deliverables</h2>
                <span className="light-header light-list">Animation  &nbsp;&nbsp; | &nbsp;&nbsp; Instagram  &nbsp;&nbsp; | &nbsp;&nbsp; Business Cards</span>
            </div>


            <div className="pink-bg">
                <div className="container">
                    <Fade>
                        <Phone 
                            right={true}
                            shell={phone}
                            slide={sushi}/>                    
                        <Phone 
                            right={false}
                            shell={phone}
                            slide={mango}/>
                        <div className="ig-post-container">
                            <img id="maryrevsIg2" src={ig2} alt=""/>
                            <img id="maryrevsIg1" src={ig1} alt=""/>
                        </div>
                    </Fade>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </React.Fragment>
    )
}
 
export default Maryrevs;