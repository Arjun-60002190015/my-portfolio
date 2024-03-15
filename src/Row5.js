import React from 'react'
import './Row5.css'
import Rowsub from './Rowsub'
import {motion as m} from 'framer-motion';


function Row5() {
  return (
    <m.div
    initial={{x:15}}
    animate={{x:15}} 
    transition={{delay:1.15, duration: 0.74, ease:"easeOut"}} className='row5'>
        <Rowsub
            link={"/eot"}
            image={"https://www.wallpaperflare.com/static/527/639/639/edge-of-tomorrow-tom-cruise-emily-blunt-movie-poster-wallpaper.jpg"}
            title={"Edge Of Tomorrow (2014)"}
            image2={"https://images.bauerhosting.com/legacy/empire-images/articles/5c7c1b4f133d503e3a4760a8/edge-of-tomorrow.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"}
        />
      
    </m.div>
  )
}

export default Row5
