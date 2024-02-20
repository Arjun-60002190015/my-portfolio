import React from 'react'
import './Parkinsons.css'
import Nav from '../Nav'
import {motion as m, spring} from 'framer-motion';
import { Link } from 'react-router-dom';

function Parkinsons() {
  return (
    <m.div 
    initial={{scale:0}}
    animate={{scale:1}}
    
    className='parkinsons'>
      <Nav/>
      <div className='parkinsons__background'>
      

      <m.div
        initial={{opacity:-2}}
        animate={{opacity:1}}
        transition={{delay:1.7, duration: 1.5 , ease:"easeOut"}}
        className='parkinsons__gradient'/>
      <m.div className='content'>

        <m.h1
        initial={{opacity:0,filter: "blur(5px)"}}
        animate={{opacity:1, filter: "blur(0px)"}}
        transition={{duration:2, delay:1.7}}
        >Parkinson's Detection</m.h1>
        <m.p
        initial={{opacity:0, filter: "blur(5px)"}}
        animate={{opacity:1, filter: "blur(0px)"}}
        transition={{duration:2, delay:3}}
        > A simple python model 
          training of a PD affected dataset
           obtained from an Accelerometer 
           analyzing the GAIT parameters of 
           a patient. Various ML models trained to 
           get an accuracy and further AUC was
            calculated to get better understanding 
            of results</m.p>
            <Link to={"https://github.com/Arjun-60002190015/Parkinson-s-early-detection-model"}>
        <m.button initial={{opacity:0, filter: "blur(2px)",}}
    animate={{opacity:1, filter: "blur(0px)",}}
    transition={{delay:5,duration: 2, ease:"easeOut"}} 
        onClick={{}} className='park__button'>Go to code</m.button> </Link>
        
        
        </m.div>
      </div>
    </m.div>
  )
}

export default Parkinsons 
