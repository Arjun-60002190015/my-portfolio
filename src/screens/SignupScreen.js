import React, { useRef } from 'react'
import './SignupScreen.css';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {motion as m} from 'framer-motion'


function SignupScreen() {
    const onLoginButtonClick = null
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useNavigate()

    const register = (e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        ).then((authUser)=> {
          console.log(authUser)
        })
        .catch((error) => {
          alert(error.message )
        });

    };

    const signIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
          emailRef.current.value, 
          passwordRef.current.value
        ).then((authUser)=> {
          console.log(authUser)
        })
        .catch((error) => {
          alert(error.message )
        });
    };
  return (
    <m.div initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75 , ease:"easeOut"}} className='signupScreen'>
      <form>
        <h1> One last step.
        </h1>
        
        
        <input ref = {emailRef}placeholder='Email' type='email'/>
        <input ref={passwordRef} placeholder='Password' type='password'/>
        <button type='submit' onClick={signIn}> Sign In</button>

        <h4>
            <span className='signupScreen__gray'>
                First time? 
            </span>
            <span className='signupScreen__link' 
            onClick={register}>
                 Sign Up.
            </span>
        </h4>
        
      </form>
    </m.div>
  )
}

export default SignupScreen