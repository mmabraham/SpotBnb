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

            <hr />
            <img src={window.images.home} />
            <img src={window.images.room} />
            <img src={window.images.guests} />
            <img src={window.images.bed} />



            <i className="fa fa-users" aria-hidden="true"></i>
            <h1>{spot.title}</h1>

            <div className="reviews-container" onClick={this.props.toggle}>
              <div>
                {spot.location || null}
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
            <h6>{`${spot.spot_type}  --  ${spot.capacity}`}</h6>
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
