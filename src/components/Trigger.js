import React from 'react';
import handleViewport from 'react-in-viewport';

import '../styles/Viewport.css';

const TriggerComp = (props) => {
    
    const {forwardedRef} = props;

    return (
        <div className="trigger" ref={forwardedRef}>
        </div>
    )
}

const Trigger = handleViewport(TriggerComp);
export default Trigger;

