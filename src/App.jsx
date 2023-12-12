import React from 'react'
import Navbar from './components/page1/Navbar';
import Hero from './components/page1/Hero';
import Features from './components/page1/features';
import Intro from './components/page2/introduction';
import Departments from'./components/page3/departments';
import Chain from'./components/page4/chain';
import Admin from './components/admin/admindash';
import Foot from './components/page4/footer';
import Userdash from './components/userd/userdash';


function App() {
  return (
    <div className=''> 
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
    <div>
      <Intro/>
    </div>
    <div>
      <Departments/>
    </div>
    <div>
      <Chain/>
    </div>
    <div>
      <Foot/>
    </div>
    <div>
      <Admin/>
    </div>
    <div>
      <Userdash/>
    </div>
    </div>
  );
}

export default App;
