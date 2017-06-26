import React from 'react';

export default class LocationPicker extends React.Component {
  constructor(props) {
    super(props);

    // props:
    // errors
    // location
    // HandleChange({lat, lng, location})

    this.handler = this.props.handler;
  }

  componentDidMount() {
    this.setupAutocomplete();
  }

  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.autocomplete);
  }

  setupAutocomplete() {
    this.autocomplete = new google.maps.places.Autocomplete(this.place);
    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      const location = this.autocomplete.getPlace().geometry.location;
      const lat = location.lat();
      const lng = location.lng();
      this.handler({lat, lng, location: this.place.value});
    });
  }

  render() {
    return (
      <label>
        <input
          ref={ref => this.place = ref}
          placeholder={this.props.location || 'Address'}
          className={this.props.errors && this.props.errors.lng ? 'invalid' : null}
        />
        <span className="errors" >{this.props.errors ? this.props.errors.lng : ''}</span>
      </label>
    );
  }

}
