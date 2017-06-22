import React from 'react';
import TextField from 'material-ui/TextField';


export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultForm();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  defaultForm() {
    return {
      host_id: this.props.currentUser.id,
      spot_type: '',
      title: '',
      description: '',
      price: 0,
      capacity: 0,
      img: '',
      lat: '',
      lng: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSpot(this.state)
      .then(() => this.setState(this.defaultForm()));
  }

  handleChange(formType) {
    return (e) => {
      this.setState({[formType]: e.target.value});
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-spot-form auth-form">
        <TextField
          hintText="Testing"
        />
        <label>Type
          <input onChange={this.handleChange('spot_type')} value={this.state.spot_type} />
        </label>
        <label>Title
          <input onChange={this.handleChange('title')} value={this.state.title} />
        </label>
        <TextField
          floatingLabelText="Description"
          multiLine={true}
          rows={2}
          onChange={this.handleChange('description')}
          value={this.state.description}
        />
        <label>price
          <input onChange={this.handleChange('price')} value={this.state.price} />
        </label>
        <label>Latitude
          <input onChange={this.handleChange('lat')} value={this.state.lat} />
        </label>
        <label>Longitude
          <input onChange={this.handleChange('lng')} value={this.state.lng} />
        </label>

        <button className="btn">Add Spot</button>
      </form>
    );
  }
}


const autocomplete = new google.maps.places.Autocomplete(inputText);
autocomplete.bindTo('bounds', map);
google.maps.event.addListener(autocomplete, 'place_changed', function() {
    const location = autocomplete.getPlace().geometry.location;
    const lat = location.lat();
    const lng = location.lng();
    this.setState({lat, lng}),
    map.setCenter(location);
    // marker.setPosition(latlng);
});
