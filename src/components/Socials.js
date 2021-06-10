import React from 'react'

import '../styles/styles.css';

const Socials = ({dark}) => {
    return (
        <div className="socials">
            <a id="mail" className={`social-icon ${dark? "dark-icon" : ""}`} href="mailto:ridge.reventar@gmail.com"> 
                <span>&#160;</span>
            </a>
            {/* <div id="ig" className="social-icon"></div> */}
            <a id="linked" className={`social-icon ${dark? "dark-icon" : ""}`} href="https://www.linkedin.com/in/ridgereventar/" target="_blank" rel="noreferrer">
                <span>&#160;</span>
            </a>
            <a id="git" className={`social-icon ${dark? "dark-icon" : ""}`} href="https://github.com/ridgereventar" target="_blank" rel="noreferrer">
                <span>&#160;</span>
            </a>
        </div>
    )
}

export default Socials
