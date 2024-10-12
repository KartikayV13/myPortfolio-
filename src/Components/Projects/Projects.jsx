import React from 'react'
import "./Projects.css"
import LeftScreen from "./LeftScreen"
import RightScreen from './RightScreen'

const Projects = () => {
  return (
   <section id="projects" className='section_project'>
        <h1>Kartikay varun</h1>
        <br />
        <h5>All</h5>
        <h2 className='projects_head'>--Projects--</h2>
  
  <div className="container project_contaniner">

  <div className="projects">
  <div className="left_list">
    <LeftScreen/>
  </div>
  <div className="right_list">
    <RightScreen/>
  </div>
</div>
  </div>

   </section>
  )
}

export default Projects