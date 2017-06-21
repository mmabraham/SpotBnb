import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';

const Navbar = (props) => {
  if (props.currentUser) {
    const avatar = props.currentUser.image_url ? (
      <Avatar size={30} src={props.currentUser.image_url} />
    ) : (
      <Avatar size={30}>{props.currentUser.username[0].toUpperCase()}</Avatar>
    )

    return (
      <nav className="main-nav nav-logged-in">
        <ul className="left-nav-items">
          <li className="img-container logo-container">
            <NavLink to="/">
              <img src="" />
            </NavLink>
          </li>
        </ul>
        <ul className="right-nav-items">
          <li>
            <NavLink to="/spots/new">Become a Host</NavLink>
          </li>
          <li>
            <NavLink to="#">Trips</NavLink>
          </li>
          <li>
            <button onClick={() => props.logout().then(() => props.history.push('/login'))}>
              Logout
            </button>
          </li>
          <li>
            {avatar}
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
