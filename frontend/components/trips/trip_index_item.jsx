import React from 'react';
import { Link } from 'react-router-dom';
import SpotIndexItem from '../spots/spot_index_item';

const TripIndexItem = ({trip}) => {
  return (
    <li>
      <SpotIndexItem spot={trip.spot} />
    </li>
  )
}

export default TripIndexItem;
