import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className='card'>
     {props.openSlots=== 0 && <div className="soldOut">SOLD OUT</div>}
      <img src={props.image} className='cardImg' alt="" />
      <div className="cardContent">
        <div className="aboutSection">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" alt="" className='star'/>
            <p className="rating">{props.rating}</p>
            <p className='bullet'>&#x2022;</p>
            <p className="location">{props.country}</p>
        </div>
        <p>{props.about}</p>
        <p><strong>{props.price}</strong>/person </p>
      </div>
    </div>
  )
}
