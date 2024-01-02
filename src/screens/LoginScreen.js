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
            <h1>Hey There. This is a portfolio webapp. Inspired from Netflix.</h1>
            <h2>To get started, just click the get started button.</h2>
            <h3>Enter a random email and password and <span className='bold'>sign up(for first time visiters) </span> or sign in (for recurring ones)</h3>
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
