import React from 'react'
import './Rows1.css'
import Rowsub from './Rowsub'

function Rows1() {
  return (
    <div className='rows1'>
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
         

      
    </div>
  )
}

export default Rows1
