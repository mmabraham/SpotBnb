import React from 'react';

export class LocationPicker extends React.Component {
  constructor(props) {
    super(props);

    this.handler = this.props.HandleChange;
  }

  componentDidMount() {
    this.setupAutocomplete();
  }

  setupAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.place);
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const location = autocomplete.getPlace().geometry.location;
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
          placeholder={this.state.location || 'Address'}
          className={this.props.errors && this.props.errors.lng ? 'invalid' : null}
        />
        <span className="errors" >{this.props.errors ? this.props.errors.lng : ''}</span>
      </label>
    );
  }

}
