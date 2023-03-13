import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

const Contact = () => {
  return (
   <>
   <div className="d-flex flex-column">
      <h1 >Email Us For Any Queries</h1>
      <p>Email: ayushmehrotra099@gmail.com</p>

      <h2>Social Media</h2>
    <a href='https://github.com/Ayushoopp'>github</a>
    </div>

    {/* contact us form */}

    <div class="mb-3 pt-5">
    <h3>Get in Touch</h3>
  <label for="exampleFormControlInput1" class="form-label">Email address:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" required="true" placeholder="Your Email" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1"  class="form-label">Your Message</label>
  <textarea class="form-control" requried="true" id="exampleFormControlTextarea1" cols="30" rows="3" placeholder='lorem ipsum'></textarea>
</div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </>
  )
}

export default Contact
