import React, {useEffect} from 'react';
import Lottie from 'lottie-web-react';
import { Fade } from "react-reveal";

import '../styles/styles.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import {fullAnim, fullAnimCenter} from '../helpers/anims';
import Socials from '../components/Socials';


const Contact = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <>
            <Nav defaultNav={true}/>

            <div className="contact-container">
                {/* <div className="hero-slant"/> */}
                <div className="container contact-content">
                    <div>
                        <Fade left>
                            <h1>Get in touch</h1>
                            <Socials dark={true}/>
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