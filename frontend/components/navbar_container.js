import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { clearFilters } from '../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    clearFilters: () => dispatch(clearFilters()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
