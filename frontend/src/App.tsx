import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Projects from './pages/Projects'
import MyProject from './pages/MyProject'
import Preview from './pages/Preview'
import Community from './pages/Community'
import View from './pages/View'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/projects/:projectId' element={<Projects/>}/>
      <Route path='/projects' element={<MyProject/>}/>
      <Route path='/preview/:projectId' element={<Preview/>}/>
      <Route path='/preview/:projectId/:versionId' element={<Preview/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/view' element={<View/>}/>
    </Routes>
    </>
  )
}

export default App