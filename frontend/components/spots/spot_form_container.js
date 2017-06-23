
import { connect } from 'react-redux';
import SpotForm from './spot_form';
import { createSpot } from '../../actions/spot_actions';
import { receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSpot: (spot) => dispatch(createSpot(spot)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SpotForm)
);
