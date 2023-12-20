import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import'./chain.css'

const chain = () => {
  return (
    <div>
      <div className='works1'>
        <div className='works flex justify-center '>
            <h1>
                THIS IS HOW <span>SAMAYA</span> WORKS
            </h1>
            <div className='circle1'>
              <img src="src\assets\Frame 8.png" alt="" />
            </div>
            <div className='arrow1'><FaArrowRight /></div>
            <div className='circle2'><h1>User Grievance</h1></div>
            <div className='arrow2'><FaArrowRight /></div>
            <div className='circle3'><img src="src\assets\transformers.png" alt="" /></div>
            <div className='arrow3'><FaArrowRight /></div>
            <div className='circle4'><img src="src\assets\tu.png" alt="" /></div>
        </div>
        </div>
      </div>
  )
}

export default chain
