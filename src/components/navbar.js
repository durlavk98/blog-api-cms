import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='/' className="navbar-brand">
          My Blog
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to='/posts' className='nav-link'>All Posts</Link>
            </li>
            <li className="navbar-item">
              <Link to='/posts/create' className='nav-link'>Create Post</Link>
            </li>
            <li className="navbar-item">
              <Link to='/signup' className='nav-link'>signup</Link>
            </li>
            <li className="navbar-item">
              <Link to='/' className='nav-link'>login</Link>
            </li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default Navbar
