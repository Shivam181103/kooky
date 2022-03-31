import React from 'react'
import './landing.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
     <>
      <nav class="navbar navii navbar-expand-lg navbar-light  ">
  <div class="container-fluid">
     
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav nav-list">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/'   href="#feature">Features</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/ordernow">Shipping</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
     </>
  )
}

export default Navbar