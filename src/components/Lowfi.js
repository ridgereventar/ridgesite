import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-web-react';
import handleViewport from 'react-in-viewport';

import '../styles/Anim.css';

const LowfiComp = (props) => {

    const {inViewport, forwardedRef} = props;
    const [playAnim, setplayAnim] = useState(false);

    useEffect(() => {
        if(inViewport) {
            setplayAnim(true);
        }
    });

    const animOptions = {
        renderer: 'svg',
        loop: false, 
        autoplay: true,
        animationData: require('../images/devanimFinal.json')
    }

    return (
        <div className="anim-wrapper" ref={forwardedRef}>
            {playAnim?
                <Lottie
                    options={animOptions}
                    playingState='play'/> 
            : null}
        </div>

    )
}

const Lowfi = handleViewport(LowfiComp);
export default Lowfi;



