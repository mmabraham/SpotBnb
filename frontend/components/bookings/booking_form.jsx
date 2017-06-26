import React from 'react';
import { DateRangePicker } from 'react-dates';
import * as moment from 'moment';

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startDate: moment.default(), endDate: moment.default()};
  }

  isDateBlocked(date) {

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

  render() {
    return (
      <form className="booking-form">
        <label className="booking-price">
          <i className="fa fa-bolt" aria-hidden="true"></i>
          <span className="price">
            {`$${this.props.spot.price} `}
          </span>
          <span>per night</span>
        </label>
        <label className="check-in-out">
          <span>Check In</span>
          <span>Check Out</span>
        </label>

        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          />

        <label>
          <div>Guests</div>
          <br />
          <select>
            {this.validCapacities()}
          </select>
        </label>
        <div>
          <span>{`$${this.props.spot.price} x ${this.duration()} nights `}</span>
          <span>{` $${this.props.spot.price * this.duration()}`}</span>
        </div>
        <hr />
        <div>
          <span>Serivice fee</span>
          <span>{`$${25}`}</span>
        </div>
        <hr />
        <div>
          <span>Total</span>
          <span>{`$${this.props.spot.price * this.duration() + 25}`}</span>
        </div>
        <button className="btn">
          Book
        </button>
        <small>
          You won't be charged yet
        </small>
      </form>
    );
  }
}
