import React, {useState, useEffect} from 'react';
import Trigger from '../components/Trigger';

import '../styles/projects/projects.css';

const Phone = (props) => {

    const {right, shell, slide} = props
    const [animate, setAnimate] = useState(false);

    return (
        <>
            <div className="phone-container" style={right? {justifyContent: 'flex-end'} : {justifyContent : 'flex-start'}}>
                <div className={`phone-wrapper ${right? "phone-wrapper-right" : "phone-wrapper-left"}`}>
                    <img className="phone-shell" src={shell}></img>
                    <img 
                        className={
                            `
                            ig-slide 
                            ${right? "ig-slide-right" : "ig-slide-left"}
                            ${(animate && right)? "animate-right" : ""}
                            ${(animate && !right)? "animate-left" : ""}
                            `
                        } 
                        src={slide}/>
                </div>
            </div>
            <Trigger onEnterViewport={() => setAnimate(true)}/>
        </>
        
    )
}

export default Phone;