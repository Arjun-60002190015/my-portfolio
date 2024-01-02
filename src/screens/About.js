import React from 'react'
import './About.css'
import Nav from '../Nav'
import { useNavigate } from 'react-router-dom'
import {motion as m} from 'framer-motion'

function About() {

  const history = useNavigate();
  return (
    <m.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className='about'>
      <Nav/>
      <div className='ab__gradient'>
        
      </div>
      
    </m.div>
  )
}

export default About
