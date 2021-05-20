import sui from '../images/icons/1-1.png';
import suiColor from '../images/iconscolor/1-1c.png';

import uni from '../images/icons/1-2.png';
import uniColor from '../images/iconscolor/1-2c.png';

import next from '../images/icons/1-3.png';
import nextColor from '../images/iconscolor/1-3c.png';

import rev from '../images/icons/1-4.png';

import pepi from '../images/icons/2-1.png';
import pepiColor from '../images/iconscolor/2-1c.png';

import mary from '../images/icons/2-2.png';
import maryColor from '../images/iconscolor/2-2c.png';

import sound from '../images/icons/2-3.png';
import soundColor from '../images/iconscolor/2-3c.png';

import nil from '../images/icons/2-4.png';
import nilColor from '../images/iconscolor/2-4c.png';

import jv from '../images/icons/3-1.png';
import jvColor from '../images/iconscolor/3-1c.png';

import cg from '../images/icons/3-2.png';

import evo from '../images/icons/3-3.png';
import evoColor from '../images/iconscolor/3-3c.png';

import denz from '../images/icons/3-4.png';
import denzColor from '../images/iconscolor/3-4c.png';

import jazelbites from '../images/icons/jazelbitesicon.png';
import jazelbitesColor from '../images/iconscolor/jazelbitescolor.png';


// TECH images

import landing from '../images/projects/sui/landing.png';
import mern from '../images/projects/sui/mern.png';
import hooks from '../images/projects/sui/hooks.png';
import animation from '../images/projects/sui/animation.png';
import npm from '../images/projects/sui/npm.png';



export const PROJECTS = [
    {
        id: 'sui',
        title: "SUI",
        color: "white",
        bgcolor: "#222121",
        icon: sui,
        iconhover: suiColor
    },
    {
        id: 'nextgen',
        title: "NextGen Edu.",
        color: "white",
        bgcolor: "#DE5C5C",
        icon: next,
        iconhover: nextColor
    },
    {
        id: 'pepi',
        title: "Pepi's Techsuit",
        color: "black",
        bgcolor: "#F5D1FF",
        icon: pepi,
        iconhover: pepiColor
    },
    {
        id: 'maryrevs',
        title: "Mary Revs",
        color: "white",
        bgcolor: "#FF99D2",
        icon: mary,
        iconhover: maryColor
    },
    {
        id: 'jazelbites',
        title: "Jazel Bites",
        color: "white",
        bgcolor: "#FF5D5D",
        icon: jazelbites,
        iconhover: jazelbitesColor
    },
    {
        id: 'sounddistrict',
        title: "Sound District",
        color: "white",
        bgcolor: "#222121",
        icon: sound,
        iconhover: soundColor
    },
    {
        id: 'jv',
        title: "JV The Barber",
        color: "white",
        bgcolor: "black",
        icon: jv,
        iconhover: jvColor
    },
    {
        id: 'cg',
        title: "Christopher Gonzales",
        color: "black",
        bgcolor: "#EEEEEE",
        icon: cg,
        iconhover: cg
    }
]

// {
//     id: 'uni',
//     title: "UniCity Film Club",
//     color: "white",
//     bgcolor: "black",
//     icon: uni,
//     iconhover: uniColor
// },

// {
//     id: 'rev',
//     title: "Reventar Group",
//     color: "white",
//     bgcolor: "#309DF5",
//     icon: rev,
//     iconhover: rev
// },

// {
//     id: 'nildas',
//     title: "Nilda's Bakery",
//     color: "white",
//     bgcolor: "#FA6666",
//     icon: nil,
//     iconhover: nilColor
// },

// {
//     id: 'evo',
//     title: "Toronto Evo Nation",
//     color: "white",
//     bgcolor: "#3D3D3D",
//     icon: evo,
//     iconhover: evoColor
// },

// {
//     id: 'denz',
//     title: "Barber Denz",
//     color: "black",
//     bgcolor: "#FAF7F1",
//     icon: denz,
//     iconhover: denzColor
// }

export const TECH_BLOBS = [
    {
        title: "Development Technologies",
        par: "",
        img: landing
    },

    {
        title: "MERN Stack",
        par: "The full stack application involves all the technologies of MongoDB, Express, React, and Node. This 3 tier architecture allowed me to structure a database, server, and front-end. MongoDB contained storage for all the users, their public/private style guide projects, and image files while express (running inside a Node.js server) handled the models for URL routing and handling HTTP requests and responses to allow our react front end to communicate with the backend.",
        img: mern 
    },
    {
        title: "React Hooks and Contexts",
        par: "Using a context to manage the logged in user and their projects, I was able to pass the appropriate data to the different react components to form a fully interactive interface. On top of this I also practiced utilizing react hooks and managing states within functional components. ",
        img: hooks
    },
    {
        title: "Animations",
        par: "After importing vector designs and creating animations within Adobe After Effects, I experimented with a plugin called bodymovin to export the animation as a json file which then could be used in web through the library ‘Lottie’.",
        img: animation
    },
    {
        title: "Npm Package",
        par: "To allow users to export their theme and apply it to their own UI components I created an npm package. First step was to transform the theme made on the application to a downloadable json document using a library called ‘Blob’. I then used a rollup wrapper called ‘micro-bundle’ to create my react component library which is distributed through a private npm registry from GitHub. Users can then download the package to obtain the default components and simply link their json file to transform them into their own defined colours and fonts.",
        img: npm
    } 
]

export const NEXTGEN_TECH_BLOBS = [
    {
        title: "Responsive Development",
        par: "The website features full responsiveness down to the pixel and the main scrollable container adapts to the window size. Modern practices for testing each components responsiveness was implemented resulting in smooth transitions between devices. ",
    },
    {
        title: "Simple Register System ",
        par: "Rather than using a backend for tracking interested customers, the site includes a simple register system involving email newsletter sign up. This allows the business owners to store their clients emails and distribute any updates simultaneously. ",
    },
    {
        title: "Deployment with Netlify",
        par: "This service allowed for fast and easy deployments allowing us to track website traffic and apply updates when needed.",
    }
]