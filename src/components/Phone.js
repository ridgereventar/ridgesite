import React, {useState, useEffect} from 'react';

import '../styles/projects/projects.css';

import phone from '../images/projects/maryrevs/maryrevsphone.png';
import sushi from '../images/projects/maryrevs/sushilines.png';

const Phone = (props) => {

    const {right} = props

    const leftValues = ["-605px", "-293px", "19px"]
    const leftValuesResp = ["-173%", "-84%", "5.5%"]


    return (
        <div className="phone-container" style={right? {justifyContent: 'flex-end'} : {justifyContent : 'flex-start'}}>
            <img className="phone-shell" src={phone}></img>
            <img className={`ig-slide ${right? "ig-slide-right" : "ig-slide-left"}`} src={sushi}></img>
        </div>
        
    )
}

export default Phone;