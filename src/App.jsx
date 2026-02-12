import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import WorkLog from './workLog'
import Projects from './Projects'
import AboutMe from './AboutMe'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/WorkLog' element={<WorkLog/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/AboutMe' element={<AboutMe/>}></Route>
      </Routes>
    </div>
  )
}

export default App
