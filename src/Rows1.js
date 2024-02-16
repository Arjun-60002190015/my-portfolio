import React from 'react'
import './Rows1.css'
import Rowsub from './Rowsub';
import { useRef } from 'react';
import {motion as m, transform, useInView, useScroll, useTransform} from 'framer-motion';


function Rows1() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});

  return (
    <m.div
    initial={{x:15, scale:0}}
    animate={{x:15, scale:1}} 
    transition={{delay:1.15, duration: 0.74, ease:"easeOut", type:"spring", stiffness:30}}
    className='rows1'>
        <Rowsub
            link={"/pdm"}
            image={"https://media.post.rvohealth.io/wp-content/uploads/2020/09/11008-Parkinsons_Disease_1200x628-facebook-1200x628.jpg"}
            title={"Parkinson's Detection Model"}
            />

      <Rowsub
              link={"/hsa"}
              image={"https://cdn.thewirecutter.com/wp-content/media/2022/06/home-security-system-2048px-5235-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"}
              title={"Home Security and Automation"}
          />
        
        <Rowsub
              link={"/bds"}
              image={"https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg"}
              title={"Basic data structures"}
          />
         

      
    </m.div>
  )
}
/*
function Rows1() {
  return (
    <m.div
    initial={{x:-700}}
    animate={{x:15}} 
    transition={{delay:1.15, duration: 0.74, ease:"easeOut", type:"spring", stiffness:100}}
    className='rows1'>
        <Rowsub
            link={"https://github.com/Arjun-60002190015/Parkinson-s-early-detection-model"}
            image={"https://info.primarycare.hms.harvard.edu/hubfs/6.23.jpg"}
            title={"Parkinson's Detection Model"}
            />

      <Rowsub
              link={"https://technojournal.djsceietesf.com/dj-strike"}
              image={"https://itbrief.com.au/uploads/story/2023/11/14/preview_img-kBYEZKDZ6mTLWr4vhOVJp1PQ.webp"}
              title={"Home Security and Automation"}
          />
        
        <Rowsub
              link={"https://github.com/Arjun-60002190015/Factorial"}
              image={"https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg"}
              title={"Basic data structures"}
          />
         

      
    </m.div>
  )
}
*/
export default Rows1
