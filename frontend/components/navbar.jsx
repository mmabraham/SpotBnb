import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  if (props.currentUser) {
    return (
      <nav className="main-nav nav-logged-in">
        <ul className="left-nav-items">
          <li className="img-container logo-container">
            <img src="" />
          </li>
        </ul>
        <ul className="right-nav-items">
          <li>
            <NavLink to="#">Become a Host</NavLink>
          </li>
          <li>
            <NavLink to="#">Trips</NavLink>
          </li>
          <li>
            <button onClick={props.logout}>
              Logout
            </button>
          </li>
          <li className="img-container profile-pic-container">
            <img
              className="profile-pic"
              src="https://www.peerspace.com/web-templates/assets/images/no_avatar_placeholder.png" />
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav nav-logged-out">
        <ul className="left-nav-items">
          <li className="img-container logo-container">
            <img src="" />
          </li>
        </ul>
        <ul className="right-nav-items">
          <li>
            <NavLink to="#">Become a Host</NavLink>
          </li>
          <li>
            <NavLink to="#">Trips</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
