import React from 'react';

import '../styles/ProjectIcon.css';

import ProjectIcon from '../components/ProjectIcon';
import {PROJECTS} from '../helpers/constants';

const ProjectGrid = (props) => { 

    return (
        <div className="container project-grid">
            {PROJECTS.map((proj, index) => {
                return (
                    <ProjectIcon
                        key={index}
                        small={false}
                        proj={proj}/>
                );
            })}
        </div>
    )
}

export default ProjectGrid;