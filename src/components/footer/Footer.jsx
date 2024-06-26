import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  const [isCopied, setIsCopied] = useState(false)


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 2000)
    }).catch((error) => {
      console.error('Failed to copy text: ', error)
    })
  }

  const handleCopy = (text) => {
    return ()=> {
      copyToClipboard(text)
    }
    
  }

  return (
    <div className='mt-24 border-t sm:px-12 border-slate-400'>
        <div className='flex flex-col justify-between mt-4 mb-10 sm:flex-row'>
          <div>
            <h1 className='text-lg font-bold'>Email</h1>
            <Link to={''} title='click to copy' ><p onClick={handleCopy('')} className='py-2 transition-all duration-200 rounded-md hover:text-[#2A9192]'>Your Email</p></Link>
            <p className={`fixed bottom-52 ${isCopied ? 'block transition-all duration-200' : 'hidden'}  left-[45%] px-2 py-4 font-mono text-center text-slate-500 bg-[#80D8DA] bg-opacity-50 rounded-lg`}>copied</p>
          </div>
          <div>
            <h1 className='text-lg font-bold'>Github</h1>
            <Link to={''} title='click to visit' target="_blank"><p className='py-2 transition-all duration-200 rounded-md hover:text-[#2A9192]'>Your Github Link</p></Link>
          </div>
          <div>
            <h1 className='text-lg font-bold'>LinkedIn</h1>
            <Link to={''}  target="_blank" title='click to visit'><p className='py-2 transition-all duration-200 rounded-md hover:text-[#2A9192]'>Your LinkedIn Link</p></Link>
          </div>
          <div>
            <h1 className='text-lg font-bold'>Phone No.</h1>
            <Link to={'tel:'} title='click to call'><p className='py-2 transition-all duration-200 rounded-md hover:text-[#2A9192]'>Your Phone No.</p></Link>
          </div>
        </div>
        <div className='flex flex-col items-center text-sm font-light'>
            <h1><span>&#169;</span> 2024 Subhan Alom</h1>
            <p>All rights reserved</p>
            <p>Created by <i className='font-medium'>Subhan Alom!!</i></p>
          </div>
    </div>
  )
}

export default Footer
