import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';

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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
