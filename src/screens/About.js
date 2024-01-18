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
        <m.div 
        initial={{x:-750}}
    animate={{x:-10}}
    transition={{delay: 0.75 , duration: 0.75, ease:"easeOut", type:"spring"}} className='about__talk'>
      <m.h2 >I am a 22 year old software enthusiast / 
        self proclaimed movie-expert interested 
        in real world problems. I have been programming since 2.5 years now and love to solve problems 
        and learn new algorithms. </m.h2>
      
        
      </m.div>
      <m.button 
      
    initial={{y:700}}
    animate={{y:0}} 
    transition={{delay:1.15, duration: 0.74, ease:"easeOut"}}onClick={() => history("/education")} 
      className='about__button'> 
      <h1>My Skills</h1>

      </m.button>
      </div>
      
    </m.div>
  )
}

export default About
