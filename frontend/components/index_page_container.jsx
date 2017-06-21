import { connect } from 'react-redux';
import { asArray } from '../reducers/selectors';
import { fetchAllSpots } from '../actions/spot_actions';
// import { updateBounds } from '../../actions/filter_actions';
import IndexPage from './index_page';

const mapStateToProps = (state) => {
  return {
      spots: asArray(state.spots),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllSpots: () => dispatch(fetchAllSpots()),
    // updateBounds: bounds => dispatch(updateBounds(bounds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
