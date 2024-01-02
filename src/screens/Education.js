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
            
        </div>
      
    </m.div>
  )
}

export default Education
