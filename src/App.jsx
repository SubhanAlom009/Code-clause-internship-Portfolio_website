import { Outlet } from "react-router-dom"
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
import AnimatedCursor from 'react-animated-cursor'


function App() {

  return (
    <>
      <div className="bg-[#F3F3F3] h-full py-6 px-12 selection:bg-[#80D8DA] selection:text-white">
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
      ]}/>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
