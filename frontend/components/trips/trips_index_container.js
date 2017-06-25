import { connect } from 'react-redux';
import { fetchTrips } from '../../actions/booking_actions';
import { bookingsInfo } from '../../reducers/selectors';
import TripsIndex from './trips_index';

const mapStateToProps = state => {
  return {
    bookings: bookingsInfo(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrips: () => dispatch(fetchTrips()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripsIndex);
