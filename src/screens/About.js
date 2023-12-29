import React from 'react'
import './About.css'
import Nav from '../Nav'
import { useNavigate } from 'react-router-dom'

function About() {

  const history = useNavigate();
  return (
    <div className='about'>
      <Nav/>
      <div className='ab__gradient'>
        
      </div>
      
    </div>
  )
}

export default About
