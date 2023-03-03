import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import signupLogo from "../signUp.avif"
import "./../App.css"

const Signup = () => {
  return (
    <div>

  <body class="text-center">
    
<main class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
    
    <img class="mb-4 " src={signupLogo} alt="" width="200" height="400" />
  <form class="" >
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name </label>
  <input type="email" className="ml-3"  placeholder="john Doe" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email </label>
  <input type="email"  className="ml-3" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">phone </label>
  <input type="email" className="ml-3" placeholder="+91234567890" /> 
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password </label>
  <input type="email" className="ml-3" placeholder="john Doe" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">CPassword </label>
  <input type="email" className="ml-3" placeholder="john Doe" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Your Profession </label>
  <input type="email" className="ml-3" placeholder="work" />
</div>
    
    <div className="form-group">
      <input type="submit" name="signup" className="form-submit" value="register" />
    
    </div>
  </form>
</main>
  </body>

    </div>
  )
}

export default Signup
