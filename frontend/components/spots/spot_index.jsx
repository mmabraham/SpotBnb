import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSpots();
  }

  render() {
    const spots = this.props.spots.map(spot => (<GridTile key={spot.id} title={spot.title} />));
    return (
      <div className="grid-list-container">
        <GridList className="grid-list">
          {spots}
        </GridList>
      </div>
    )
  }
}
