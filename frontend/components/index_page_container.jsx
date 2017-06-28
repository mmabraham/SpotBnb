import { connect } from 'react-redux';
import { asArray } from '../reducers/selectors';
import { fetchAllSpots } from '../actions/spot_actions';
import { updateBounds } from '../actions/filter_actions';
import { registerMapControl } from '../actions/map_actions';
import { withRouter } from 'react-router-dom';
import IndexPage from './index_page';

const mapStateToProps = (state) => {
  return {
      spots: asArray(state.spots),
      place: state.maps.place,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllSpots: () => dispatch(fetchAllSpots()),
    updateBounds: bounds => dispatch(updateBounds(bounds)),
    showSpot: (id) => ownProps.history.push(`/spots/${id}`),
    registerMapControl: (callback) => dispatch(registerMapControl(callback)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(IndexPage)
);
