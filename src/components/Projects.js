import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import Giftr from './Giftr'
import FactGenerator from './FactGenerator';

const Projects = () => {
  return (
    <div className='Content'>
      <h1 className='headerFont'>My Projects</h1>
      
      <div className='PContent'>
        <div className='PProjectList'>
          <Link className='PurpleBtn' to="Giftr" >Giftr</Link>
          <Link className='PurpleBtn' to="FactGenerator">Fact Generator</Link>
          <Link className='disabledPurpleBtn'>Coming Soon...</Link>
        </div>
        
        <Routes className="PRightSideContent">
            <Route path='/' element={<Giftr/>} />
            <Route path='Giftr' element={<Giftr />} />
            <Route path='FactGenerator' element={<FactGenerator />} />
          </Routes>
      </div>
    </div>
  )
}

export default Projects