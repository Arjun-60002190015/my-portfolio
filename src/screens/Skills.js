import React from 'react'
import './Skills.css'
import {motion as m} from 'framer-motion'
import Nav from '../Nav'

function Skills() {
  return (
    <m.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className='skills'>
        <Nav/>
        

        <m.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay: 1.3, duration: 0.75, ease:"easeOut"}}
        className='sk__gradient'>
        <div className='sk__talk'>
      <h2>Programming Languages :  Java, Python 


      </h2>
      <h2>
Libraries / Frameworks :  GitHub, React 

      </h2>

      <h2>
      Databases :  SQL, MongoDB

      </h2>
  
      </div>
            
        </m.div>
      
    </m.div>
  )
}

export default Skills
