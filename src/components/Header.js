import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <nav className = "navbar navbar-expand-lg navbar-dark bg-primary">
        <div className = "collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
                <li><Link className="nav-link" to='/'>Home</Link></li>
                <li><Link className="nav-link" to='/cartList'>Cart List</Link></li>
            </ul>
        </div>
      </nav>
  )
}

export default Header;