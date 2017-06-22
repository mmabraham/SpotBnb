import React from 'react';
import { Link } from 'react-router-dom';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSpots();
  }

  render() {
    const spots = this.props.spots.map(spot => (
        <div className="grid-list-item" key={spot.id}>
          <Link to={`/spots/${spot.id}`}><img src={spot.img} /></Link>
          <div className="list-item-info">
            {`$${spot.price} * ${spot.title}`}
            {spot.type}{${spot.capacity}}
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
    )
  }
}
