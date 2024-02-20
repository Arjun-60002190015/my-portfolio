import React from 'react'
import './DataStructures.css'
import Nav from '../Nav'
import {motion as m} from 'framer-motion';
import { Link} from 'react-router-dom';

function DataStructures() {
  return (
    <m.div 
    initial={{scale:0}}
    animate={{scale:1}}
    
    className='dataStructures'>
      <Nav/>
      <div className='data__background'>
      

      <m.div
        initial={{opacity:-2}}
        animate={{opacity:1}}
        transition={{delay:1.7, duration: 1.5 , ease:"easeOut"}}
        className='data__gradient'/>
      <m.div className='content'>

        <m.h1
        initial={{opacity:0,filter: "blur(5px)"}}
        animate={{opacity:1, filter: "blur(0px)"}}
        transition={{duration:2, delay:1.7}}
        >Basic Data Structures</m.h1>
        <m.p
        initial={{opacity:0, filter: "blur(5px)"}}
        animate={{opacity:1, filter: "blur(0px)"}}
        transition={{duration:2, delay:3}}
        > Some basic data structures I encountered. Might help you all. Check it out. The repo has Queues, Trees, LinkedLists, Graphs, HashTables, Stacks and BST.</m.p>
            <Link to={"https://github.com/Arjun-60002190015/Factorial"}>
        <m.button initial={{opacity:0, filter: "blur(2px)",}}
    animate={{opacity:1, filter: "blur(0px)",}}
    transition={{delay:5,duration: 2, ease:"easeOut"}} 
        onClick={{}} className='data__button'>Go to code</m.button> </Link>
        
        
        </m.div>
      </div>
    </m.div>
  )
}

export default DataStructures
