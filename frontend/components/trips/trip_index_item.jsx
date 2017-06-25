import React from 'react';
import { Link } from 'react-router-dom';

const TripIndexItem = ({trip}) => {
  return (
    <li>
      <h2>{trip.spot.title}</h2>
      <Link to={`/spots/${trip.spot.id}`}>
        <img src={trip.spot.img}/>
      </Link>
    </li>
  )
}

export default TripIndexItem;
