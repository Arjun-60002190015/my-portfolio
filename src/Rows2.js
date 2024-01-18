import React from 'react'
import './Rows2.css'
import Rowsub from './Rowsub'
import {motion as m} from 'framer-motion';

function Rows2() {
    return (
        <m.div
    initial={{x:-700}}
    animate={{x:15}} 
    transition={{delay:1.15, duration: 0.74, ease:"easeOut"}} className='rows2'>
          
            
            <Rowsub
                link={"https://leetcode.com/Raptor_a/"}
                image={"https://leetcode.com/static/images/LeetCode_Sharing.png"}
                title={"Leetcode"}
                />
            
              <Rowsub
                  link={"https://github.com/Arjun-60002190015"}
                  image={"https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_8ec3c17e3fb1df25b6a8bd7cc69cf2d1/github.png"}
                  title={"Github"}
              />
    
              <Rowsub
                  link={"https://www.hackerrank.com/profile/arjunpathak164"}
                  image={"https://sr-marketplace-prod.s3.amazonaws.com/wp-content/uploads/2015/08/HackerRank1.png"}
                  title={"HackerRank"}
              />
              
    
            
          
        </m.div>
    )
}

export default Rows2
