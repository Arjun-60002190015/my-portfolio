import React from 'react';
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







function HomeScreen() {
  
  return (
    
    <m.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75, ease:"easeOut"}}
    className="homeScreen">
       
      
      <Nav/>
      <Banner/>
      <h2>Top Picks for you (Projects)</h2>
      <Rows1/>
      <h2>Because you have watched The Social Network (2010)</h2>
      <Rows2/>
      <h2> Some more Projects (app clones)</h2>
      <Rows3/>
      <h2>Some exciting Algorithms</h2>

      <Row4/>
      
      
      
      
      
      
      
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