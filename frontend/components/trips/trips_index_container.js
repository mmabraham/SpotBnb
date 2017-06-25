import { connect } from 'react-redux';
import { fetchTrips, cancelBooking } from '../../actions/booking_actions';
import { tripsInfo } from '../../reducers/selectors';
import TripsIndex from './trips_index';

const mapStateToProps = state => {
  return {
    trips: tripsInfo(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrips: () => dispatch(fetchTrips()),
    cancelBooking: (id) => dispatch(cancelBooking(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripsIndex);
