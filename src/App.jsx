import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/page1/Hero";
import Features from "./components/page1/features";
import Intro from "./components/page2/introduction";
import Departments from "./components/page3/departments";
import Chain from "./components/page4/chain";
import Admin from "./components/admin/admindash";
import Foot from "./components/page4/footer";
import Userdash from "./components/userd/userdash";
import Chatbot from "./components/page1/chatbot";
import LogInAsAdmin from "./components/LogInAsAdmin";
import { useState, useEffect } from "react";

function App() {
  // fetch("http://127.0.0.1:8000/api").then(res => {
  //   console.log(res.json());
  // })
  const [userMessage, setUserMessage] = useState('');
  const [tmp, setTmp] = useState("");
  const handleUserMessage = (message) => {
    setUserMessage(message);
    // Perform any additional logic with the user message here
  };

  useEffect(() => {
    // GET Request
    fetch("http://127.0.0.1:8000/api")
      .then((response) => response.json())
      .then((data) => {
        setTmp(data); // Set the response data to tmp state
      })
      .catch((error) => console.error("GET Error:", error));
  }, []);

  const dataToSend = { msg: userMessage };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api", {
      method: "POST",
      // headers: {
      //   'Content-Type': 'text/plain',
      // },
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => console.log("POST Response:", data))
      .catch((error) => console.error("POST Error:", error));
  }, []);
  // // POST Request

  return (
    <Router>
      <div>
        <Navbar />
        <div>
          {tmp &&
            tmp.map((index) => {
              return (
                <>
                  <span>{index.department_name}</span>
                  <span>{index._id}</span>
                  <br></br>
                </>
              );
            })}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Chatbot onUserMessage={handleUserMessage} tmp={tmp} />
                <Features />
                <Intro />
                <Departments />
                <Chain />
                <Foot />
              </div>
            }
          />
          <Route path="/dashboardAdmin" element={<Admin />} />
          <Route path="/dashboardUser" element={<Userdash />} />
          <Route path="/LogInAsAdmin" element={<LogInAsAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;