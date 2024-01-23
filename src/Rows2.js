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
              <Rowsub
                  link={"https://media.licdn.com/dms/image/C5612AQHvzL-_J1rRWg/article-cover_image-shrink_600_2000/0/1614895141102?e=2147483647&v=beta&t=61j64lYBEW2Lu2J0FC6oqxfHhlPcXdgRtB--3klMdqE"}
                  image={"https://www.shutterstock.com/image-vector/linkedin-black-square-blue-colour-260nw-2320554949.jpg"}
                  title={"LinkedIn"}
              />
              
    
            
          
        </m.div>
    )
}

export default Rows2
