import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const Navbar = (props) => {
  if (props.currentUser) {
    return (
      <nav className="main-nav nav-logged-in">
        <ul className="right-nav-links">
          <li>
            <NavLink to="#">Host</NavLink>
          </li>
          <li>
            <NavLink to="#">Trips</NavLink>
          </li>
          <li>
            <button onClick={props.logout}>
              Logout
            </button>
          </li>
          <li>
            <img src="" />
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav nav-logged-out">
        <ul className="right-nav-links">
          <li>
            <NavLink to="#">Host</NavLink>
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

// export default Navbar;

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
