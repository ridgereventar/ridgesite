import sui from '../images/icons/1-1.png';
import suiColor from '../images/iconscolor/1-1c.png';

import next from '../images/icons/ngicon.png';

import pepi from '../images/icons/2-1.png';
import pepiColor from '../images/iconscolor/2-1c.png';

import mary from '../images/icons/2-2.png';
import maryColor from '../images/iconscolor/2-2c.png';

import sound from '../images/icons/2-3.png';
import soundColor from '../images/iconscolor/2-3c.png';

import jv from '../images/icons/3-1.png';
import jvColor from '../images/iconscolor/3-1c.png';

import cg from '../images/icons/cgIcon.png';

import jazelbites from '../images/icons/jazelbitesicon.png';
import jazelbitesColor from '../images/iconscolor/jazelbitescolor.png';

import amazonclone from '../images/icons/amazonIcon.png';
import amazoncloneColor from '../images/iconscolor/amazonIconC.png';

// import nil from '../images/icons/2-4.png';
// import nilColor from '../images/iconscolor/2-4c.png';
// import evo from '../images/icons/3-3.png';
// import evoColor from '../images/iconscolor/3-3c.png';
// import denz from '../images/icons/3-4.png';
// import denzColor from '../images/iconscolor/3-4c.png';

// PROJECT CARDS

import suiM from '../images/projectcards/sui-mac.png';
import ngM from '../images/projectcards/nextgen-tab.png';
import amazonM from '../images/projectcards/amazon-tab.png';
import pepiM from '../images/projectcards/pepi-m.png';
import maryM from '../images/projectcards/maryrevs-phone.png';
import jazelM from '../images/projectcards/jazelbites-phone.png';
import sdM from '../images/projectcards/sd-flyer.png';
import jvM from '../images/projectcards/jv-bc.png';
import cgM from '../images/projectcards/cg-bc.png';

import suiC from '../images/projectcards/sui-c.png';
import ngC from '../images/projectcards/ng-c.png';
import amazonC from '../images/projectcards/amazon-c.png';
import pepiC from '../images/projectcards/pepi-c.png';
import maryC from '../images/projectcards/mary-c.png';
import jazelC from '../images/projectcards/jazel-c.png';
import sdC from '../images/projectcards/sd-c.png';

import suibg from '../images/projectcards/sui-bg3.png';
import ngbg from '../images/projectcards/ng-bg.jpg';
import amazonbg from '../images/projectcards/amazon-bg.png';
import pepibg from '../images/projectcards/pepi-bg.jpg';
import marybg from '../images/projectcards/mary-bg2.png';
import jazelbg from '../images/projectcards/jazelbites-bg.png';
import sdbg from '../images/projectcards/sd-bg.jpg';
import jvbg from '../images/projectcards/jv-bg.jpg';
import cgbg from '../images/projectcards/cg-bg.jpg';

import suiT from '../images/projectcards/sui-t.png';
import ngT from '../images/projectcards/ng-t.png';
import amazonT from '../images/projectcards/amazon-t.png';
import pepiT from '../images/projectcards/pepi-t.png';
import maryT from '../images/projectcards/mary-t.png';
import jazelT from '../images/projectcards/jazel-t.png';
import sdT from '../images/projectcards/sd-t.png';
import jvT from '../images/projectcards/jv-t.png';
import cgT from '../images/projectcards/cg-t.png';


// TECH images

import landing from '../images/projects/sui/landing.png';
import mern from '../images/projects/sui/mern.png';
import hooks from '../images/projects/sui/hooks.png';
import animation from '../images/projects/sui/animation.png';
import npm from '../images/projects/sui/npm.png';


