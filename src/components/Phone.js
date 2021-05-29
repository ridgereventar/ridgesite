import React, {useState} from 'react';
import Trigger from '../components/Trigger';

import '../styles/projects/projects.css';

const Phone = (props) => {

    const {right, shell, slide} = props
    const [animate, setAnimate] = useState(false);

    return (
        <>
            <div className="phone-container" style={right? {justifyContent: 'flex-end'} : {justifyContent : 'flex-start'}}>
                <div className={`phone-wrapper ${right? "phone-wrapper-right" : "phone-wrapper-left"}`}>
                    <img className="phone-shell" src={shell} alt=""></img>
                    <img 
                        className={
                            `
                            ig-slide 
                            ${right? "ig-slide-right" : "ig-slide-left"}
                            ${(animate && right)? "animate-right" : ""}
                            ${(animate && !right)? "animate-left" : ""}
                            `
                        } 
                        src={slide}
                        alt=""/>
                </div>
            </div>
            <Trigger onEnterViewport={() => setAnimate(true)}/>
        </>
        
    )
}

export default Phone;