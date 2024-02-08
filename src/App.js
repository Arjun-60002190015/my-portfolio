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
import { useLocation } from 'react-router-dom';
import Parkinsons from './screens/Parkinsons';
import Security from './screens/Security';
import DataStructures from './screens/DataStructures';
import Netflix from './screens/Netflix';
import Amazon from './screens/Amazon';
import IgReels from './screens/IgReels';
import Spotify from './screens/Spotify';
import {motion as m} from 'framer-motion';

function App() {
  const [isAnimDone, setIsAnimDone] = useState(false);
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

  

  const handleLoginButtonClick = () => {
    setIsLoggedIn(true);
  };

  const checkForAnimation = () => {
    setIsAnimDone(true);
  };


  return (
    
    <m.div className="app">
      
      
    <BrowserRouter>
  {!isLoggedIn ? (
    <LoginScreen onLoginButtonClick={handleLoginButtonClick} />
  ) : (
    <AnimatePresence>
      {isAnimDone ? (
        <Animat key="animat" animationchecking={checkForAnimation} />
      ) : (
        <Routes>
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/animation" element={<Animat />} />
          <Route path="/eot" element={<EdgeTom />} />
          <Route path="/pdm" element={<Parkinsons />} />
          <Route path="/hsa" element={<Security />} />
          <Route path="/bds" element={<DataStructures />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/igreels" element={<IgReels />} />
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/amazon" element={<Amazon />} />
        </Routes>
      )}
    </AnimatePresence>
  )}
</BrowserRouter>
      

    </m.div>
    
  );
}

export default App;