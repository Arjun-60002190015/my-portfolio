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
       <m.div initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 10.0, ease:"easeOut"}} className='content'>
        <h1>Edge of Tomorrow</h1>
        <h2>2014</h2>
        <p>In short, a time loop. And Tom Cruise. And also Emily Blunt. 
          Watch this once.
           There will be no regrets. And if anybody from Warner Bros is seeing this, we need a SEQUEL. Please. </p>
        <button onClick={{}} className='edge__button'>Play</button>
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
