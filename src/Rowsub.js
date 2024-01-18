import React from 'react'
import './Rowsub.css'
import { Link } from 'react-router-dom'
import {motion as m} from 'framer-motion'

function Rowsub({image, title, link}){ 
  
  return (
    <m.div
    whileHover={{
      textShadow: "8px 8px 8px rgb(255 255 255)",

       
       backgroundColor: "rgb(0, 13, 0)"
    }}
    className='rowsub'>
      <Link to={link}>
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
