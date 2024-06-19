import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='mt-24'>
      <div className='my-32 sm:mx-32'>
        <h1 className='text-4xl font-semibold'>Resume</h1>
        <a href="#" target='_blank' rel='noopener noreferrer'>
          <p className='text-lg font-bold mt-4 text-[#2A9192]'>
            Full CV and details can be{' '}
            <span className='text-[#3dc5c8] underline underline-offset-4'>
              downloaded
            </span>{' '}
            here
          </p>
        </a>
      </div>
      <div className='w-full border-t-[1px] border-slate-400'></div>
      <div className='flex flex-col items-center my-32 py-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        {/* Resume */}
        <div className='flex flex-col px-8 space-y-24'>
          {/* Education */}
          <div className='flex flex-col space-y-8'>
            <h1 className='text-4xl font-semibold'>Education</h1>
            {/* First education */}
            <div className='flex flex-col sm:gap-48 sm:justify-between sm:flex-row'>
              <div className='w-2/3'>
                <p>2018 - 2022</p>
              </div>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>Sample University</p>
                <p className='text-sm font-light'>B.Tech in Computer Science</p>
              </div>
            </div>
            {/* Second education */}
            <div className='flex flex-col sm:gap-48 sm:justify-between sm:flex-row'>
              <div className='w-2/3'>
                <p>2016 - 2018</p>
              </div>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>Sample College</p>
                <p className='text-sm font-light'>Higher Secondary</p>
              </div>
            </div>
            {/* Third education */}
            <div className='flex flex-col sm:gap-48 sm:justify-between sm:flex-row'>
              <div className='w-2/3'>
                <p>2023 - 2023</p>
              </div>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>Online Platform</p>
                <p className='text-sm font-light'>
                  Data Structure & Algorithm
                </p>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div className='flex flex-col space-y-8'>
            <h1 className='text-4xl font-semibold'>Experience</h1>
            {/* First Experience */}
            <div className='flex flex-col justify-between gap-4 sm:gap-48 sm:flex-row'>
              <div className='w-2/3'>
                <p>June 2023 - August 2023</p>
                <p>Sample Company</p>
                <p>Remote</p>
              </div>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>Web Development Intern</p>
                <p className='text-sm font-light'>
                  Responsibilities and Achievements:
                </p>
                <ul className='mt-4 list-disc list-inside sm:mt-0'>
                  <li>Developed web applications using React, Node.js, and MongoDB.</li>
                  <li>Assisted in designing and deploying RESTful APIs.</li>
                </ul>
              </div>
            </div>
            
            {/* Second Experience */}
            <div className='flex flex-col justify-between gap-4 sm:gap-48 sm:flex-row'>
              <div className='w-2/3'>
                <p>September 2023 - December 2023</p>
                <p>Another Company</p>
                <p>Remote</p>
              </div>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>Frontend Developer Intern</p>
                <p className='text-sm font-light'>
                  Responsibilities and Achievements:
                </p>
                <ul className='mt-4 list-disc list-inside sm:mt-0'>
                  <li>Developed responsive web applications using React.js and Tailwind CSS.</li>
                  <li>Optimized website performance by enhancing code and resources.</li>
                </ul>
              </div>
            </div>
            
            {/* Third Experience */}
            <div className='flex flex-col justify-between gap-4 sm:gap-48 sm:flex-row'>
              <div className='w-2/3'>
                <p>January 2024 - March 2024</p>
                <p>Another Company</p>
                <p>Remote</p>
              </div>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>Web Development Intern</p>
                <p className='text-sm font-light'>
                  Responsibilities and Achievements:
                </p>
                <ul className='mt-4 list-disc list-inside sm:mt-0'>
                  <li>Developed responsive web applications using React.js, Node.js, and Tailwind CSS.</li>
                  <li>Constructed and maintained RESTful APIs with Node.js and Express.js.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Skills and certificates */}
          <div className='flex flex-col space-y-8'>
            <h1 className='text-4xl font-semibold'>Skills and Certificates</h1>
            {/* Certificate List */}
            <div className='flex flex-col justify-between gap-8 sm:gap-48 sm:flex-row'>
              <div className='w-2/3'>
              <p className='text-lg font-semibold'>Certificates</p>
                <ul className='list-disc list-inside'>
                  <li>Certificate 1</li>
                  <li>Certificate 2</li>
                  <li>Certificate 3</li>
                </ul>
              </div>
              {/* Skills List */}
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>Skills</p>
                <ul className='list-disc list-inside'>
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  <li>Skill 4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
