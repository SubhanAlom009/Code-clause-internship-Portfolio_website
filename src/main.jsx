import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Resume from './components/resume/Resume.jsx'
import Projects from './components/projects/Projects.jsx'
import HireMe from './components/HireMe/HireMe.jsx'
import { AnimatePresence } from 'framer-motion'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/hireme' element={<HireMe />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence mode='wait'>
    <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
)
