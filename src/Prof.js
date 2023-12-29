import React from 'react'
import './Prof.css'
import { Link, useNavigate } from 'react-router-dom'

function Prof({image, title, link}) {
  
  return (
    <div className='prof'>
      <Link to={link}>
        <img 
        
        className='prof__image'
        src={image}/>
        </Link>

        <h2>{title}</h2>

        
      
    </div>
  )
}

export default Prof
