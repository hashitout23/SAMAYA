import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import'./chain.css'

const chain = () => {
  return (
    <div>
      <div className='works1'>
        <div className='works'>
            <h1>
                THIS IS HOW SAMAYA WORKS
            </h1>
            <div className='circle1'></div>
            <div className='arrow1'><FaArrowRight /></div>
            <div className='circle2'></div>
            <div className='arrow2'><FaArrowRight /></div>
            <div className='circle3'></div>
            <div className='arrow3'><FaArrowRight /></div>
            <div className='circle4'></div>
        </div>
        <div className='footer'></div>
      </div>
    </div>
  )
}

export default chain
