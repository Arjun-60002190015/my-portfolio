import React from 'react'
import Lottie, {LottieRefCurrentProps} from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import animationData from '../assets/Animation - 1703751593145.json'
import './Animat.css'
import { useRef } from 'react'


function Animat(animationchecking) {
    const anima = useRef(LottieRefCurrentProps);
    
    
  return (
    <div className='loAnima'>
    <Lottie onAnimationEnd={animationchecking} style={{
      
    }} lottieRef={anima} loop={true} animationData={animationData}

        
        />
        
        </div>
        
        


      
    
  )
}

export default Animat
