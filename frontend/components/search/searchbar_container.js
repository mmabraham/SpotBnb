import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Searchbar from './searchbar';
import { updateFilter } from '../../actions/filter_actions';
import { setMapCenter } from '../../actions/map_actions';

const mapStateToProps = state => {
  return {
    filters: state.filters,
    changeMap: state.changeMap,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (type, filter) => dispatch(updateFilter(type, filter)),
    setMapCenter: (place) => dispatch(setMapCenter(place))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Searchbar)
);
