import React from 'react'
import { Fade } from "react-reveal";

import '../styles/styles.css';

import ProjectCard from '../components/ProjectCard';
import {PROJECTS} from '../helpers/constants';

function ProjectSection() {
    return (
        <div className="container projects-container">
            <Fade>
                <h1 className="section-title">PROJECTS</h1>

                <ProjectCard
                    proj={PROJECTS[0]}/>

                <ProjectCard
                    proj={PROJECTS[1]}/>
                
                <ProjectCard
                    proj={PROJECTS[2]}/>

                <div className="projects-split-row">
                        <ProjectCard
                            proj={PROJECTS[3]}/>

                        <ProjectCard
                            proj={PROJECTS[4]}/>
                </div>

                <ProjectCard
                    proj={PROJECTS[5]}/>

                <ProjectCard
                    proj={PROJECTS[6]}/>

                <div className="projects-split-row">
                    <ProjectCard
                        proj={PROJECTS[7]}/>

                    <ProjectCard
                        proj={PROJECTS[8]}/>
                </div>
            </Fade>
        </div>
    )
}

export default ProjectSection
