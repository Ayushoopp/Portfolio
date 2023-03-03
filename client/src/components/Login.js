import React from 'react'
import "./../App.css"
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
     <form className="m-auto signupForm" action="">
      <p>Email:</p>
    <input type="email" name="email" placeholder='email@'  />
    <p>Password :</p>
    <input type="password" name="password" id="" placeholder='password' />
     </form>
     <NavLink to="/signup" > Don't have an account</NavLink>
    </div>
  )
}

export default Login
