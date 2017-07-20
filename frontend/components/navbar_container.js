import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { clearFilters } from '../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import { displayModal } from '../actions/modal_actions';
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
    displayLogin: (e) => {e.stopPropagation(); dispatch(displayModal('LoginForm'))},
    displaySignup: (e) => {e.stopPropagation(); dispatch(displayModal('SignupForm'))},
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
