import React from 'react'
import './Parkinsons.css'
import Nav from '../Nav'
import {motion as m} from 'framer-motion';

function Parkinsons() {
  return (
    <div className='parkinsons'>
      <Nav/>
      <div className='parkinsons__background'>
      

      <m.div
        initial={{opacity:-2}}
        animate={{opacity:1}}
        transition={{delay:2, duration: 2 , ease:"easeOut"}}
        className='loginScreen__gradient'/>
        
        
      
      </div>
    </div>
  )
}

export default Parkinsons 
