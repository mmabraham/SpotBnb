import React from 'react';
import Rating from 'react-rating';
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
            <div>{`$${spot.price}     ${spot.title}`}</div>
            <div className="spot-list-subtitle">{`${spot.spot_type} · ${spot.capacity} beds`}</div>
            <div>
              <Rating
                className="rating-stars"
                placeholderRate={parseFloat(spot.rating)}
                placeholder="fa fa-star fa-2x"
                empty="fa fa-star-o fa-2x"
                full="fa fa-star fa-2x"
                readonly={true}
              />
            <span className='spot-list-rating'>{` ${spot.num_reviews} reviews` }</span>
            </div>
          </div>
        </div>
      )
    );
    return (
      <div className="grid-list-container ">
        <div className="grid-list" >
          {spots}
        </div>
      </div>
    );
  }
}
