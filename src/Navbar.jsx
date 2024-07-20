import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=> {
  return (
    <div>
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/addproduct'>add product</Link></button>
      <button><Link to='/login'>Login</Link></button>
    </div>
  )
}

export default Navbar
