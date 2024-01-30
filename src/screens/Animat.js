import React from 'react'
import Lottie, {LottieRefCurrentProps} from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import animationData from '../assets/Animation - 1703751593145.json'
import './Animat.css'
import { useRef, useEffect } from 'react'


function Animat(animationchecking) {
    const anima = useRef(LottieRefCurrentProps);
    const animationRef = useRef(null);
/*
  useEffect(() => {
    // Start the animation after a delay of 5 seconds
    const delayTimeout = setTimeout(() => {
      animationRef.current.play();
    }, 5000); // 5000 milliseconds (5 seconds)

    // Clear the timeout when the component is unmounted or when the animation is started
    return () => clearTimeout(delayTimeout);
  }, []);
  */
    
    
  return (
    <div className='loAnima'>
    <Lottie 
    ref={animationRef}
    onAnimationEnd={animationchecking} style={{
      
    }} lottieRef={anima} loop={false} animationData={animationData}

        
        />
        
        </div>
        
        


      
    
  )
}

export default Animat
