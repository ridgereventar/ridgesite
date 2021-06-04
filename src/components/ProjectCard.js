import React, {useState, useHover} from 'react'

import '../styles/styles.css';

import arrow from '../images/projectcards/arrow.png';

const ProjectCard = ({proj}) => {

    const [hovered, setHovered] = useState(false);

    const onHover = () => {
        setHovered(true);
        console.log("hovered");
    }

    const onLeave = () => {
        setHovered(false);
        console.log("leave");
    }
    return (
        <>
            <div 
                className="projectcard-wrapper" 
                style={proj.squarecard? {width: "45%"} : {width: "100%"}} 
                onMouseEnter={onHover}
                onMouseLeave={onLeave}>
                    
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
                    <img id={`${proj.idTag}T`} className="card-title" src={proj.cardtitle}></img>
                    <img className="card-arrow" src={arrow}></img>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
