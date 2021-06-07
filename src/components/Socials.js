import React from 'react'

import '../styles/styles.css';

function Socials() {
    return (
        <div className="socials">
            <a id="mail" className="social-icon" href="mailto:ridge.reventar@gmail.com"> 
                <span>&#160;</span>
            </a>
            {/* <div id="ig" className="social-icon"></div> */}
            <a id="linked" className="social-icon" href="https://www.linkedin.com/in/ridge-reventar-76a12a214/" target="_blank" rel="noreferrer">
                <span>&#160;</span>
            </a>
            <a id="git" className="social-icon" href="https://github.com/ridgereventar" target="_blank" rel="noreferrer">
                <span>&#160;</span>
            </a>
        </div>
    )
}

export default Socials