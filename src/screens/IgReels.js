import React from 'react'
import './IgReels.css';
import Nav from '../Nav';
import videoBg4 from '../assets/videoBg4.mp4';
import { Link } from 'react-router-dom';
import {motion as m} from 'framer-motion';

function IgReels() {
  //const link1 = URL("https://github.com/Arjun-60002190015/amazon-clone");
return (
  <m.div initial={{opacity:0, filter:"blur(5px)", scale:0}}
  animate={{opacity:1.5, filter:"blur(0px)", scale:1}}
  transition={{duration: 0.75, ease:"easeOut"}}
  className='igreels'>
     <Nav/>
     <div className='overlayIg'></div>
     <div className='igVid'>
     <video playsInline src={videoBg4} autoPlay loop muted width={'300px'} height={'500px'} overflow={'hidden'} />
     <m.div  className='content__igreels'>
      <m.h1 initial={{opacity:0, filter:"blur(5px)"}}
  animate={{opacity:1, filter:"blur(0px)"}}
  transition={{delay:2 ,duration: 2, ease:"easeOut"}} 
  >Ig-Reels Clone</m.h1>

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
    I made this for fun. This build can be called a clone of Insta reels/TikTok.
    A basic reel screen with a scrolling feature. Includes Vertical Snapping.

      </m.p>
    <Link to={"https://github.com/Arjun-60002190015/ig-reels-clone"}
             image={"https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/06/How-to-View-Instagram-Reels-on-Desktop.jpg?fit=1200%2C553&ssl=1"}>
      <m.button   initial={{opacity:0, filter:"blur(5px)"}}
  animate={{opacity:1, filter:"blur(0px)"}}
  transition={{delay:4 ,duration: 2, ease:"easeOut"}} 
    className='igreels__button'>Go to Code</m.button> </Link>
     </m.div>
     
     </div>

      
    
  
  </m.div>
)
}

export default IgReels
