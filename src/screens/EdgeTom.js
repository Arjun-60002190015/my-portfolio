import React from 'react'
import './EdgeTom.css'
import Nav from '../Nav'
import {motion as m} from 'framer-motion'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests';
import videoBg from '../assets/videoBg.mp4';
import { Link } from 'react-router-dom'

function EdgeTom() {

    
  return (
    <m.div 
    exit={{opacity:[1, 0.5, 0.2, 0, -1], duration:6}}
    initial={{opacity:0, scale:0}}
    animate={{opacity:1, scale:1}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className='edgetom'>
       <Nav/>
       <div className='overlay'></div>
       <div className='edgeVid'>
       <video playsInline src={videoBg} autoPlay loop muted width={'300px'} height={'500px'} overflow={'hidden'} />
       <m.div  className='content'>
       <m.h1 initial={{opacity:0, filter: "blur(20px)",}}
    animate={{opacity:1, filter: "blur(0px)",}}
    transition={{delay:2 ,duration: 2, ease:"easeOut"}} 
    >
      <span className='transparent' styles={'background-video:videoBg1.mp4'}>
      Edge of Tomorrow
      </span>
      </m.h1>
     <m.div 
     initial={{opacity:0, filter: "blur(2px)",}}
     animate={{opacity:1, filter: "blur(0px)",}}
     transition={{delay:4 ,duration: 2, ease:"easeOut"}}
     className='year_content'>
        <m.h2 className='year'  >2014</m.h2>
        <button className='rating_button'>
    <m.h2 className='rating'  >UA</m.h2>
    </button>
    <m.h2 className='length' >1h53m</m.h2>
    </m.div>
        <m.p initial={{opacity:0, filter: "blur(2px)",}}
    animate={{opacity:1, filter: "blur(0px)",}}
    transition={{delay:6 ,duration: 2, ease:"easeOut"}} >In short, a TIME LOOP. And TOM CRUISE. And also EMILY BLUNT. 
          Watch this once.
           <m.span 
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:8 ,duration: 2, ease:"easeOut"}}
           className='cool'> And if anybody from Warner Bros is seeing this, we need a SEQUEL. Please.</m.span> </m.p>
        <Link to={"https://www.netflix.com/de-en/title/70298735"}>
        <m.button initial={{opacity:0, filter: "blur(2px)",}}
    animate={{opacity:1, filter: "blur(0px)",}}
    transition={{delay:10 ,duration: 2, ease:"easeOut"}} 
        onClick={{}} className='edge__button'>Play</m.button> </Link>
       </m.div>
       
       </div>

        
      
    
    </m.div>
  )
}

/*


function EdgeTom() {

    
  return (
    <m.div initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className='edgetom'>
        
        <Nav/>
        <div className='edge' >
        <div className='edge__contents' >
            <div className='content--fade'>

            </div>
            <h1 className='edge__title'>
                Edge Of Tomorrow
            </h1>
            <div className='edge__buttons'>
                <button className='edge__button'>Play</button>
                

            </div>
            <h1 className='edge__description'>
            After the alien forces 
            launch an attack on 
            Earth and threaten to 
            wipe out the human race, 
            Captain Cage, who is trapped in 
            a time loop, teams up 
            with a warrior to save the planet.
            (I love this movie. Give it a try)
                
                
            </h1>
            
        </div>

        <div className='edge--fadeBottom'>
            
        </div>
      
    </div>
    </m.div>
  )
}
*/

export default EdgeTom
