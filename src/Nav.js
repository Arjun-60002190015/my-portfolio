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
        <img 
        onClick={()=> history("/")}
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""
        />
        <img 
        onClick={()=> history("/profile")}
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''
        />
        </div>
        
      
    </m.div>
  )
}

export default Nav