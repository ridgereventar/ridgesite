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
        id: 'uni',
        title: "UniCity Film Club",
        color: "white",
        bgcolor: "black",
        icon: uni,
        iconhover: uniColor
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
        id: 'rev',
        title: "Reventar Group",
        color: "white",
        bgcolor: "#309DF5",
        icon: rev,
        iconhover: rev
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
        id: 'mary',
        title: "Mary Revs",
        color: "white",
        bgcolor: "#FF99D2",
        icon: mary,
        iconhover: maryColor
    },
    {
        id: 'sound',
        title: "Sound District",
        color: "white",
        bgcolor: "#222121",
        icon: sound,
        iconhover: soundColor
    },
    {
        id: 'nildas',
        title: "Nilda's Bakery",
        color: "white",
        bgcolor: "#FA6666",
        icon: nil,
        iconhover: nilColor
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
    },
    {
        id: 'evo',
        title: "Toronto Evo Nation",
        color: "white",
        bgcolor: "#3D3D3D",
        icon: evo,
        iconhover: evoColor
    },
    {
        id: 'denz',
        title: "Barber Denz",
        color: "black",
        bgcolor: "#FAF7F1",
        icon: denz,
        iconhover: denzColor
    }
]

export const TECH_BLOBS = [
    {
        title: "Development Technologies",
        par: ""
    },
    {
        title: "React Hooks & Contexts",
        par: "This is when a huge portion of the work was devoted to learning React hooks and contexts. The idea behind this, is that all components wrapped by a context provider can consume its values. Therefore by wrapping my application in a Theme Context, I was able to retrieve and manipulate its object values with any component. React Hooks is a fairly new concept that allows functional components to maintain its own state. Originally, components must be a class to have a state, but with react hooks, my functional components were able to utilize state variables and consume the theme context." 
    },
    {
        title: "Animations",
        par: "For example, to create this animation, I took the time to experiment with adobe after effects. To do this, I used a plugin called AEUX to transfer my sketch vectors into after effects. From there I animated each individual vector. Once the animation was complete, I used a plugin called bodymovin to export the animation as a json file so that it can be rendered as an svg through a library called lottie-web-react."
    },
    {
        title: "Image Files in MongoDB",
        par: "This was accomplished by first using mongoose to create a new connection to the database, then gridfs-stream to link to a new collection called “uploads”. Next a storage engine was made using multer-gridfs-storage. This allowed me to define what information was being stored and where to store it. Next a library called Multer was used to handle the storage of the file. Finally I used express to handle the post request using a multer file instance."
    },
    {
        title: "Npm Package",
        par: "The goal was to allow users to export their theme and bring the custom UI components into their own projects. To do this I first used a library called Blob to transform the theme object into a downloadable json document. The next step of creating my npm package took a fair amount of research however I discovered a rollup wrapper called micro-bundle to create a my react component library. This wrapper acted as a template that allowed me to create my custom components and have the code distributed through a private npm registry from GitHub. With this registry, anyone is able to download my package using ‘npm install @ridgereventar/sui’ to obtain the default components. Then by linking the theme object inside the json file, the components will automatically link to the defined colours and fonts."
    } 
]