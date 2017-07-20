import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { displayModal } from '../../actions/modal_actions';
import { signup, receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(ownProps.currentUser),
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors({})),
    displayModal: () => dispatch(displayModal('LoginForm')),
    closeModel: () => dispatch(displayModal('')),
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
