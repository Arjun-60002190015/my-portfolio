import React from 'react'
import './Netflix.css';
import Nav from '../Nav';
import videoBg3 from '../assets/videoBg3.mp4';
import { Link } from 'react-router-dom';
import {motion as m} from 'framer-motion';


function Netflix() {
  //const link1 = URL("https://github.com/Arjun-60002190015/amazon-clone");
return (
  <m.div initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration: 0.75, ease:"easeOut"}}
  className='netflix'>
     <Nav/>
     <div className='overlayNf'></div>
     <div className='nfVid'>
     <video src={videoBg3} autoPlay loop muted width={'300px'} height={'500px'} overflow={'hidden'} />
     <m.div  className='content__netflix'>
      <m.h1 initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:2 ,duration: 2, ease:"easeOut"}} 
  >Netflix Clone</m.h1>
      
      <m.p initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:3 ,duration: 2, ease:"easeOut"}} >
    This is the most in-depth project I have made and <Link to={"https://my-repo-sigma-amber.vercel.app/"} className='netflix__link'>hosted</Link>.
    I wanted to add a paywall but then 
    realized that to even use its API I have to pay. 
    Used a third party APIs to get the background image shuffling and also the various genres.
    


      </m.p>
    <Link to={"https://github.com/Arjun-60002190015/spotify-app"}>
      <m.button   initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:4 ,duration: 2, ease:"easeOut"}} 
    className='netflix__button'>Go to Code</m.button> </Link>
     </m.div>
     
     </div>

      
    
  
  </m.div>
)
}

export default Netflix 
