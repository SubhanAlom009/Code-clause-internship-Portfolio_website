import React from 'react'
import {projects} from '../../constants/constants.js'
import ImageSlider from '../../ImageSlider/ImageSlider.jsx'
import { motion } from 'framer-motion'

function Projects() {

  
  return ( 
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className='mt-24 sm:mx-32'>
      <div className='flex flex-col justify-between my-32'>
        <h1 className='text-4xl font-semibold'>Projects</h1>
        <a href="#" target='_blank' ><p className='text-lg font-bold mt-4 text-[#2A9192]'>Go to <span className='underline underline-offset-4 text-[#3dc5c8]'>Github</span></p></a>
      </div>
      <div className='w-full border-t-[1px] border-slate-400'></div>
      <div>
          {
            projects.map((project,index)=>(
              <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              key={index} 
              className='flex flex-col items-center my-16 sm:items-start sm:justify-between sm:flex-row'>
                <div className='sm:w-1/2 sm:h-1/2 bg-[#d9f4ff] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-xl'>
                    <ImageSlider images={project.image} autoSlideInterval={5000}/>
                </div>
                <div className='flex flex-col items-center justify-center mt-4 sm:items-start sm:mt-0 sm:w-1/3'>
                    <h1 className='text-3xl font-semibold'>{project.title}</h1>
                    <p className='font-light text-center sm:text-start sm:text-lg'>{project.description}</p> 
                    <a href={project.liveLink} target='_blank' rel='noopener noreferrer'><p className='text-lg font-bold mt-4 text-[#2A9192]'>View Project</p></a>
                    <a href={project.codeLink} target='_blank' rel='noopener noreferrer'><p className='text-lg font-bold mt-4 text-[#2A9192]'>View Github</p></a>
                    <div className='flex gap-6 mt-6'>
                      {
                        project.techStack.map(({ icon: TechIcon, color }, i) => (
                          <TechIcon key={i} style={{ color, fontSize: '2rem' }} />
                        ))
                      }
                    </div>
                </div>
              </motion.div>
            ))
          }
      </div>
    </motion.div>
  )
}

export default Projects
