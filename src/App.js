import React from "react"; //We import the useState Hook from React. It lets us keep local state in a function component.
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import OurMission from "./components/pages/OurMission";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
    
    {/* <Donor/> */}
   
    
      <Router>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
