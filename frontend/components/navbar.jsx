import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const Navbar = (props) => {
  if (props.currentUser) {
    return (
      <header>
        <h1>{`Welcome ${props.currentUser.username}!`}</h1>
        <button onClick={props.logout}>
          Logout
        </button>
      </header>
    );
  } else {
    return (
      <header>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </header>
    );
  }
};

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
