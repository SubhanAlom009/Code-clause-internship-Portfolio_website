import p1img1 from '../assets/projects/project 1/img1.png'
import p1img2 from '../assets/projects/project 1/img2.png'
import p1img3 from '../assets/projects/project 1/img3.png'

import p2img1 from '../assets/projects/project 2/img1.png'
import p2img2 from '../assets/projects/project 2/img2.png'
import p2img3 from '../assets/projects/project 2/img3.png'

import p3img1 from '../assets/projects/project 3/img1.png'
import p3img2 from '../assets/projects/project 3/img2.png'
import p3img3 from '../assets/projects/project 3/img3.png'

import p4img1 from '../assets/projects/project 4/img1.png'
import p4img2 from '../assets/projects/project 4/img2.png'
import p4img3 from '../assets/projects/project 4/img3.png'

import p5img1 from '../assets/projects/project 5/img1.png'
import p5img2 from '../assets/projects/project 5/img2.png'
import p5img3 from '../assets/projects/project 5/img3.png'

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { PiFramerLogoFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";


export const hoverMsg = [
  'Looking for a passionate developer? You have found one!',
  'Did you know? I taught myself to code before entering university!',
  'Ready to bring creativity and innovation to your team!',
  'Thinking about hiring me? I noticed you hovering!',
  'whats on your mind? u hovered over me!',
  "Hovering over me? Let's chat about your thoughts!",
  "Try clicking on me! I'm sure you'll find what you're looking for!",
]

export const projects = [
    {
      title: 'Tech Trove',
      description: 'Welcome to TechTrove, your one-stop shop for the latest and greatest in tech products',
      image: [p1img1, p1img2, p1img3],
      liveLink: 'https://tech-trove-2.vercel.app',
      codeLink: 'https://github.com/SubhanAlom009/e-commerce-website_internship_project',
      techStack: [      
        { icon: FaReact, color: '#61DAFB' },
        { icon: SiTailwindcss, color: '#38B2AC' },
        { icon: IoLogoNodejs, color: '#3C873A' }]
    },
    {
      title: 'Edusity',
      description: 'Welcome to Edusity, your premier destination for online learning.',
      image: [p2img1, p2img2, p2img3],
      liveLink: '/',
      codeLink: 'https://github.com/SubhanAlom009/A-modern-website',
      techStack: [      
        { icon: FaReact, color: '#61DAFB' },
        { icon: SiTailwindcss, color: '#38B2AC' },]
    },
    {
      title: 'VirtualR',
      description: 'This is a brief description of Project One.',
      image: [p3img1, p3img2, p3img3],
      liveLink: '/',
      codeLink: 'https://github.com/SubhanAlom009/VirtualR',
      techStack: [      
        { icon: FaReact, color: '#61DAFB' },
        { icon: SiTailwindcss, color: '#38B2AC' },]
    },
    {
      title: 'Memory Game',
      description: 'A fun and challenging game designed to test and improve your memory skills. ',
      image: [p4img1, p4img2, p4img3],
      liveLink: '/',
      codeLink: 'https://github.com/SubhanAlom009/memory-game-js/tree/main',
      techStack: [
        { icon: SiTailwindcss, color: '#38B2AC' },
        { icon: IoLogoJavascript, color: '#F7DF1E' }]
    },
    {
        title: 'Portfolio Website',
        description: 'I invite you to dive into my portfolio and discover the passion and creativity that drive my craft',
        image: [p5img1, p5img2, p5img3],
        liveLink: '/',
        codeLink: 'https://github.com/SubhanAlom009/Portfolio_Website_React_frame_motion',
        techStack: [      
        { icon: FaReact, color: '#61DAFB' },
        { icon: SiTailwindcss, color: '#38B2AC' },
        { icon: PiFramerLogoFill, color: '#000000' }]
      },
  ]
