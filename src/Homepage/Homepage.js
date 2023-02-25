import React from 'react'
import "./Homepage.css"
import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div className='body'> 
        <h2 data-text="Dropbox">Dropbox</h2>

       <div>
        <h3 href="#"><Link to="/login">Login</Link></h3>
        <h3 href="#"><Link to="/register">Register</Link></h3>
       </div>
    </div>
  )
}

export default Homepage