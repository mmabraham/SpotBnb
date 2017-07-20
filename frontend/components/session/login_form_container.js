// import LoginForm from './login_form';
// import SignupForm from './signup_form_container';
import { connect } from 'react-redux';
import { displayModal } from '../../actions/modal_actions';
import { login, receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(ownProps.currentUser),
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors({})),
    displayModal: () => dispatch(displayModal('SignupForm')),
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
