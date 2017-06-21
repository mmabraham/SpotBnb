import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSpots();
  }

  render() {
    const spots = this.props.spots.map(spot => (
        <GridTile
          className="grid-list-item"
          key={spot.id}
          title={`$${spot.price} * ${spot.title}`}
          subtitle={spot.type}
          actionIcon={<IconButton><FavoriteBorder color="white" /></IconButton>}
        >
          <img src={spot.img} />
        </GridTile>
      )
    );
    return (
      <div className="grid-list-container">
        <GridList cols={3} className="grid-list" cellHeight={260} >
          {spots}
        </GridList>
      </div>
    )
  }
}
