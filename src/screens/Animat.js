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
    <Lottie  style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      height: 100,
      width: 100
    }} lottieRef={anima} loop={true} animationData={animationData}
        
        />
        </div>
        
        


      
    
  )
}

export default Animat
