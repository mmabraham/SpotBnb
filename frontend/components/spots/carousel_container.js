import SpotIndex from './spot_index';
import { fetchAllSpots } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    spots: asArray(state.spots).slice(0, 3),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllSpots: () => dispatch(fetchAllSpots()),
  };
};

export default connect(mapStateToProps)(SpotIndex)
