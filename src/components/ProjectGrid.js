import React, {useState, useEffect} from 'react';
import { Fade } from "react-reveal";

import '../styles/ProjectIcon.css';

import ProjectIcon from '../components/ProjectIcon';
import {PROJECTS} from '../helpers/constants';

const ProjectGrid = (props) => { 

    return (
        <div className="container project-grid">
            {PROJECTS.map((proj, index) => {
                return (
                    <Fade>
                        <ProjectIcon
                            small={false}
                            key={index}
                            proj={proj}/>
                    </Fade>
                );
            })}
        </div>
    )
}

export default ProjectGrid;