import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import Searchbar from './search/searchbar_container';

const Navbar = (props) => {
  if (props.currentUser) {
    const avatar = props.currentUser.avatar_url ? (
      <Avatar size={30} src={props.currentUser.avatar_url} />
    ) : (
      <Avatar size={30}>{props.currentUser.username[0].toUpperCase()}</Avatar>
    );

    return (
      <nav className="main-nav nav-logged-in">
        <ul className="left-nav-items">
          <li className="img-container logo-container">
            <NavLink to="/spots" className="img-container logo-container">
              <img src={window.images.logo} />
            </NavLink>
          </li>
          <li>
            <Route path='/:xxx' component={Searchbar} />
          </li>
        </ul>
        <ul className="right-nav-items">
          <li>
            <NavLink to="/spots/new">Become a Host</NavLink>
          </li>
          <li>
            <NavLink to="/mytrips">Trips</NavLink>
          </li>
          <li>
            <button
              className="logout-button"
              onClick={() => props.logout().then(() => props.history.push('/login'))}>
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
            <NavLink to="/spots" className="img-container logo-container">
              <img src={window.images.logo} />
            </NavLink>
          </li>
          <li>
            <Route path='/:xxx' component={Searchbar} />
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
