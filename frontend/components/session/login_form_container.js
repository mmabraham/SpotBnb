import LoginForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(ownProps.currentUser),
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
