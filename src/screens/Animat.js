import React from 'react'
import Lottie, {LottieRefCurrentProps} from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import animationData from '../assets/Animation - 1703751593145.json'
import './Animat.css'
import { useRef } from 'react'


function Animat({f = false}) {
    const anima = useRef(LottieRefCurrentProps);
    
    const history = useNavigate();
  return (
    <Lottie onAnimationEnd={() => history=("/")}  lottieRef={anima} loop={false} animationData={animationData}
        f = {true}
        />
        
        


      
    
  )
}

export default Animat
