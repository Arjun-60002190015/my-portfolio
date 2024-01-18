import React, { useState } from 'react';
import "./HomeScreen.css"
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';

import Rows2 from '../Rows2';
import Rows3 from '../Rows3';
import Row4 from '../Row4';

import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1703751593145.json'
import Rows1 from '../Rows1';
import {motion as m} from 'framer-motion'
import Animat from './Animat';
import Row5 from '../Row5';







function HomeScreen() {
  
  
  return (
    
    <m.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 1.5, ease:"easeOut"}}
    className="homeScreen">
       
      
      <Nav/>
      <Banner/>
      <div className='setup'>
      <m.h2 
      
      initial={{opacity:-1}}
      animate={{opacity:1}} 
      transition={{delay:1.15, duration: 0.74, ease:"easeOut"}}>Top Picks (Projects)</m.h2>
      <Rows1/>
      <m.h2 
      
      initial={{opacity:-1}}
      animate={{opacity:1}} 
      transition={{delay:1.15, duration: 0.74, ease:"easeOut"}}>Because you have watched The Social Network (2010)</m.h2>
      <Rows2/>
      <m.h2 
      
      initial={{opacity:-1}}
      animate={{opacity:1}} 
      transition={{delay:1.15, duration: 0.74, ease:"easeOut"}}> Some more Projects (app clones)</m.h2>
      <Rows3/>
      <m.h2 
      
      initial={{opacity:-1}}
      animate={{opacity:1}} 
      transition={{delay:1.15, duration: 0.74, ease:"easeOut"}}>Some exciting Algorithms</m.h2>
      <Row4/>
      <m.h2 
      
      initial={{opacity:-1}}
      animate={{opacity:1}} 
      transition={{delay:1.15, duration: 0.74, ease:"easeOut"}}>Also watch</m.h2>
      <Row5/>
      </div>
      </m.div>
      
    
    
      
      
      
  );
  
}


export default HomeScreen

/*
<Row
        title="Netflix Orignials/ Links/Social Network"
        fetchUrl={requests.fetchNetflixOriginals}
        
        />
      <Row
        title="Also watch"
        fetchUrl={requests.fetchNetflixOriginals}
        
        />
        */