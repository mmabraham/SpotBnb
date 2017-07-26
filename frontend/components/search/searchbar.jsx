import React from 'react';
import LocationPicker from './location_picker';
import { DateRangePicker } from 'react-dates';
import * as moment from 'moment';


export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startDate: moment.default(), endDate: moment.default().add(1,'days')};
    this.handleChange = this.handleChange.bind(this);
    this.handlePlacechange = this.handlePlacechange.bind(this);
  }

  validCapacities() {
    const MAX_CAPACITY = 16, items = [];
    for (let i = 0; i < MAX_CAPACITY; i++) {
      items.push(<option key={i} value={i} >{`${i} Guests`}</option>);
    }
    return items;
  }

  handleChange(type) {
    return (e) => {
      e.preventDefault();
      this.props.updateFilter(type, e.target.value);
    };
  }

  handlePlacechange(place) {
    this.props.setMapCenter(place);
    this.props.history.push('/spots');
  }

  handleDatePick(dates) {
    this.setState(dates);
    if (this.state.focusedInput === 'endDate') {
      this.props.updateFilter(
        'dates',
        {start_date: dates.startDate.toDate(), end_date: dates.endDate.toDate()}
      );
    }
  }

  render() {
    return (
      <div className="searchbar">
          <LocationPicker
            handler={(_, place) => this.handlePlacechange(place)}
            placeholder={'' && '\u2315'}
          />
        <label>
          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={(dates) => this.handleDatePick(dates)}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
        </label>
        <label>
          <select
            className={this.props.errors && this.props.errors.capacity ? 'invalid' : null}
            value={this.state.capacity}
            onChange={this.handleChange('capacity')}
          >
            {this.validCapacities()}
            <option key={16} value={16} >16+ Guests</option>
          </select>
        </label>
      </div>
    );
  }
}
