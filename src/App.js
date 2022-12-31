import React from "react"; //We import the useState Hook from React. It lets us keep local state in a function component.
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import OurMission from "./components/pages/OurMission";
import AboutUs from "./components/pages/AboutUs";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <OurMission />
        <AboutUs />
        <SignUp />
        <Contact />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/ourmission" component={OurMission} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/sign-up" component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
