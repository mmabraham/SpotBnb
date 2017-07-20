import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import Searchbar from './search/searchbar_container';

import LoginForm from './session/login_form';
import SignupForm from './session/signup_form_container';

const Navbar = (props) => {
  const Modal = props.modal;
  const rightNav = (
    props.currentUser ? (
        <ul className="right-nav-items">
          <li><NavLink to="/spots/new">Become a Host</NavLink></li>
          <li><NavLink to="/spots">Browse</NavLink></li>
          <li><NavLink to="/mytrips">Trips</NavLink></li>
          <li><button
            className="logout-button"
            onClick={() => props.logout().then(() => props.history.push('/login'))}>
            Logout</button></li>
          <li>
            {props.currentUser.avatar_url ? (
              <Avatar size={30} src={props.currentUser.avatar_url} />
            ) : (
              <Avatar size={30}>{props.currentUser.username[0].toUpperCase()}</Avatar>
            )}
          </li>
        </ul>
      ) : (
        <ul className="right-nav-items">
          <li><NavLink to="/spots/new">Become a Host</NavLink></li>
          <li><NavLink to="/spots">Browse</NavLink></li>
          <li><button onClick={props.displayLogin}>Log In</button></li>
          <li><button onClick={props.displaySignup}>Sign Up</button></li>
        </ul>
      )
    );
  return (
    <nav className="main-nav nav-logged-in">
      <ul className="left-nav-items">
        <li className="img-container logo-container">
          <NavLink
            to="/"
            className="img-container logo-container"
            onClick={props.clearFilters}
          >
            <img src={window.images.logo} />
          </NavLink>
        </li>
        <li>
          <Route path='/:xxx' component={Searchbar} />
        </li>
      </ul>
      {rightNav}
      {Modal}
    </nav>
  );
};

export default Navbar;
