import React, { useState } from 'react'
import pp from '../../assets/profilePicture/ppupdated.jpg'
import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { hoverMsg } from '../../constants/constants';


function Home() {

  const [hovered,setHovered] = useState(false)

  const randomMsgIndex = Math.floor(Math.random() * hoverMsg.length + 0);

  const colors = [
      '#FF6633', // Pastel orange
      '#FFB399', // Light salmon
      '#FF4D4D', //
      '#E6B3B3', //
      '#00B3E6', // Cerulean blue
      '#E6B333', // Mustard yellow
      '#3366E6', // Dodger blue
      '#999966', // Olive green
      '#4DB380', //
      '#B34D4D', // Light burgundy
  ];

  const randomColorIndex = Math.floor(Math.random() * colors.length + 0);

  const randomColor = colors[randomColorIndex];

  const contentVariants = {
    hidden: { opacity: 0, y:90  },
    visible: { opacity: 1,y:0, transition: { duration: 0.5, delay: 0.2 } }
  };

  const contentVariants2 = {
    hidden: { opacity: 0, y:90  },
    visible: { opacity: 1,y:0, transition: { duration: 0.5, delay: 0.5 } }
  };

  const iconVariants = (duration) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 90 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className='relative flex flex-col items-center justify-center mt-24'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={contentVariants}
        className='flex flex-col items-center justify-center gap-10 mx-auto sm:w-1/2 sm:flex-row content'>
        <div>
            <img className='rounded-full' src={pp} alt="subhan" />
        </div>
        <div className='w-full space-y-4'>
            <div>
              <h1 className='text-4xl font-semibold'>Your Name</h1>
              <p className='text-lg font-medium'>Data science engineer</p>
              <p className='font-light text-md'>Student</p>
            </div>
            <div>
              <p className='text-lg font-semibold'>A bit about me:</p>
              <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ad nobis adipisci delectus reiciendis, unde laborum quis facilis quam eius distinctio architecto, corrupti, esse magni autem magnam illo placeat repellat.</p>
            </div>
        </div>
      </motion.div>
      <div className='mt-24'>
         <p className='text-2xl font-semibold'>My Tech Proficiencies</p>
      </div>
      <motion.ul 
        initial='hidden'
        animate='visible'
        variants={contentVariants2}
        className='flex flex-wrap items-center justify-center gap-5 mt-12'>
        <motion.li 
          variants={iconVariants(2.5)} 
          initial='initial' 
          animate='animate' 
          whileHover={{ backgroundColor: '#61DAFB', color: '#fff' }}
          className='p-4 text-5xl rounded-2xl bg-[#ededed] text-[#61DAFB] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'>
          <FaReact />
        </motion.li>
        <motion.li 
          variants={iconVariants(3)} 
          initial='initial' 
          animate='animate'
          whileHover={{ backgroundColor: '#06B6D4', color: '#fff' }}
          className='p-4 text-5xl rounded-2xl bg-[#ededed] text-[#06B6D4] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'>
          <SiTailwindcss />
        </motion.li>
        <motion.li 
          variants={iconVariants(4)} 
          initial='initial' 
          animate='animate' 
          whileHover={{ backgroundColor: '#339933', color: '#fff' }}
          className='p-4 text-5xl rounded-2xl bg-[#ededed] text-[#339933] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'>
          <IoLogoNodejs />
        </motion.li>
        <motion.li 
          variants={iconVariants(3)} 
          initial='initial' 
          animate='animate' 
          whileHover={{ backgroundColor: '#000000', color: '#fff' }}
          className='p-4 text-5xl rounded-2xl bg-[#ededed] text-[#000000] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'>
          <SiExpress />
        </motion.li>
        <motion.li 
          variants={iconVariants(2.5)} 
          initial='initial' 
          animate='animate' 
          whileHover={{ backgroundColor: '#47A248', color: '#fff' }}
          className='p-4 text-5xl rounded-2xl bg-[#ededed] text-[#47A248] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]'>
          <SiMongodb />
        </motion.li>
      </motion.ul>
      {/* Hire me button */}
      <motion.div 
      animate={{ opacity: 1,scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0,scale: 0 }}
      transition={{ duration: 0.1 }}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      onTouchStart={()=>setHovered(true)}
      onTouchEnd={()=>setHovered(false)}
      onClick={() => window.open('https://www.linkedin.com/in/subhanalom/', '_blank')}
      className="mt-40 sm:mt-0 sm:absolute bottom-0 shadow-[0px_0px_15px_0px_rgba(61,197,200)] left-20 flex items-center justify-center w-32 h-32 px-6 py-3 font-bold text-white rounded-full bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <p>Hire me</p>
      </motion.div>
      {/* Hover message */}
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className={`${!hovered ? 'hidden' : ''} rounded-md shadow-lg bg-white p-2 absolute sm:w-1/5 bottom-40 left-3 text-center font-mono`}>
        <p style={{ color: `${randomColor}` }} className={`font-semibold italic text-lg`}>{hoverMsg[randomMsgIndex]}</p>
      </motion.div>

    </motion.div>
  )
}

export default Home
