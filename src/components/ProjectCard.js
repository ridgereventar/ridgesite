import React from 'react'
import {NavLink} from "react-router-dom"; 

import '../styles/styles.css';

import arrow from '../images/projectcards/arrow.png';

const ProjectCard = ({proj}) => {

    return (
        <div className="projectcard-wrapper" style={proj.squarecard? {width: "45%"} : {width: "100%"}}>
                
            <NavLink to={`/${proj.id}`}>
                <div className="projectcard-container" style={{backgroundColor: proj.cardcolor}}>
                        <div className="projectcard-bg" style={{backgroundImage: `url(${proj.cardbg})`}}></div>
                        {proj.content? 
                            <div className={`projectcard-content-container ${!proj.right? "content-order" : ""}`}>
                                <img id={`${proj.idTag}C`} src={proj.content} alt=""></img> 
                            </div> 
                            : null
                        }
                        <div className="projectcard-mockup-container" style={{width: proj.mwidth}}>
                            <img id={`${proj.idTag}M`} src={proj.mockup} alt=""></img>
                        </div>
                </div>
                <div className="projectcard-title-container">
                    <img id={`${proj.idTag}T`} className="card-title" src={proj.cardtitle} alt=""></img>
                    <img className="card-arrow" src={arrow} alt=""></img>
                </div>
            </NavLink>

        </div>
    )
}

export default ProjectCard
