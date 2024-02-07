import React from 'react'
import './Row5.css'
import Rowsub from './Rowsub'
import {motion as m} from 'framer-motion';


function Row5() {
  return (
    <m.div
    initial={{x:-700}}
    animate={{x:15}} 
    transition={{delay:1.15, duration: 0.74, ease:"easeOut"}} className='row5'>
        <Rowsub
            link={"/eot"}
            image={"https://www.wallpaperflare.com/static/527/639/639/edge-of-tomorrow-tom-cruise-emily-blunt-movie-poster-wallpaper.jpg"}
            title={"Edge Of Tomorrow (2014)"}
        />
      
    </m.div>
  )
}

export default Row5
