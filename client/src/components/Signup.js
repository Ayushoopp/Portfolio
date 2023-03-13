import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import signupLogo from "../signUp.avif"
import "./../App.css"
import { NavLink } from 'react-router-dom';


const Signup = () => {
  
  const [user,setUser] = useState({
    name:'', email:'', phone:'',password:'',cpassword:'',work:''
  });

  let name, value;
  const handleInputs = (e) =>{
   name= e.target.name;
   value= e.target.value;

   setUser({...user, [name]: value});
  }

const PostData = async (e) =>{
  e.preventDefault();

  const { name, email,phone, work , password,cpassword}= user

  const res = await fetch("/register", {
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      name, email,phone, work , password,cpassword
    })
  })

  const res1 = await res.json()
    if(res1.status === 422 || null){
      window.alert("Registration faled");
      console.log(res1.status || null);
    } else {
      window.alert("Registration Successful");
     
    }

}


  return (
    <div>

  <body class="text-center">
    
<main class="form-signin w-100 m-auto">
    <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
    
    <img class="mb-4 " src={signupLogo} alt="" width="200" height="400" />
  <form method="POST" >
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name </label>
  <input type="text" className="ml-3" name="name"  placeholder="john Doe"
    value={user.name} 
    onChange={handleInputs} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email </label>
  <input type="email"  className="ml-3" name="email" placeholder="name@example.com"
    value={user.email} 
    onChange={handleInputs} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">phone </label>
  <input type="number" className="ml-3" name="phone" placeholder="+91234567890" 
    value={user.phone}
    onChange={handleInputs} /> 
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password </label>
  <input type="text" className="ml-3" name="password" placeholder="john Doe"
    value={user.password} 
    onChange={handleInputs} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">CPassword </label>
  <input type="text" className="ml-3" name="cpassword" placeholder="john Doe"
    value={user.cpassword} 
    onChange={handleInputs} />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Work</label>
  <input type="text" className="ml-3" name="work" placeholder="work"
    value={user.work} 
    onChange={handleInputs} />
</div>
    
    <div className="form-group">
      <button type="submit" onClick={PostData} name="signup" className="form-submit" value="register" >
        Submit
        </button>
    
    </div>
  </form>
  <NavLink to="/Login">Already Have An Account?</NavLink>
</main>
  </body>

    </div>
  )
}

export default Signup
