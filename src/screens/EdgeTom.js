import React from 'react'
import './EdgeTom.css'
import Nav from '../Nav'
import {motion as m} from 'framer-motion'
import Banner from '../Banner'

function EdgeTom() {
  return (
    <m.div initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className='edgetom'>
        <Nav/>
        <h1>hello</h1>
        

        <div className='edge__gradient'>

        </div>

        
      
    </m.div>
  )
}

export default EdgeTom
