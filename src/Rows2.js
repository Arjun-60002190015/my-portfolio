import React from 'react'
import './Rows2.css'
import Rowsub from './Rowsub'

function Rows2() {
    return (
        <div className='rows2'>
          
            
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
              
    
            
          
        </div>
    )
}

export default Rows2
