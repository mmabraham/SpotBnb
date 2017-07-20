import { Route, withRouter, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { displayModal } from '../actions/modal_actions';

const Protected = (props) => {
  const Component = props.component;
  return (
    <Route path={props.path} render={() => {
      debugger
      if (!props.loggedIn) {
        props.popupModal();
      }
      return props.loggedIn ? (
          <Component {...props}/>
        ) : (
          <Redirect to="/spots" />
        )
    }}/>
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.user),
    modal: state.modal,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    popupModal: () => dispatch(displayModal('LoginForm')),
  }
}

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Protected)
);
