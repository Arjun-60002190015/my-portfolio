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
        

        <m.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay: 1.3, duration: 0.75, ease:"easeOut"}}
        className='edu__gradient'>
        <div className='edu__talk'>
      <h2>B.Tech - Dwarkadas J. Sanghvi College of Engineering - Electronics and Telecommunication Engineering
      </h2>
      
      <h2 style={{fontStyle:"italic"}}>8.12 GPA</h2>
      <h2>12th Science - <span style={{fontStyle:"italic"}}>64%</span>
      </h2>
      <h2>10th ICSE - <span style={{fontStyle:"italic"}}>81%</span>
      </h2>
        
      </div>
            
        </m.div>
      
    </m.div>
  )
}

export default Education
