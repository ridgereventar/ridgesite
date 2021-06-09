import React, {useEffect} from 'react'

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProjectSection from '../components/ProjectSection';

function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <div>
            <Nav defaultNav={true}/>
            <ProjectSection/>
            <Footer/>
        </div>
    )
}

export default Projects
