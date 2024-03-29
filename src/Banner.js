import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from './axios';
import requests from './Requests';
import {motion as m} from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { useRef} from 'react';
import {useInView } from 'framer-motion';

function Banner() {
    const[movie, setMovie] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, {once:false});


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])
    console.log(movie);


    function truncate(string, n){
        return string?.length>n? string.substr(0, n-1) + '...':string;

    }
  return (
    <header className='banner' style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        objectFit:"contain",
        //https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
        backgroundColor: "rgba(51, 51, 51, 0.5)",
        // Black background: https://wallpapercave.com/wp/wp3321103.jpg
        //https://cdna.artstation.com/p/assets/images/images/017/022/542/large/amirhosein-naseri-desktop-screenshot-2019-04-03-18-17-47-11.jpg?1554338571
        backgroundImage : `url("https://www.webfx.com/wp-content/uploads/2021/10/step_09_bats_02.jpg")`, 
        
    }}>
        <m.div 
        initial={ {opacity:-1}}
        animate={{opacity:1}} 
        transition={{delay: 0.75 , duration: 2, ease:"easeOut"}}
        className='banner__overlay'></m.div>
        <m.div
    initial={ {opacity:-1}}
    animate={{opacity:1}} 
    transition={{delay: 0.75 , duration: 2, ease:"easeOut"}}
    className='banner__contents'>
            <m.h1 
            initial ={{y:20, filter:"blur(5px)"}}
            whileInView= {{y:0, filter:"blur(0)"}}  
            transition={{duration:0.3, ease:"easeInOut"}}
            className='banner__title'>
                
                Arjun Pathak
            </m.h1>
            <m.div 
            initial ={{y:20, filter:"blur(5px)"}}
            whileInView= {{y:0, filter:"blur(0)"}}  
            transition={{duration:0.3, ease:"easeInOut"}}
            className='banner__buttons'>
                <button className='banner__button'>Engineer</button>
                <button className='banner__button'>22</button>

            </m.div>
            <m.h1 
            initial={{y:20, filter:"blur(5px)"}}
            whileInView={{y:0, filter:"blur(0px)"}} 
            transition={{duration: 0.3, ease:"easeOut"}}
            className='banner__description'>
                Projects and links are below.
                To know more about me, click on the profile button.
                
            </m.h1>
        </m.div>
        
        
        

        <div className='banner--fadeBottom'>

               
            
        </div>
        
        
        
      
    </header>
    
  );
}

export default Banner