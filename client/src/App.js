import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import About from  "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup"


const App = () => {
  return (
    <>
    
    <Navbar />   

    <Route path="/components/Home.js">
      <Home />
      </Route>

      <Route path="/about.js">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

    <Route path="/login">
    <Login/>
    </Route>

    <Route path="/signup">
    <Signup />
    </Route>
   

    {/* <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path= "/contact" element={<Contact />} />
    */}
    </>
    )
}

export default App
