import React, {useState, useEffect} from 'react';

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import Phone from '../components/Phone';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import maryrevsLogo from '../images/projects/maryrevs/maryrevslogo.png';
import maryrevsIcon from '../images/projects/maryrevs/maryrevsIcon.png';
import breakdown from '../images/projects/maryrevs/mrbreakdown.png';

import maryrevsBg from '../images/projects/maryrevs/maryrevsbg5.jpg';

import palette from '../images/projects/maryrevs/maryrevspalette.png';
import styleguide from '../images/projects/maryrevs/maryrevsstyle.png';

import ig1 from '../images/projects/maryrevs/ig1.png';
import ig2 from '../images/projects/maryrevs/ig2.png';
import hometohome from '../images/projects/maryrevs/hometohome.png';

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

            <div className="banner" style={{backgroundImage: `url("${maryrevsBg}")`}}>
                <div className="white-gradient"></div>
                <div className="container banner-intro">
                    <img id="hometohome" src={hometohome}/>
                </div>
            </div>

            <div className="container logo-breakdown">
                <img id="maryrevsIcon" src={maryrevsIcon}></img>
                <img id="maryrevsBreakdown" src={breakdown}></img>
            </div>

            <div className="grey-bg">
                <div className="container styleguide-container">
                    <img src={palette}></img>
                    <img src={styleguide}></img>
                </div>
            </div>

            <div className="container">
                <h2>Deliverables</h2>
                <span className="light-header light-list">Animation  &nbsp;&nbsp; | &nbsp;&nbsp; Instagram  &nbsp;&nbsp; | &nbsp;&nbsp; Business Cards</span>
            </div>


            <div className="pink-bg">
                <div className="container">
                    <Phone 
                        right={true}
                        shell={phone}
                        slide={sushi}/>                    
                    <Phone 
                        right={false}
                        shell={phone}
                        slide={mango}/>
                    <div className="ig-post-container">
                        <img id="maryrevsIg2" src={ig2}></img>
                        <img id="maryrevsIg1" src={ig1}></img>
                    </div>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </React.Fragment>
    )
}
 
export default Maryrevs;