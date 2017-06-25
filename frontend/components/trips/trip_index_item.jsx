import React from 'react';
import SpotIndexItem from '../spots/spot_index_item';
import Avatar from 'material-ui/Avatar';

const TripIndexItem = ({trip}) => {

  // aws not yet working
  const avatar = trip.host.img_url && false ? (
    <Avatar size={60} src={trip.host.img_url} />
  ) : (
    <Avatar size={60}>{trip.host.username[0].toUpperCase()}</Avatar>
  );
  return (
    <li className="trip-item">
      <SpotIndexItem spot={trip.spot}/>
      <div className="host-info">
        {avatar}
        <h6>{trip.host.username}</h6>
      </div>
      <div className="trip-info">
        <ul>
          <li>{`${trip.duration} days`}</li>
          <li>Check in: {trip.start_date.toDateString()}</li>
          <li>Check out: {trip.end_date.toDateString()}</li>
          <li>Total: {`$${trip.duration * trip.spot.price}`}</li>
        </ul>
      </div>
    </li>
  )
}

export default TripIndexItem;
