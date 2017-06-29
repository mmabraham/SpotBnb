import React from 'react';
import Rating from 'react-rating';
import BookingForm from '../bookings/booking_form';
import ReviewIndex from './review_index';

export default class ShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.id);
  }

  render() {
    const { spot } = this.props;
    if (!spot ) return null;

    // temporary (until supported by db)
    spot.rooms = Math.ceil(spot.capacity / 2.5);
    spot.beds = Math.ceil(spot.capacity / 1.3 );

    return (
      <main>
        <div className="full-width">
          <div className="full-width-image">
            <img src={spot.img}/>
          </div>
        </div>

        <div className="spot-details col-2-3">
          <div className="info">
            <div className="links">
              <a>Overview </a><span> · </span>
              <a>Reviews </a><span> · </span>
              <a>The Host </a><span> · </span>
              <a>Location </a>
            </div>

            <h1>{spot.title}</h1>

            <div className="reviews-container" onClick={this.props.toggle}>
              <div>
                {spot.city || null}
                <span>{`$`}</span>
                <Rating
                  className="rating-stars"
                  placeholderRate={parseFloat(spot.rating)}
                  placeholder="fa fa-star fa-2x"
                  empty="fa fa-star-o fa-2x"
                  full="fa fa-star fa-2x"
                  readonly={true}
                  />
                <span>{`${spot.num_reviews} Reviews`}</span>
              </div>
              {
                this.props.reviewToggleState === 'on' ?
                (<ReviewIndex
                  reviews={this.props.reviews}
                  fetchReviews={() => this.props.fetchReviews(spot.id)}
                  />) :
                  null
                }
              </div>

            <ul className="icons">
              <div>
                <img src={window.images.home} />
                <span>{`${spot.spot_type}`}</span>
              </div>
              <div>
                <img src={window.images.guests} />
                <span>{`${spot.capacity} Guest${spot.capacity > 1 ? 's' : ''}`}</span>
              </div>
              <div>
                <img src={window.images.room} />
                <span>{`${spot.rooms} Bedroom${spot.rooms > 1 ? 's' : ''}`}</span>
              </div>
              <div>
                <img src={window.images.bed} />
                <span>{`${spot.beds} Bed${spot.beds > 1 ? 's' : ''}`}</span>
              </div>
            </ul>
            <hr />
            <h2>About this listing</h2>
            <p>{spot.description}</p>
          </div>

          { currentUser && currentUser.id === spot.host_id? null : (
            <div className="booking-form-container">
              <BookingForm
                spot={spot}
                createBooking={this.props.createBooking}
                history={this.props.history}
                bookings={this.props.bookings}
                />
            </div>
          )}
        </div>
      </main>
    );
  }
}
