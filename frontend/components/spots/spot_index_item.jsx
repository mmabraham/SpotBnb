import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const SpotIndexItem = ({spot}) => (
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
);

export default SpotIndexItem;
