import React, {useState, useEffect} from 'react';

import '../styles/Project.css';
import '../styles/projects/Jv.css';

import Nav from '../components/Nav';

const Jv = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }, [])

    return (
        <React.Fragment>
            <Nav defaultNav={true}/>
            <h1>Jv</h1>
        </React.Fragment>
    )
}

export default Jv;