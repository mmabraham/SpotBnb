import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShowPage from './show_page';
import { fetchSpot } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    id: ownProps.match.params.id,
    spot: state.spots[ownProps.match.params.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowPage)
);
