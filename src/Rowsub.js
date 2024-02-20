import React, { useRef, useState } from 'react'
import './Rowsub.css'
import { Link } from 'react-router-dom'
import {motion as m, transform, useInView, useScroll, useTransform, useViewportScroll} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

function Rowsub({image, title, link, image2}){ 
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const[isVisible, setIsVisible] = useState(true);
  
  
  return (
    <m.div
    
    whileHover={{
      textShadow: "8px 8px 8px rgb(255 255 255)",

       
       backgroundColor: "rgb(0, 3, 0)"
    }}
    initial={{opacity:-1}}
    whileInView={{opacity:1}}

    className='rowsub'>
      <Link
      onClick={() => setIsVisible(!isVisible)}
      to={link}>
        <img className='rowsub__image'src={image}/>
        
      </Link >
      
      <h2 ref={ref}><span style={{
        transform: isInView? "none": "translateX(-200px", 
        opacity: isInView? 1:0,
        
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
      }}></span>{title}</h2>

    </m.div>
  )
}
/*

function Rowsub({ image, title}){ 

    
  return (
    <div className='rowsub'>
        <img className='rowsub__image'
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WH3KCpcXyUL7OIi6slAbq8mux1GNfhcY5nftzyIFDg&s"}/>
        <button 
         className='rowsub__button'>
            Go to
        </button>
        <img className='rowsub__image2'
          src={"https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"}/>
        <button 
         className='rowsub__button'>
            Go to
        </button>
    </div>
        
        
    
        

        
      
    
  )
}
*/


export default Rowsub
