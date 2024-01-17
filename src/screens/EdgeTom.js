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
       <div className='edgeVid'>
       <video src={videoBg} autoPlay loop muted/>
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
