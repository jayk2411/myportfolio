//MainROuter.jsx, JAYKUMAR KAKADIYA, 301430863, and 28/01/2024.
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Service from './src/service'
import Project from './src/project'
import Layout from './components/layout'
const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
<Route exact path="/" element={<Home />} />
<Route exact path="/home" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/service" element={<Service />} />
<Route exact path="/project" element={<Project />} />
<Route exact path="/contact" element={<Contact />} />
 
 </Routes>
 </div>
 )
}
export default MainRouter

