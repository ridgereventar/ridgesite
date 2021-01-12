import React from 'react';
import Lottie from 'lottie-web-react';

import '../styles/Anim.css';

const Lowfi = (props) => {
    const animOptions = {
        renderer: 'svg',
        loop: false, 
        autoplay: true,
        animationData: require('../images/devanim.json')
    }

    return (
        <Lottie
            className="dev-anim"
            options={animOptions}
            playingState='play'/>
    )
}

export default Lowfi;



