import React from 'react'
import './Spotify.css'
import Nav from '../Nav'
import {motion as m} from 'framer-motion'
import videoBg2 from '../assets/videoBg2.mp4';
import { Link } from 'react-router-dom';

function Spotify() {
  //const link1 = URL("https://github.com/Arjun-60002190015/amazon-clone");
return (
  <m.div initial={{opacity:0, scale:0}}
  animate={{opacity:1, scale:1}}
  transition={{duration: 0.75, ease:"easeOut"}}
  className='spotify'>
     <Nav/>
     <div className='overlaySp'></div>
     <div className='spVid'>
     <video playsInline src={videoBg2} autoPlay loop muted width={'300px'} height={'500px'} overflow={'hidden'} />
     <m.div  className='content__spotify'>
      <m.h1 initial={{opacity:0, filter:"blur(5px)"}}
  animate={{opacity:1, filter:"blur(0px)"}}
  transition={{delay:2 ,duration: 2, ease:"easeOut"}} 
  >Spotify Clone</m.h1>
   <m.div 
     initial={{opacity:0, filter:"blur(5px)"}}
     animate={{opacity:1, filter:"blur(0px)"}}
     transition={{delay:4 ,duration: 2, ease:"easeOut"}}
     className='year_content'>
        <m.h2 className='year'  >2023</m.h2>
        
    
    </m.div>
      
      <m.p initial={{opacity:0, filter:"blur(5px)"}}
  animate={{opacity:1, filter:"blur(0px)"}}
  transition={{delay:3 ,duration: 2, ease:"easeOut"}} >
    So in this build, I made a clone of spotify where user after logging in can navigate from their own playlist made in their real spotify account. 
    I gave a player to listen into the music.
    And no, the video in the background is not what I made.

      </m.p>
    <Link to={"https://github.com/Arjun-60002190015/spotify-app"}>
      <m.button   initial={{opacity:0, filter:"blur(5px)"}}
  animate={{opacity:1, filter:"blur(0px)"}}
  transition={{delay:4 ,duration: 2, ease:"easeOut"}} 
    className='spotify__button'>Go to Code</m.button> </Link>
     </m.div>
     
     </div>

      
    
  
  </m.div>
)
}

export default Spotify
