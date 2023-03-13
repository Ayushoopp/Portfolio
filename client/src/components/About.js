import React from 'react'
import AboutUsLogo from "./../img/cat-computer.gif";

const About = () => {
  return (
    <>
      <div className="container">
      <form method="">
      <div className="row">
        <div className="col-md-4">
          <img src={AboutUsLogo} alt="" />
          </div>
          <div className="col-md-4">
            <h5>Ayush Mehrotra</h5>
            <h6>Web Developer</h6>
          </div>
          <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul> 
      </div>
      </form>
      </div>
    </>
  )
}

export default About
