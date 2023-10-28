import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Features from './components/features';

function App() {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  );
}

export default App;
