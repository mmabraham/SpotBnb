import React from 'react';
import { Link } from 'react-router-dom';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spots = this.props.spots.map(spot => (
        <div className="grid-list-item" key={spot.id}>
          <Link to={`/spots/${spot.id}`}><img src={spot.img} /></Link>
          <div className="list-item-info">
            <div>{`$${spot.price} * ${spot.title}`}</div>
            <div>{`${spot.spot_type} ${spot.capacity} beds`}</div>
          </div>
        </div>
      )
    );
    return (
      <div className="grid-list-container col-2-3">
        <div className="grid-list" >
          {spots}
        </div>
      </div>
    );
  }
}
