import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(ownProps.currentUser),
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const action = formType === "login" ? login : signup;
  return {
    processForm: (user) => dispatch(action(user)),
    formType,
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
