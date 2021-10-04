import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'James Waters | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '', // Hi, My name is
  name: 'James Waters',
  subtitle: "I'm a self taught developer. Welcome to my website",
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'James_Waters_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CS50.png',
    title: 'CS50 Finance',
    info: 'A fully functional web application for users to “buy” and “sell” stocks. Built using the micro web framework Flask.Utilized the relational database management system SQlite to create databases to store user information. Wrote SQL queries to update user accounts when stocks were bought or sold.',
    info2: '',
    url: 'https://github.com/Waters1993/CS50_Finance',
    repo: 'https://github.com/Waters1993/CS50_Finance', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'alien.JPG',
    title: 'Alien Invasion',
    info: 'A replica of the classic arcade game of the same name. Written in Python3 using the Pygame library. This project uses an object-oriented design approach to create each game asset as a class within individual modules ',
    info2: '',
    url: 'https://youtu.be/8SUCngv5eeU',
    repo: 'https://github.com/Waters1993/Alien_Invasion', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'web.JPG',
    title: 'This website',
    info: "This web app is competely static and simply served through a CDN. It is based on the JAMstack architecture. For the frontend, I am using Gatsby.js, a blazing-fast static-site generator based on React.js. The site is built and deployed on Netlify, an all-in-one platform for automating web projects. Form management and all other backend functionality is powered through Netlify's extremely generous free tier.",
    info2: '',
    url: 'www.james-waters.com',
    repo: 'https://github.com/Waters1993/Personal-Website', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'jwaters1993@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/james-waters-224b1ba3/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Waters1993',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
