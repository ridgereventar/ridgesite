import React, {useEffect} from 'react';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import '../styles/styles.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import {fullAnim, fullAnimCenter} from '../helpers/anims';


const Contact = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <>
            <Nav defaultNav={false}/>

            <div className="contact-container">
                <div className="container contact-content">
                    <div>
                        <Fade left>
                            <h1>Get in touch</h1>
                            <div className="socials">
                                <div id="mail" className="social-icon"></div>
                                <div id="ig" className="social-icon"></div>
                                <div id="linked" className="social-icon"></div>
                                <div id="git" className="social-icon"></div>
                            </div>
                        </Fade>
                    </div>
                    <Lottie
                        className="full-anim"
                        options={fullAnim}
                        playingState='play'/>
                    <Lottie
                        className="full-anim-center"
                        options={fullAnimCenter}
                        playingState='play'/>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Contact;