import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(ownProps.currentUser),
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
