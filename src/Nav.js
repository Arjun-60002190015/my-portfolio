import React, { useEffect, useState } from 'react'

import './Nav.css'
import { useNavigate } from 'react-router-dom';
import {motion as m} from 'framer-motion'

function Nav() {
    const[show, handleShow] = useState(false);
    const history = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        } 
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return() => window.removeEventListener("scroll", transitionNavBar)
        
    }, [])
  return (
    <m.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease:"easeOut"}}
     className={`nav ${show && 'nav__black'}`}>
        <div className='nav__content'>
        <m.div
    initial={{x:-250}}
    animate={{x:-10}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className='an_image'>
         <img 
        onClick={()=> history("/")}
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""
        />
        </m.div>
        <m.img 
        initial={{y:-250}}
        animate={{y:0}}
        transition={{duration: 0.75, ease:"easeOut"}}
            
        onClick={()=> history("/profile")}
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''
        />
        </div>
        
      
    </m.div>
  )
}

export default Nav