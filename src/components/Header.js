import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li><Link className="nav-link" to='/'>Home</Link></li>
          <li><Link className="nav-link" to='/cartList'>Cart List {props.componentCartItems.length}</Link></li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return({
    componentCartItems: state.cartItems
  })
 //  componentCartItems: state.cartItems
};


// connect react component with redux and it accepts two parametr and return a function to Booklist
export default connect(mapStateToProps)(Header);
