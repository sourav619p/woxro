import React from 'react'
import Card1 from './Mask group.png'
import Card2 from './Mask group (1).png'
import Card3 from './Mask group (2).png'
import './Card.css'

function Cards() {
  return (
    <div className='outer-div1'>
        <div className='card'>
            <img className='card-img' src={Card3} alt="" />
            <p>Explore large, destructible environments where no two games are ever the same.</p>
        </div>
        <div className='card'>
            <img  className='card-img' src={Card2} alt="" />
            <p>Explore large, destructible environments where no two games are ever the same.</p>
        </div>
        <div className='card'>
            <img  className='card-img' src={Card1} alt="" />
            <p>Explore large, destructible environments where no two games are ever the same.</p>
        </div>
    </div>
  )
}

export default Cards