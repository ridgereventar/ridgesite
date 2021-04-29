import React, {useState, useEffect} from 'react';

import '../styles/projects/projects.css';

const Phone = (props) => {

    const {right, shell, slide} = props

    const leftValues = ["-605px", "-293px", "19px"]
    const leftValuesResp = ["-173%", "-84%", "5.5%"]


    return (
        <div className="phone-container" style={right? {justifyContent: 'flex-end'} : {justifyContent : 'flex-start'}}>
            <img className="phone-shell" src={shell}></img>
            <img className={`ig-slide ${right? "ig-slide-right" : "ig-slide-left"}`} src={slide}></img>
        </div>
        
    )
}

export default Phone;