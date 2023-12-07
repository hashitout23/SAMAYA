import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import'./introduction.css'
const introduction = () => {
  return (
    <div>
      <div className='global'>
      <div className='flex'>
        <div className='text'>
            <h1>Time saving Grievance Registration</h1>
            <p>SAMAYA'S GOAL IS TO ASSIT YOU WITH ANY PROBLEMS YOU HAVE IN THE EASE OF LODGING A COMPLAINTS OR GRIEVANCE BY CITIZENS TO THE GOVERNMENT BODIES </p>
        </div>
        <div className='box'>
          <img src="src\assets\Frame 8.png" alt="" />
        </div>
      </div>
      <div>
      
      <Popup trigger={<button className='popup'> <h4>Chatbot SAMAYA</h4> </button>} position="right center">
        <div>PLEASE TELL US YOUR GRIEVANCE </div>
        <button className='click'> <a href="https://masterzer0456-ai1.hf.space">CLICK HERE</a></button>
      </Popup>
    </div>
    </div>
    </div>
  )
}

export default introduction


