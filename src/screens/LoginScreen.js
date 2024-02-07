import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import { useNavigate } from 'react-router-dom';
import {motion as m} from 'framer-motion';


function LoginScreen({onLoginButtonClick}) {
  const[signIn, setSignIn] = useState(false);
  const history = useNavigate();

  return (
    <m.div 
    
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75 , ease:"easeOut"}}
     className='loginScreen'>
      <div className='loginScreen__background'>
        <img
        className='loginScreen__logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""/>
        
        
        <m.div
        initial={{opacity:-2}}
        animate={{opacity:1}}
        transition={{delay:2, duration: 2 , ease:"easeOut"}}
        className='loginScreen__gradient'/>
        
      </div>
      <div className='loginScreen__body'>
        {signIn? (
          <SignupScreen />
          ): (
            <>
            <m.h1
            initial={{opacity:-2}}
            animate={{opacity:1}}
            transition={{delay:4, duration: 2 , ease:"easeOut"}}
            >Hey There. This is a portfolio webapp. </m.h1>
            <m.h1
            initial={{opacity:-2}}
            animate={{opacity:1}}
            transition={{delay:6, duration: 2 , ease:"easeOut"}}
            >Inspired from Netflix.</m.h1>
             <m.div 
             initial={{opacity:-2, x:-100}}
             animate={{opacity:1, x:0}}
             transition={{delay:8, duration: 2 , ease:"easeOut"}}
             className='loginScreen__input'>
              <form>
                
                 <button onClick={onLoginButtonClick}
                className='loginScreen__getStarted'> Get Started</button>
              </form>
            </m.div>
          </>

        )}
        



      </div>

      

      
    </m.div>
  )

}

/*

function LoginScreen({onLoginButtonClick}) {
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
        
        
        <div className='loginScreen__gradient'/>
        
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
                <div>
      
      <button onClick={onLoginButtonClick}>Login</button>
    </div>

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
*/

export default LoginScreen
