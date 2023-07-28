import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <nav>
  <ul className="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Faq</a></li>
  </ul>
  <button>Login</button>
</nav>
    </div>
  )
}

export default Navbar
