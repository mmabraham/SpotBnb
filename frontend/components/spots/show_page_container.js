import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShowPage from './show_page';
import { fetchSpot } from '../../actions/spot_actions';
import { fetchReviews, toggle } from '../../actions/review_actions';
import { createBooking } from '../../actions/booking_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    id: ownProps.match.params.id,
    spot: state.spots[ownProps.match.params.id],
    reviews: state.reviews,
    reviewToggleState: state.reviewToggleState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    fetchReviews: () => dispatch(fetchReviews(id)),
    toggle: () => dispatch(toggle()),
    createBooking: booking => dispatch(createBooking(booking)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowPage)
);
