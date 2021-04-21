import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom"; 

import '../styles/ProjectIcon.css';

const ProjectIcon = (props) => { 
    
    const {small} = props;
    const {id, title, color, bgcolor, icon, iconhover} = props.proj;

    const [hover, setHover] = useState(false);

    return (

        <NavLink to={`/${id}`}>
            <div 
                className={small? "projicon-container-small" : "projicon-container"}
                style={hover? {backgroundColor: bgcolor} : {backgroundColor: "white"}}
                onMouseEnter={() => {setHover(true)}}
                onMouseLeave={() => {setHover(false)}}>
                    <img className="icon" src={hover? iconhover : icon}></img>
                    
                    {!small? 
                        <div className="projicon-title" style={{color: color}}>
                            {title}
                        </div>
                        : null
                    }
            </div>
        </NavLink>
        
    )
}

export default ProjectIcon;