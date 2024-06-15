import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";

function SmoothScroll({ page }) {
  const [scrollCount, setScrollCount] = useState(0);
  const maxScroll = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollCount((prev) => prev + 1);

      if (
        scrollCount > maxScroll &&
        page
         &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        setTimeout(() => {
          navigate(`/${page}`);
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollCount, page, navigate]);

  return (
    <div className='flex flex-col items-center justify-center h-full mt-32'>
      <h1 className='font-mono'>Keep Scrolling to visit {page}</h1>
      <div><MdKeyboardArrowDown /></div>
    </div>
  );
}

export default SmoothScroll;
