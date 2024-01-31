import React from 'react'
import './Rowsub.css'
import { Link } from 'react-router-dom'
import {motion as m, useScroll, useTransform, useViewportScroll} from 'framer-motion'

function Rowsub({image, title, link}){ 
  const {scrollYProgress} = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  
  return (
    <m.div
    whileHover={{
      textShadow: "8px 8px 8px rgb(255 255 255)",

       
       backgroundColor: "rgb(0, 3, 0)"
    }}
    style={{scale}}

    className='rowsub'>
      <Link to={link}>
        <m.div style={{scaleY:scrollYProgress}}/>
        <img className='rowsub__image'
      
          src={image}
      />
      </Link>
      <h2>{title}</h2>

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
