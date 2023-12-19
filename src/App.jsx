import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/page1/Hero';
import Features from './components/page1/features';
import Intro from './components/page2/introduction';
import Departments from './components/page3/departments';
import Chain from './components/page4/chain';
import Admin from './components/admin/admindash';
import Foot from './components/page4/footer';
import Userdash from './components/userd/userdash';
import Chatbot from './components/page1/chatbot';
import LogInAsAdmin from './components/LogInAsAdmin';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<div><Hero /><Chatbot /><Features /><Intro /><Departments /><Chain /><Foot /></div>} />
          <Route path="/dashboardAdmin" element={<Admin />} />
          <Route path="/dashboardUser" element={<Userdash />} />
          <Route path="/LogInAsAdmin" element={<LogInAsAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
