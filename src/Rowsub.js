import React, { useRef, useState } from 'react'
import './Rowsub.css'
import { Link } from 'react-router-dom'
import {motion as m, transform, useInView, useScroll, useTransform, useViewportScroll} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

function Rowsub({image, title, link, image2}){ 
  const [over, setOver] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const[isVisible, setIsVisible] = useState(true);
  
  
  return (
    <m.div
    onMouseOver={()=> setOver(true)}
    onMouseOut={()=> setOver(false)}
    whileHover={{
      textShadow: "8px 8px 8px rgb(255 255 255)",

       
       backgroundColor: "rgb(0, 3, 0)"
    }}
    initial={{y:20, opacity:-1}}
    whileInView={{y:0, opacity:1}}

    className='rowsub'>
      <Link
      onClick={() => setIsVisible(!isVisible)}
      to={link}>
        <m.img 
        initial={{filter:"blur(5px)", opacity:0}}
        animate={{filter:"blur(0px)", opacity:1}} 
        transition={{delay:1, duration:0.9}}
        className='rowsub__image'src={over? image2:image} />
        
        
      </Link >
      
      <h2 ref={ref}><span style={{
        
        
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
