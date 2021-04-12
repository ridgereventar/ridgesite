import React, {useState, useEffect} from 'react';
import handleViewport from 'react-in-viewport';
import {Fade} from 'react-reveal';

import '../styles/Viewport.css';

const TechContext = (props) => {
    
    const {inViewport, forwardedRef} = props;

    return (
        <div className="container tech-container">
            <div className="tech-trigger" ref={forwardedRef}/>
            <h1>{props.title}</h1>
            <p>{props.par}</p>
        </div>
        // <div className="proj-container tech-section">
        //     <div className="tech-context">
        //         <div className="tech-trigger" ref={forwardedRef}></div>
        //         <h1>{props.title}</h1>
        //         <p className="tech-p">{props.par}</p>
        //     </div>
        // </div>

    )
}

const Tech = handleViewport(TechContext);
export default Tech;

