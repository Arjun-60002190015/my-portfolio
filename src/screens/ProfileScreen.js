import React from 'react'
import './ProfileScreen.css';
import Nav from '../Nav';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import Prof from '../Prof';
import About from './About';
import {motion as m} from 'framer-motion'


function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useNavigate();
  
  

  

  return (
    <m.div initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.75 , ease:"easeOut"}}
    className='profileScreen'>
        <Nav/>
        <div className='profileScreen__body'>
          <h1> Who's watching?</h1>
          

        </div>
        <div className='profileScreen__info'>
            
            <Prof 
            
            link={"/about"}
            

            image={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
            
            
            title={"About Me"}/>
            

          <Prof
            link={"/education"} 
            image={'https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg'}
            title={"Education"}/>

<Prof link={"/education"}
image={'https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg'}
            title={"Skills"}/>

          <Prof 
            link={"https://drive.google.com/file/d/1Uk4VJ4nn0xh5LTBO0qrVY1P9PlKE77Qa/view?usp=sharing"}
            image={'https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png'}
            title={"Resume"}/>

            
            
          </div>
          <div className='sButon'>
          <button onClick={(()=> auth.signOut())}
                   className='profileScreen__signOut'>Sign Out</button>

<button onClick={(()=> history("/animation"))}
                   className='profileScreen__signOut'>Animate</button>
      </div>
    </m.div>
  )
}


/*

function ProfileScreen() {
  const user = useSelector(selectUser);

  

  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen__body'>
          <h1> Who's watching?</h1>
          <div className='profileScreen__info'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
            <div className='profileScreen__details'>
            <h2>{}</h2>
                <div className='profileScreen__plans'>
                  <h3>Plans</h3>
                  
                </div>
             </div>
          </div>

        </div>
      
    </div>
  )
}
*/

export default ProfileScreen
