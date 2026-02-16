import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/food.avif';
import projectImg2 from '../assets/lms.avif';
import projectImg4 from '../assets/portfolio.avif';
import projectImg5 from '../assets/task.webp';
import projectImg6 from '../assets/omgclone.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML5', 'CSS3', 'JavaScript(ES6+)', 'TypeScript', 'React.js', 'Next.js']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Vercel', 'Netlify', 'Render']
  }
];



export const projects = [
   {
    title: "Omegle-clone",
    description: "Developed an Omegle-style anonymous video calling app with WebSockets, real-time matchmaking, and live video streaming integration.",
    image: projectImg6,
    tech: ["Next.js","TypeScript", "Socket.io" , "ZegoCloud","Tailwind CSS","Framer-Motion"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://incognito-seven-omega.vercel.app/",
    code: "https://github.com/Aarzoomohd/omegle-clone",
  },
   {
    title: "Task management",
    description: "A task management system helps users plan, assign, track, and complete tasks efficiently while monitoring progress and deadlines in one place.",
    image: projectImg5,
    tech: ["React.js","Javascript(ES6+)", "TailwindCSS", "Context-api","local storage"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://task-management74.netlify.app/",
    code: "https://github.com/Aarzoomohd/task-management",
  },
  {
    title: "Food-website",
    description: "A responsive food ordering website that lets users browse menus, search items, and order food online seamlessly.",
    image: projectImg1,
    tech: ["React.js","Javascript(ES6+)", "TailwindCSS", "Redux-toolkit", "Context-api"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://foodwebsitean.netlify.app/",
    code: "https://github.com/Aarzoomohd/foodwebsite",
  },
  {
    title: "LMS-Learn website",
    description: "LMS-Learn is a web-based learning management system that allows users to create, manage, and track online courses in one platform.",
    image: projectImg2,
    tech: ["React.js","Javascript(ES6+)", "Node.js", "Tailwind CSS","Redux-toolkit","Context-api", "Expree.js","Shadcn-UI","JWT-authentication","MONGODB","Cloudinary","Paypal"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://lms-learn-1-nmof.onrender.com/",
    code: "https://github.com/Aarzoomohd/Lms-learn",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React.js","Javascript(ES6+)", "Tailwind CSS", "Framer Motion","EmailJS"],
    icons: [FaReact, FaCloud],
    demo: "https://anportfolio7.netlify.app/",
    code: "https://github.com/Aarzoomohd/Portfolio",
  },
];


