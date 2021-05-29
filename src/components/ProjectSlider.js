import React from 'react';

import '../styles/ProjectSlider.css';

import ProjectIcon from '../components/ProjectIcon';
import {PROJECTS} from '../helpers/constants';

import arrowLeft from '../images/scrollleft.png';
import arrowRight from '../images/scrollright.png';

const ProjectSlider = (props) => {
    var scrolling = null;

    const scrollLeft = () => {
        var d = document.getElementById('scroller');
        d.scrollLeft = d.scrollLeft - 5;
        scrolling = window.setTimeout(function() {
            scrollLeft();
        }, 10);
    }

    const scrollRight = () => {
        var d = document.getElementById('scroller');
        d.scrollLeft = d.scrollLeft + 5;
        scrolling = window.setTimeout(function() {
            scrollRight();
        }, 10);
    }

    const stopScroll = () => {
        window.clearTimeout(scrolling);
    }

    const handleArrows = () => {
        var d = document.getElementById('scroller');
        if(d.scrollLeft === 0) {
            document.getElementById("scrollLeft").style.display = "none";
        } else {
            document.getElementById("scrollLeft").style.display = "flex";
        }

        if((d.scrollWidth - d.scrollLeft - d.offsetWidth) === 0) {
            document.getElementById("scrollRight").style.display = "none";
        } else {
            document.getElementById("scrollRight").style.display = "flex";
        }

    }

    return (
        <React.Fragment>

            <div className="container proj-slider-controls">
                <div id="scrollLeft" className="scroll-area" onMouseOver={scrollLeft} onMouseOut={stopScroll}>
                    <img src={arrowLeft} alt=""></img>
                </div>
                <div id="scrollRight" className="scroll-area" onMouseOver={scrollRight} onMouseOut={stopScroll}>
                    <img src={arrowRight} alt=""></img>
                </div>
            </div>

            <div id="scroller" className="container proj-slider-container" onScroll={handleArrows}>
                {PROJECTS.map((proj, index) => {
                    return (
                        <ProjectIcon
                            key={index}
                            small={true}
                            proj={proj}/>
                    );
                })}
            </div>

        </React.Fragment>


    )
}

export default ProjectSlider;

