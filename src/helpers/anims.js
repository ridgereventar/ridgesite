import pepiJson from '../svgs/designanimFinal.json';
import lowfiJson from '../svgs/devanimFinal.json';
import desJson from '../svgs/designIcon.json';
import devJson from '../svgs/devIcon.json';
import motionJson from '../svgs/motionIcon.json';

import suiJson from '../svgs/suiAnim4.json';
import suiJson2 from '../svgs/suianim.json';

import burgerFJson from '../svgs/burgerFdark.json';
import burgerBJson from '../svgs/burgerBdark.json';

export const pepiAnim = {
    renderer: 'svg',
    loop: false,
    autoplay: true, 
    animationData: pepiJson
}

export const lowfiAnim = {
    renderer: 'svg',
    loop: false, 
    autoplay: true,
    animationData: lowfiJson
}

export const desAnim = {
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: desJson
}

export const devAnim = {
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: devJson
}

export const motionAnim = {
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: motionJson
}

export const suiAnim = {
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: suiJson2
}

export const burgerF = {
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: burgerFJson
}

export const burgerB = {
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: burgerBJson
}
