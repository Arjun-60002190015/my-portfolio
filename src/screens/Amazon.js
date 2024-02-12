import React from 'react'
import './Amazon.css';
import Nav from '../Nav';
import {motion as m} from 'framer-motion'
import videoBg1 from '../assets/videoBg1.mp4';
import { Link } from 'react-router-dom';

function Amazon() {
    //const link1 = URL("https://github.com/Arjun-60002190015/amazon-clone");
  return (
    <m.div initial={{opacity:0, filter:"blur(5px)"}}
    animate={{opacity:1, filter:"blur(0px)"}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className='amazon'>
       <Nav/>
       <div className='overlayAm'></div>
       <div className='amazVid'>
       <video playsInline src={videoBg1} autoPlay loop muted width={'300px'} height={'500px'} overflow={'hidden'} />
       <m.div  className='content__amazon'>
        <m.h1 initial={{opacity:0,filter:"blur(5px)"}}
    animate={{opacity:1, filter:"blur(0px)"}}
    transition={{delay:2 ,duration: 2, ease:"easeOut"}} 
    >Amazon Clone</m.h1>

<m.div 
     initial={{opacity:0, filter:"blur(5px)"}}
     animate={{opacity:1, filter:"blur(0px)"}}
     transition={{delay:4 ,duration: 2, ease:"easeOut"}}
     className='year_content'>
        <m.h2 className='year'  >2023</m.h2>
        <button className='rating_button'>
    <m.h2 className='rating'  >Very Interesting</m.h2>
    </button>
    
    </m.div>
        
        <m.p initial={{opacity:0, filter:"blur(5px)"}}
    animate={{opacity:1, filter:"blur(0px)"}}
    transition={{delay:3 ,duration: 2, ease:"easeOut"}} >
        Here I tried to make a test amazon site with 3 screens - A login page, homepage and a checkout page. So the user could login and (in the homepage) could add products in a checkout system and could perform some actions in the checkput page. Check it out.
    </m.p>
      <Link to={"https://github.com/Arjun-60002190015/amazon-clone"}>
        <m.button   initial={{opacity:0, filter:"blur(5px)"}}
    animate={{opacity:1, filter:"blur(0px)"}}
    transition={{delay:4 ,duration: 2, ease:"easeOut"}} 
      className='amazon__button'>Go to Code</m.button> </Link>
       </m.div>
       
       </div>

        
      
    
    </m.div>
  )
}

export default Amazon
