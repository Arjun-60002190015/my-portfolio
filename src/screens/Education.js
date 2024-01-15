import React from 'react'
import './Education.css'
import Nav from '../Nav'
import {motion as m} from 'framer-motion'

function Education() {
  return (
    <m.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className='education'>
        <Nav/>
        

        <div className='edu__gradient'>
        <div className='about__talk'>
      <h2>I am a 22 year old software enthusiast interested in real world problems. I have been programming since 2.5 years now and love to solve problems 
        and love to learn new algorithms. </h2>
      
        
      </div>
            
        </div>
      
    </m.div>
  )
}

export default Education
