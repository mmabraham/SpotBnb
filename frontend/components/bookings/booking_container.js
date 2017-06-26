import { connect } from 'react-redux';
import { createBooking } from '../../actions/bookings';

const mapDispatchToProps = (dispatch) => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
  };
};
