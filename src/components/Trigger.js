import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import handleViewport from 'react-in-viewport';

import '../styles/Anim.css';

const TriggerComp = (props) => {
    
    const {inViewport, forwardedRef} = props;

    return (
        <div className="trigger" ref={forwardedRef}>
        </div>
    )
}

const Trigger = handleViewport(TriggerComp);
export default Trigger;