export const PROJECTS = [
    {
        id: 'sui',
        idTag: 'sui',
        title: "SUI",
        color: "white",
        bgcolor: "#222121",
        icon: sui,
        iconhover: suiColor,
        cardcolor: "#B0E2F5",
        mockup: suiM,
        mwidth: "60%",
        right: true,
        content: suiC,
        cardbg: suibg,
        cardtitle: suiT
    },
    {
        id: 'nextgen',
        idTag: 'ng',
        title: "NextGen Edu.",
        color: "black",
        bgcolor: "#EEEEEE",
        icon: next,
        iconhover: next,
        cardcolor: "#A8A8A8",
        mockup: ngM,
        mwidth: "43%",
        content: ngC,
        cardbg: ngbg,
        cardtitle: ngT
    },
    {
        id: 'amazonclone',
        idTag: 'amazon',
        title: 'Amazon Clone',
        color: "black",
        bgcolor: "#E5BA78",
        icon: amazonclone,
        iconhover: amazoncloneColor,
        cardcolor: "#677B90",
        mockup: amazonM,
        mwidth: "57%",
        right: true,
        content: amazonC,
        cardbg: amazonbg,
        cardtitle: amazonT

    },
    {
        id: 'pepi',
        idTag: 'pepi',
        title: "Pepi's Techsuit",
        color: "black",
        bgcolor: "#F5D1FF",
        icon: pepi,
        iconhover: pepiColor,
        cardcolor: "#CBF2F7",
        squarecard: true,
        mockup: pepiM,
        content: pepiC,
        cardbg: pepibg,
        cardtitle: pepiT
    },
    {
        id: 'maryrevs',
        idTag: 'mary',
        title: "Mary Revs",
        color: "white",
        bgcolor: "#FF99D2",
        icon: mary,
        iconhover: maryColor,
        cardcolor: "#FFD6ED",
        squarecard: true,
        mockup: maryM,
        mwidth: "50%",
        right: true,
        content: maryC,
        cardbg: marybg,
        cardtitle: maryT
    },
    {
        id: 'jazelbites',
        idTag: 'jazel',
        title: "Jazel Bites",
        color: "white",
        bgcolor: "#FF5D5D",
        icon: jazelbites,
        iconhover: jazelbitesColor,
        cardcolor: "#FFBEBE",
        mockup: jazelM,
        mwidth: "55%",
        content: jazelC,
        cardbg: jazelbg,
        cardtitle: jazelT
    },
    {
        id: 'sounddistrict',
        idTag: 'sd',
        title: "Sound District",
        color: "white",
        bgcolor: "#222121",
        icon: sound,
        iconhover: soundColor,
        cardcolor: "#9F9F9F",
        mockup: sdM,
        mwidth: "48%",
        right: true,
        content: sdC,
        cardbg: sdbg,
        cardtitle: sdT
    },
    {
        id: 'jv',
        idTag: 'jv',
        title: "JV The Barber",
        color: "white",
        bgcolor: "black",
        icon: jv,
        iconhover: jvColor,
        cardcolor: "#F4F4F4",
        squarecard: true,
        mockup: jvM,
        mwidth: "80%",
        cardbg: jvbg,
        cardtitle: jvT
    },
    {
        id: 'cg',
        idTag: 'cg',
        title: "Christopher Gonzales",
        color: "black",
        bgcolor: "#EEEEEE",
        icon: cg,
        iconhover: cg,
        cardcolor: "#F4F4F4",
        squarecard: true,
        mockup: cgM,
        mwidth: "80%",
        cardbg: cgbg,
        cardtitle: cgT
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
        par: "The full stack application involves all the technologies of MongoDB, Express, React, and Node. This 3 tier architecture allowed me to structure a database, server, and front-end. MongoDB contained storage for all the users and their public/private projects while Express handled URL routing and HTTP requests.",
        img: mern 
    },
    {
        title: "React Hooks and Contexts",
        par: "Using a context to manage the logged in user and their projects, I was able to pass the appropriate data to the different react components to form a fully interactive interface. On top of this I also practiced utilizing react hooks and managing states within functional components. ",
        img: hooks
    },
    {
        title: "Animations",
        par: "After importing vector designs and creating animations within Adobe After Effects, I used a plugin called bodymovin to export the animation as a json file which is rendered through the library ‘Lottie’.",
        img: animation
    },
    {
        title: "Npm Package",
        par: "To allow users to export their theme and apply it to their own UI components, I created an npm package. First step was to transform the theme made on the application to a downloadable json document using a library called ‘Blob’. Next, I used a rollup wrapper called ‘micro-bundle’ to create my react component library. Finally, users can download the package to obtain the default components and link their json file to transform them into their own defined colours and fonts.",
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
        par: "Rather than using a back-end for tracking interested customers, the site includes a simple register system involving email newsletter sign up. This allows the business owners to store their clients' emails and distribute any updates simultaneously. ",
    },
    {
        title: "Deployment with Netlify",
        par: "This service allowed for fast and easy deployments allowing us to track website traffic and apply updates when needed.",
    }
]

export const AMAZON_TECH_BLOBS = [
    {
        title: "Context API",
        par: "By wrapping the application in a context provider with an assigned initial state and reducer, I am able to track the current user's basket and push/pull data from any component. ",
    },
    {
        title: "Firebase Authentication",
        par: "Login system was implemented using Firebase Authentication Service allowing tracking of the logged in user. The user’s account is then stored in the context API for their information to be pulled when needed.",
    },
    {
        title: "Payments via Stripe",
        par: "Using libraries stripe-js and react-stripe-js, I was able to link my application to their service and was provided a card element that handles error detection on input. To obtain the client secret for each transaction, I used a Firebase Cloud Function to setup the back-end for the request. ",
    },
    {
        title: "Firebase Cloud Functions",
        par: "First, I setup Express.js to run on the cloud function and linked the stripe test key. After setting up the back-end API (config & middleware), I created my first route which was a post request to retrieve the client secret from Stripe through a payment intent.",
    },
    {
        title: "Finalizing Payment",
        par: "On every basket change, I sent an axios request to retrieve a new client secret. After the card information is entered, I sent the payload to stripe along with the client secret and payment method.",
    },
    {
        title: "Firestore",
        par: "Initializing Firestore allowed me to keep a collection of users and their order history. With this I am able to create new entries and retrieve their orders from a current snapshot of the database collection.",
    },
    {
        title: "Deploying with Firebase ",
        par: "Through the command line I was able to deploy the firebase cloud function and link the new URL to the application. Finally, I deployed the app with firebase hosting and the link was provided.",
    }
]