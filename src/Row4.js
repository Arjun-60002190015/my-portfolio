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
           image2={"https://www.pewresearch.org/wp-content/uploads/2019/02/FT_19.02.08_Algorithms_feature.jpg"}
           />

        <Rowsub
             link={"https://github.com/Arjun-60002190015/Floyd_warshall_Algo"}
             image={"https://cdn-insights.statusbrew.com/images/2022/04/youtube-algorithm_.png"}
             title={"Floyd-Warshall Algo"}
             image2={"https://insights.som.yale.edu/sites/default/files/styles/max_2600x2600/public/2021-11/eliminating%20bias%20from%20algorithms.jpg?itok=sj81QuBa"}
         />
       
       <Rowsub
             link={"https://github.com/Arjun-60002190015/Kosaraju_Algorithm"}
             image={"https://www.annalect.com/wp-content/uploads/2017/07/marketing_algorithms_annalect.png"}
             title={"Kosaraju Algo"}
             image2={"https://assets-global.website-files.com/6284b1c380f778b27a85fbfc/629f1cfe9b77d82cf1064184_shutterstock_1824108005%20(1).jpg"}
         />
         <Rowsub
             link={"https://github.com/Arjun-60002190015/topo_sort"}
             image={"https://i.stack.imgur.com/8gXAi.png"}
             title={"Topological Sort"}
             image2={"https://lh4.googleusercontent.com/qurCfBN4AKxaTHV6AzWWgIEd6g0hrxKvc1h_FSe0e51toCqat18fIoGnHxlsDUSX9TU_6VtQaYrbjwTGv-a3R82tHcFx4T509_sLTLT_7F73EqX32-lX18K70eYc3Va8YmI8vhCNb4tjgPK_FTH5Cm0M7Q_s1JbWFKUlNgkY3tWI1VMMDfo9gXD7_Q"}
         />
         
   
          
        
      </m.div>
    )
   }

export default Rows4
