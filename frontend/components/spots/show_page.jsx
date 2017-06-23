import React from 'react';
import Rating from 'react-rating';
import Picker from '../bookings/booking_form';

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
            <h1>{spot.title}</h1>
            <div className="reviews-container" onClick={this.props.handleToggle}>
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
                this.props.toggleState === 'on' ?
                (<ReviewIndex
                  reviews={this.props.reviews}
                  fetchReviews={this.props.fetchReviews}
                />) :
                null
              }
              </div>
            </div>
          <h6>{`${spot.spot_type}  --  ${spot.capacity}`}</h6>
          <hr />
          <h2>About this listing</h2>
          <p>{spot.description}</p>
          <div className="booking-form">
            
          </div>
        </div>
      </main>
    );
  }
}
