import React from 'react';
import handleViewport from 'react-in-viewport';
import {Fade} from 'react-reveal';

import '../styles/Viewport.css';

const TechContext = (props) => {

    const {fullWidth, forwardedRef} = props;

    return (
        <div className={`container ${fullWidth? 'full-width' : 'tech-container'}`}>
            <div className="tech-trigger" ref={forwardedRef}/>
            <Fade>
                <h1>{props.title}</h1>
                <p>{props.par}</p>
            </Fade>
        </div>
    )
}

const Tech = handleViewport(TechContext);
export default Tech;

