import React, {useEffect} from 'react';
import { Fade } from "react-reveal";

import '../styles/projects/projects.css';

import Nav from '../components/Nav';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

import jvLogo from '../images/projects/jv/jvlogo.png';
import breakdown from '../images/projects/jv/jvbreakdown.png';
import bc1 from '../images/projects/jv/jvbc1.png';
import bc2 from '../images/projects/jv/jvbc2.png';

import jvbanner from '../images/projects/jv/jvbanner.jpg';
import jvintro from '../images/projects/jv/jvintro.png';


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

            <div className="container proj-hero">
                <Fade>
                    <img src={jvLogo} alt=""/>
                </Fade>
            </div>
        

            <div className="container breakdown">
                <div className="breakdown-1">
                    <h2>Deliverables</h2>
                    <p>Logo Design <br/> Personal Brand Identity <br/> Merchandise</p>
                </div>
                <div className="breakdown-2">
                    <h2>Goals</h2>
                    <p>
                        Creating a modern logo to promote and represent the personal brand of a Toronto barber. 
                        Main goal was to blend the initials ‘JV’ with a distinct symbol that showcases the barber aspect of the brand. 
                    </p>
                </div>
            </div>

            <div className="banner" style={{backgroundImage: `url("${jvbanner}")`}}>
                <div className="black-gradient"></div>
                <div className="container banner-intro">
                    <Fade>
                        <img id="jvIntro" src={jvintro} alt=""/>
                    </Fade>
                </div>
            </div>

            <div className="container logo-breakdown">
                <Fade bottom>
                    <img id="jvLogo" src={jvLogo} alt=""/>
                    <img id="jvBreakdown" src={breakdown} alt=""/>
                </Fade>
            </div>

            <div className="container">
                <h2>Deliverables</h2>
                <span className="light-header light-list">Logo Design  &nbsp;&nbsp; | &nbsp;&nbsp; Business Card  &nbsp;&nbsp; | &nbsp;&nbsp; Merchendise</span>
            </div>

            <div className="grey-bg">
                <div className="container half-split">
                    <Fade>
                        <img src={bc1} alt=""/>
                        <img src={bc2} alt=""/>
                    </Fade>
                </div>
            </div>

            <ProjectGrid/>

            <Footer/>

        </React.Fragment>
    )
}

export default Jv;