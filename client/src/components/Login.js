import React from 'react'
import "./../App.css"
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from 'react-router-dom'
import loginlogo from "./../img/loginlogo.jpg"

const Login = () => {
  return (
    <div className="Box">
     <img src={loginlogo} alt="" />
     <form action="">
      <h2>Email:</h2>
        <input type="email" name="email" placeholder='email@'  />
      <br />
    <h2>Password :</h2>
    <input type="password" name="password" id="" placeholder='password' />
    <br />
   
    <p></p>
    <button type="submit" className="btn btn-primary"> Login</button>
     </form>
     <NavLink to="/signup" > Don't have an account</NavLink>
    </div>
  )
}

export default Login
