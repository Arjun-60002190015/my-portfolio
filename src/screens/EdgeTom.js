import React from 'react'
import './EdgeTom.css'
import Nav from '../Nav'
import {motion as m} from 'framer-motion'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests';
import videoBg from '../assets/videoBg.mp4';

function EdgeTom() {

    
  return (
    <m.div initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className='edgetom'>
       <Nav/>
       <div className='overlay'></div>
       <div className='edgeVid'>
       <video src={videoBg} autoPlay loop muted width={'300px'} height={'500px'} overflow={'hidden'} />
       <m.div  className='content'>
        <m.h1 initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:2 ,duration: 2, ease:"easeOut"}} 
    >Edge of Tomorrow</m.h1>
        <m.h2 initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:4 ,duration: 2, ease:"easeOut"}} >2014</m.h2>
        <m.p initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:6 ,duration: 2, ease:"easeOut"}} >In short, a time loop. And Tom Cruise. And also Emily Blunt. 
          Watch this once.
           There will be no regrets. And if anybody from Warner Bros is seeing this, we need a SEQUEL. Please. </m.p>
        <m.button initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:8 ,duration: 2, ease:"easeOut"}} 
        onClick={{}} className='edge__button'>Play</m.button>
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
