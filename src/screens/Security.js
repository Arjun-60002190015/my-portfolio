import React from 'react'
import './Security.css'
import Nav from '../Nav'
import {motion as m} from  "framer-motion";
import { Link } from 'react-router-dom';

/*
It aimed to provide protection at homes. Through Raspberry Pi, we attached a PiR sensor and a camera. The sensor activated through movement and the camera recorded movements and intruders and sent a mail to the owner regarding the intrusion. The setup aimed to be low cost than the current security models which it was successful in.
     Technologies used: RaspberryPi 3B, Rasbian OS.

*/

function Security() {
  return (
    <m.div 
    initial={{scale:0}}
    animate={{scale:1}}
    className='security'>
      <Nav/>
      <div className='security__background'>
      

      <m.div
        initial={{opacity:-2}}
        animate={{opacity:1}}
        transition={{delay:1.7, duration: 1.5 , ease:"easeOut"}}
        className='security__gradient'/>
      <m.div className='sec_content'>

        <m.h1 className='title'
        initial={{opacity:0,filter: "blur(5px)"}}
        animate={{opacity:1, filter: "blur(0px)"}}
        transition={{duration:2, delay:1.7}}
        >Home Security and Automation</m.h1>
        <m.p
        initial={{opacity:0, filter: "blur(5px)"}}
        animate={{opacity:1, filter: "blur(0px)"}}
        transition={{duration:2, delay:3}}
        > Aimed to provide protection at homes. We attached a PiR sensor, which activated through movement and a camera (recorded movements and intruders) and sent a mail to the owner. 
        The setup aimed to be low cost than the current security models.
        </m.p>
            <Link to={"https://technojournal.djsceietesf.com/dj-strike"}>
        <m.button initial={{opacity:0, filter: "blur(2px)",}}
    animate={{opacity:1, filter: "blur(0px)",}}
    transition={{delay:5,duration: 2, ease:"easeOut"}} 
        onClick={{}} className='security__button'>Go to Journal</m.button> </Link>
        
        
        </m.div>
      </div>
    </m.div>
  )
}

export default Security
