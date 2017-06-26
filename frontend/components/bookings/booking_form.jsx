import React from 'react';
import { DateRangePicker } from 'react-dates';
import * as moment from 'moment';

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startDate: moment.default(), endDate: moment.default()};
  }

  render() {
    // console.log(this.state.startDate);
    return (
      <DateRangePicker
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
    );
  }
}
