

import React from 'react'
import BodyPage from './component/BodyPage'
import { Routes,Route } from 'react-router-dom'
import Home from './component/page/Home'
import Tool from './component/page/Tool'
import Contact from './component/page/Contact'
import About from './component/page/About'





export default function App() {
  return (
    <>
    <Routes>
      
      <Route path='home' element={<Home />}></Route>
      <Route path='tool' element={<Tool />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='about' element={<About />}></Route>
      
    </Routes>
    <BodyPage />
    </>
  )
}
