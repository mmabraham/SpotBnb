import React from 'react';
import { Link } from 'react-router-dom';
import SpotIndexItem from '../spots/spot_index_item';

const TripIndexItem = ({trip}) => {
  console.log(trip.duration)
  return (
    <li className="trip-item">
      <SpotIndexItem spot={trip.spot}/>
      <div className="trip-info">
        <ul>
          <li>Check in: {trip.start_date.toDateString()}</li>
          <li>Check out: {trip.end_date.toDateString()}</li>
          <li>Total: {`$${trip.duration * trip.spot.price}`}</li>
          <li>Host: {trip.host.username}
            <img src={trip.host.avatar}></img>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default TripIndexItem;
