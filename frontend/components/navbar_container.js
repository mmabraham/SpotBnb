import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { clearFilters } from '../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import { displayModal } from '../actions/modal_actions';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form_container';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    modal: state.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    clearFilters: () => dispatch(clearFilters()),
    displayLogin: () => dispatch(displayModal(LoginForm)),
    displaySignup: () => dispatch(displayModal(SignupForm)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
