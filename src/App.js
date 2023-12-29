import React, { useEffect } from 'react';
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


function App() {
  
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


  return (
    <div className="app">
      
      <BrowserRouter>
      {!user ? (
            <LoginScreen/>
          ):( 
        <Routes>
            <Route path='/profile' element={<ProfileScreen/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/education' element={<Education/>}/>
            
          
            <Route path="/" element={<HomeScreen />} />
            

          
        </Routes>
        )}
      </BrowserRouter>

    </div>
  );
}

export default App;