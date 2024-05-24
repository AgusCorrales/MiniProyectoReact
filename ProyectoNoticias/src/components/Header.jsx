import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <span className='nav-link'><Link to="/">Home</Link> </span>
            <span className='nav-link'><Link to="/form">Form</Link> </span>
            <span className='nav-link'><Link to="/news">News</Link> </span>
        </nav>
    </div>
  )
}

export default Header