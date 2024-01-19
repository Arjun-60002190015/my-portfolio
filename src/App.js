import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1703751593145.json'
import About from './screens/About';
import Education from './screens/Education';
import { AnimatePresence } from 'framer-motion';
import Animat from './screens/Animat';
import EdgeTom from './screens/EdgeTom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = 
    useSelector(selectUser);
  ;

  const dispatch = useDispatch();
//Storing your state even if you refresh in local browser memory
  useEffect(() =>{
    const unsubsribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        
        dispatch(login({
          uid: userAuth.uid, 
          email: userAuth.email, 
        }))

      }else{
        dispatch(logout());

      }
    });

    return unsubsribe;

  }, [dispatch])

  const[animationPlayed, setAnimationPlayed] = useState(false);
  const onAnimationEnd = () =>{
    setAnimationPlayed(true);
  };

  const handleLoginButtonClick = () => {
    setIsLoggedIn(true);
  };


  return (
    <div className="app">
      <AnimatePresence>
      
      <BrowserRouter>
      {!isLoggedIn ? (
            <LoginScreen onLoginButtonClick={handleLoginButtonClick}/>
          ):( 
        <Routes>
            <Route path='/profile' element={<ProfileScreen/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/animation" element={<Animat />} />
            <Route path="/eot" element={<EdgeTom/>} />
            

            

          
        </Routes>
        )}
      </BrowserRouter>
      </AnimatePresence>

    </div>
  );
}

export default App;