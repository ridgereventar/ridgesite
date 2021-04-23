import React, {useState, useEffect} from 'react';
import {Fade} from 'react-reveal';

import '../styles/TechScroll.css';

import Tech from '../components/Tech.js';

const TechScroll = (props) => {
    
    const {imgs, blobs} = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollingDown, setScrollingDown] = useState(true);

    var prevScrollpos = window.pageYOffset;

    const updownListener = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setScrollingDown(false);
        } else {
            setScrollingDown(true);
        }
        prevScrollpos = currentScrollPos;
    }

    useEffect(() => {
        window.addEventListener("scroll", updownListener);
        return () => {window.removeEventListener("scroll", updownListener)}
    }, []);


    const switchTech = (index) => {
        if(scrollingDown) {
            if(index < imgs.length - 1) {
                setCurrentIndex(++index);
            }
        } else {
            if(index > 0)
            setCurrentIndex(--index);
        }
    }


    return (
        <section className="dev-section">
            <div className="screen-wrapper">
                <div className="screen">
                    <div className="screen-content">
                        <img src={imgs[currentIndex]}/>
                    </div>
                </div>
            </div>
            <div className="tech-blob-wrapper">
                {blobs.map((tech, index) => {
                    return (
                        <Tech 
                        onLeaveViewport={() => switchTech(index)}
                        title={tech.title}
                        par={tech.par}></Tech>
                    )
                })}
            </div>
        </section>
    )
}

export default TechScroll;
