import React, {useState, useEffect} from 'react';

import '../styles/ProjectIcon.css';

import {PROJECTS} from '../helpers/constants';

const ProjectIcon = (props) => { 
    
    const [bgcolor, setBgcolor] = useState("white");
    const [icon, setIcon] = useState(props.proj.icon)
    
    const styles = {
        backgroundColor: bgcolor,
        color: props.proj.color
    }

    return (

        <React.Fragment>
            {props.small? 

            <div 
                className="projicon-container-small"
                style={styles}
                onMouseEnter={() => {setBgcolor(props.proj.bgcolor); setIcon(props.proj.iconhover)}}
                onMouseLeave={() => {setBgcolor("white"); setIcon(props.proj.icon)}}>
                    <img className="icon" src={icon}/>
            </div>

            :
            <div 
                className="projicon-container"
                style={styles}
                onMouseEnter={() => {setBgcolor(props.proj.bgcolor); setIcon(props.proj.iconhover)}}
                onMouseLeave={() => {setBgcolor("white"); setIcon(props.proj.icon)}}>
                    
                    <img className="icon" src={icon}/>

                    <div className="projicon-title">
                        {props.proj.title}
                    </div>

            </div>
            }
        </React.Fragment>


        

    )
}

export default ProjectIcon;