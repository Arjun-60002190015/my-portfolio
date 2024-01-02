import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import { useNavigate } from 'react-router-dom';
import {motion as m} from 'framer-motion'

function LoginScreen() {
  const[signIn, setSignIn] = useState(false);
  const history = useNavigate();

  return (
    <m.div initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75 , ease:"easeOut"}}
     className='loginScreen'>
      <div className='loginScreen__background'>
        <img
        className='loginScreen__logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""/>
        <button onClick={() => setSignIn(true)}
        className='loginScreen__button'>Enter</button>
        
        <div className='loginScreen__gradient'
          
      />
      </div>
      <div className='loginScreen__body'>
        {signIn? (
          <SignupScreen />
          ): (
            <>
            <h1>Unlimited Films,  Programmes and more.</h1>
            <h2>Watch anywhere. Cancel at anytime.</h2>
            <h3>Ready to watch? Enter your Email</h3>
            <div className='loginScreen__input'>
              <form>
                <input type='email'
                placeholder='Email Address'
                />
                <button onClick={() => setSignIn(true)} 
                className='loginScreen__getStarted'> Get Started</button>
              </form>
            </div>
          </>

        )}
        



      </div>

      

      
    </m.div>
  )
}

export default LoginScreen
