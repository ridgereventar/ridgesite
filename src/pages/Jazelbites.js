import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/projects/Jazelbites.css';

import Nav from '../components/Nav';

const Jazelbites = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <React.Fragment>
            <Nav defaultNav={true}/>
            <h1>Jazelbites</h1>
        </React.Fragment>
    )
}

export default Jazelbites;