import React from 'react'
import './card.css'

export default function Card() {
  return (
    <div className='card'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU" className='cardImg' alt="" />
      <div className="cardContent">
        <div className="aboutSection">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" alt="" className='star'/>
            <p className="rating">5.0 (6)</p>
            <p className='bullet'>&#x2022;</p>
            <p className="location">USA</p>
        </div>
        <p>Life lessons from Koth Zafaris</p>
        <p><strong>From $138</strong>/person </p>
      </div>
    </div>
  )
}
