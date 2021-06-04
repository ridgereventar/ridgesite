import React from 'react'

import '../styles/styles.css';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

import {PROJECTS} from '../helpers/constants';

function Projects() {
    return (
        <div>
            <Nav defaultNav={true}/>
            <div className="container projects-container">

                <h1>Projects</h1>

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
            </div>
            <Footer/>
        </div>
    )
}

export default Projects
