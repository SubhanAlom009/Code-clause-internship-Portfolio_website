import { Outlet } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from "react";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [isPc, setIsPc] = useState(false);

  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    const checkDevice = () => {
      setIsPc(window.innerWidth > 1024);
    };
    checkDevice();

    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return (
    <>
      {isPc && (
        <AnimatedCursor 
          innerSize={20}
          outerSize={8}
          color='128, 216, 218'
          outerAlpha={0.2}
          innerScale={0.7}
          outerStyle={{
            border: '2px solid #80D8DA',
          }}
          outerScale={5}
          innerStyle={{
            transition: 'transform 0.1s ease-out',
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
      )}
      <div className="bg-[#F3F3F3] h-full py-6 px-12 selection:bg-[#80D8DA] selection:text-white">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
