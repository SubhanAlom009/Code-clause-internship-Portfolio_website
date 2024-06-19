import img1 from '../assets/projects/img1.jpg'
import img2 from '../assets/projects/img2.jpg'
import img3 from '../assets/projects/img3.jpg'

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
      title: 'project 1',
      description: 'Welcome to TechTrove, your one-stop shop for the latest and greatest in tech products',
      image: [img1, img2, img3],
      liveLink: '/',
      codeLink: '/',
      techStack: [      
        { icon: FaReact, color: '#61DAFB' },
        { icon: SiTailwindcss, color: '#38B2AC' },
        { icon: IoLogoNodejs, color: '#3C873A' }]
    },
    {
      title: 'project 1',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: [img1, img2, img3],
      liveLink: '/',
      codeLink: '/',
      techStack: [      
        { icon: FaReact, color: '#61DAFB' },
        { icon: SiTailwindcss, color: '#38B2AC' },]
    },
    {
      title: 'project 2',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: [img1, img2, img3],
      liveLink: '/',
      codeLink: '/',
      techStack: [      
        { icon: FaReact, color: '#61DAFB' },
        { icon: SiTailwindcss, color: '#38B2AC' },]
    },
    {
      title: 'project 3',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      image: [img1, img2, img3],
      liveLink: '/',
      codeLink: '/',
      techStack: [
        { icon: SiTailwindcss, color: '#38B2AC' },
        { icon: IoLogoJavascript, color: '#F7DF1E' }]
    },
    {
        title: 'project 4',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        image: [img1, img2, img3],
        liveLink: '/',
        codeLink: '/',
        techStack: [      
        { icon: FaReact, color: '#61DAFB' },
        { icon: SiTailwindcss, color: '#38B2AC' },
        { icon: PiFramerLogoFill, color: '#000000' }]
      },
  ]
