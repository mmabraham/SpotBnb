import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Searchbar from './searchbar';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => {
  return {
    filters: state.filters,
    changeMap: state.map.callback,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (type, filter) => dispatch(updateFilter(type, filter)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Searchbar)
);
