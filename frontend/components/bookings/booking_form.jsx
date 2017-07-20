import React from 'react';
import { DateRangePicker } from 'react-dates';
import * as moment from 'moment';

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startDate: moment.default(), endDate: moment.default()};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isDateBlocked = this.isDateBlocked.bind(this);
  }

  isDateBlocked(date) {
    return this.props.bookings.some(
      b => date.isBetween(b.start_date, b.end_date, 'days', '[]')
    );
  }

  validCapacities() {
    const MAX_CAPACITY = this.props.spot.capacity, items = [];
    for (let i = 0; i < MAX_CAPACITY + 1; i++) {
      items.push(<option key={i} value={i} >{`${i} Guests`}</option>);
    }
    return items;
  }

  duration() {
    if (!this.state.endDate) return 0;
    return this.state.endDate.diff(this.state.startDate, 'days');
  }

  handleChange(formType) {
    return (e) => {
      this.setState({[formType]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking({
      start_date: this.state.startDate.toDate(),
      end_date: this.state.endDate.toDate(),
      spot_id: this.props.spot.id,
    })
      .then(() => this.props.history.push('/mytrips'))
      .fail((e) => this.props.displayModal()) ;
  }

  render() {
    return (
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <div className="booking-price">
          <i className="fa fa-bolt" aria-hidden="true"></i>
          <span className="price">
            {`$${this.props.spot.price} `}
          </span>
          <span>per night</span>
        </div>
        <div className="booking-form-form">
          <label className="check-in-out">
            <div>Check In</div>
            <div>Check Out</div>
          </label>

          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            isOutsideRange={this.isDateBlocked}
            />

          <label>
            <div>Guests</div>
            <select onChange={this.handleChange('capacity')}>
              {this.validCapacities()}
            </select>
          </label>
          {this.state.startDate.isBefore(this.state.endDate) ? (
            <div className="booking-pricing-info">
              <div>
                <span>{`$${this.props.spot.price} x ${this.duration()} nights `}</span>
                <span>{` $${this.props.spot.price * this.duration()}`}</span>
              </div>
              <div>
                <span>Service fee</span>
                <span>{`$${25}`}</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>{`$${this.props.spot.price * this.duration() + 25}`}</span>
              </div>
            </div>
          ) : null}
          <button className="btn">
            Book
          </button>
          <small>
            You won't be charged yet
          </small>
        </div>
      </form>
    );
  }
}
