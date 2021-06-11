import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";
import { NavLink } from 'react-router-dom';

import '../styles/styles.css';

// components 
import Nav from '../components/Nav';
import Trigger from '../components/Trigger';
import Footer from '../components/Footer';
import ProjectSection from '../components/ProjectSection';

// anims
import {lowfiAnim, desAnim, devAnim, motionAnim} from '../helpers/anims';

// images
import heromockup from '../images/heromockup2.png';

const Home = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    const [playBgAnim, setPlayBgAnim] = useState(false);
    const [playDesIcon, setPlayDesIcon] = useState(false);
    const [playDevIcon, setPlayDevIcon] = useState(false);
    const [playMotIcon, setPlayMotIcon] = useState(false);

    const playIcons = () => {
        setPlayDesIcon(true);
        setTimeout(() => {setPlayDevIcon(true);}, 500);
        setTimeout(() => {setPlayMotIcon(true);}, 1000);
    }

    return (
        <>
            <Nav defaultNav={true}/>

            <div className="hero2">
                <div className="hero-slant"/>

                <div className="container hero-content">
                    <Fade left>
                        <div className="hero-intro">
                            <h1>RIDGE REVENTAR</h1>
                            <p>Front-End Developer & Designer</p>
                                <button className="site-btn">                                        
                                    <NavLink to="/projects">
                                        View my work
                                    </NavLink>
                                </button> 
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="hero-mockup2">
                            <img src={heromockup} alt=""></img>
                        </div>
                    </Fade>

                    {playBgAnim?
                        <Lottie
                            className="dev-anim2"
                            options={lowfiAnim}
                            playingState='play'/>
                    : null}
                </div>
            </div>
            <Trigger onEnterViewport={() => setPlayBgAnim(true)}/>

            <div className="container intro2">
                <Fade>
                    <h1 className="section-title">QUALITY & GROWTH</h1>
                    <p>
                        Through 7 years experience of free lance design I expanded my passion into web development. 
                        From front-end sites to full stack applications, I utilize my design experience and technology capabilities to bring visions to life.
                        I continue to expand my skills and grow my toolset to ensure my applications meet the current requirements of high level development. 
                    </p>
                </Fade>
            </div>

            <div className="container tools-section">
                <div className="tool-category">
                    {playDesIcon? 
                    <>
                        <div className="tool-icon-wrapper"> 
                                <Lottie
                                    className="tool-icon"
                                    options={desAnim}
                                    playingState='play'/> 
                        </div>
                        <Fade bottom>
                            <div>
                                <h2>DESIGN</h2>
                                <p className="tools-stacked">Sketch <br/> Figma <br/> Illustrator</p>
                                <p className="tools-inline">Sketch, Figma, Illustrator</p>                                
                            </div>
                        </Fade>
                    </>
                    :null}
                </div>

                <div className="tool-category">
                    {playDevIcon?
                    <>
                        <div className="tool-icon-wrapper"> 
                                <Lottie
                                    className="tool-icon"
                                    options={devAnim}
                                    playingState='play'/>
                        </div>
                        <Fade bottom>
                            <div>
                                <h2>DEVELOPMENT</h2>
                                <p className="tools-stacked">JavaScript <br/> HTML / CSS <br/> React <br/> Node.js <br/> Express <br/> MongoDB</p>
                                <p className="tools-inline">JavaScript, HTML / CSS, React, Node.js, Express, MongoDB</p>
                            </div>
                        </Fade>
                    </>
                    : null }
                </div>

                <div className="tool-category">
                    {playMotIcon?
                    <>
                        <div className="tool-icon-wrapper"> 
                                <Lottie
                                    className="tool-icon"
                                    options={motionAnim}
                                    playingState='play'/>
                        </div>
                        <Fade bottom>
                            <div>
                                <h2>MOTION</h2>
                                <p className="tools-stacked">After Effects <br/> Bodymovin <br/> AEUX</p>
                                <p className="tools-inline">After Effects, Bodymovin, AEUX</p>
                            </div>
                        </Fade>
                    </>
                    : null}
                </div>
            </div>  
            <Trigger onEnterViewport={() => playIcons()}/>
            <ProjectSection/>
            <Footer/>
        </>
    )
}

export default Home;