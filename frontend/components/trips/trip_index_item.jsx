import React from 'react';
import Avatar from 'material-ui/Avatar';
import SpotIndexItem from '../spots/spot_index_item';
import ReviewForm from '../reviews/review_form';

const TripIndexItem = ({trip, cancelBooking}) => {

  const avatar = trip.host.img_url ? (
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
          <li>
            <span>Check in: </span><span>{trip.start_date.toDateString()}</span>
          </li>
          <li>
            <span>Check out: </span><span>{trip.end_date.toDateString()}</span>
          </li>
          <li>
            <span>Total: </span><span>{`$${trip.duration * trip.spot.price}`}</span>
          </li>
        </ul>
        <button className="btn" onClick={() => cancelBooking(trip.id)}>
          Cancel This Trip
        </button>
      </div>
      <ReviewForm />
    </li>
  )
}

export default TripIndexItem;
