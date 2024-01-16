import React from 'react'
import './About.css'
import Nav from '../Nav'
import { useNavigate } from 'react-router-dom'
import {color, motion as m} from 'framer-motion'

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
        <div className='about__talk'>
      <h2>I am a 22 year old software enthusiast interested in real world problems. I have been programming since 2.5 years now and love to solve problems 
        and learn new algorithms. </h2>
      
        
      </div>
      <button onClick={() => history("/education")} 
      className='about__button'> 
      <h1>My Skills</h1>

      </button>
      </div>
      
    </m.div>
  )
}

export default About
