import React, { useEffect, useState } from 'react'

import './Nav.css'
import { useNavigate } from 'react-router-dom';
import {motion as m} from 'framer-motion'

function Nav() {

    const pathVar = {
        hidden:{
            opacity:0, 
            pathLength: 0
        }, 
        visible:{
            opacity:1, 
            pathLength:1, 
            transition: {
                duration:2, ease: "easeInOut"
            }
        }
    }
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
        variants={pathVar}
    initial={{filter:'blur(5px)', scale:1.08}}
    animate={{filter:'blur(0px)', scale:1}}
    transition={{duration: 0.5, ease:"easeOut", type:"spring"}}
    className='an_image'>
         <m.img 
         drag
         dragConstraints={{left:0, top:0, right:0, bottom:0}}
         dragElastic={1.8}
         onClick={()=> history("/")}
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""
        />
        </m.div>
        <m.img 
        initial={{opacity:-2}}
        animate={{opacity:1}}
        transition={{duration: 2, ease:"easeOut"}}
            
        onClick={()=> history("/profile")}
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''
        />
        </div>
        
      
    </m.div>
  )
}

export default Nav