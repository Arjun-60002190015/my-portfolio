import React from 'react'
import Lottie, {LottieRefCurrentProps} from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import animationData from '../assets/Animation - 1703751593145.json'
import './Animat.css'
import { useRef } from 'react'


function Animat() {
    const anima = useRef(LottieRefCurrentProps);
    
    
  return (
    <div className='loAnima'>
    <Lottie   lottieRef={anima} loop={true} animationData={animationData}
        
        />
        </div>
        
        


      
    
  )
}

export default Animat
