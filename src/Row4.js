import React, { useRef } from 'react'
import './Row4.css'
import Rowsub from './Rowsub'
import {motion as m, useInView} from 'framer-motion';

function Rows4(link, image, title) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
 
    return (
      <m.div
      initial={{x:15, scale:0}}
      animate={{x:15, scale:1}} 
    transition={{delay:1.15, duration: 0.74, ease:"easeOut"}} className='rows4'>
        <Rowsub
           link={"https://github.com/Arjun-60002190015/Detect_cycle_in_a_directed_graph"}
           image={"https://media.sproutsocial.com/uploads/2022/11/sprout_FacebookAlgorithm_Outline.jpg"}
           
           title={"Cycle detection"}
           />

        <Rowsub
             link={"https://github.com/Arjun-60002190015/Floyd_warshall_Algo"}
             image={"https://cdn-insights.statusbrew.com/images/2022/04/youtube-algorithm_.png"}
             title={"Floyd-Warshall Algo"}
         />
       
       <Rowsub
             link={"https://github.com/Arjun-60002190015/Kosaraju_Algorithm"}
             image={"https://www.annalect.com/wp-content/uploads/2017/07/marketing_algorithms_annalect.png"}
             title={"Kosaraju Algo"}
         />
         <Rowsub
             link={"https://github.com/Arjun-60002190015/topo_sort"}
             image={"https://i.stack.imgur.com/8gXAi.png"}
             title={"Topological Sort"}
         />
         <div className='see__more'>
          see more
         </div>
   
          
        
      </m.div>
    )
   }

export default Rows4
