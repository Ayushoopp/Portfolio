import React from "react";
import { Route , Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home" 
import "./App.css";
import About from  "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup"
import ErrorPage from "./components/ErrorPage.js";

const App = () => {
  return (
    <>
    <Navbar />  
    <Routes>
    <Route exact path="/" element={<Home />} />
  
    <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<Signup />} />
    
    <Route element={<ErrorPage />} />
    </Routes>
    </>
    )
}

export default App
