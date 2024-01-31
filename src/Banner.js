import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from './axios';
import requests from './Requests';
import {motion as m} from 'framer-motion';

function Banner() {
    const[movie, setMovie] = useState([]);

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
        backgroundColor: "rgba(51, 51, 51, 0.5)",
        // Black background: https://wallpapercave.com/wp/wp3321103.jpg
        
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
        
    }}>
        <m.div
    initial={ {opacity:-1}}
    animate={{opacity:1}} 
    transition={{delay: 0.75 , duration: 3, ease:"easeOut"}}
    className='banner__contents'>
            <h1 className='banner__title'>
                
                Arjun Pathak
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Engineer</button>
                <button className='banner__button'>22</button>

            </div>
            <m.h1 
            initial={ {opacity:-1}}
            animate={{opacity:1}} 
            transition={{delay: 3 , duration: 3, ease:"easeOut"}}
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