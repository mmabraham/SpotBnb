import Carousel from './carousel';
import { fetchAllSpots } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    spots: asArray(state.spots),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllSpots: () => dispatch(fetchAllSpots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
