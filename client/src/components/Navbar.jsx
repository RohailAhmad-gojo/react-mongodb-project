import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <nav className='navbar bg-dark container'>
                <h4 className='navbarLinks'><Link to="/" className='link'>Home</Link></h4>
                <h4 className='navbarLinks'><Link to="/notes" className='link'>Notes</Link></h4>
                <h4 className='navbarLinks'><Link to="/create" className='link'>Create Note</Link></h4>
        </nav>
    </div>
  )
}

export default Navbar