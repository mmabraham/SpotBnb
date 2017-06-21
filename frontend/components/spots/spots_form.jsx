import React from 'react';


export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      seating: 0,
      lat: '',
      lng: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSpot(this.state)
      .then(clearForm);
  }

  handleChange(formType) {
    return (e) => {
      this.setState({[formType]: e.target.value});
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Description
          <input onChange={this.handleChange('description')} value={this.state.description} />
        </label>
        <br />
        <label>Latitude
          <input onChange={this.handleChange('lat')} value={this.state.lat} />
        </label>
        <br />

        <label>Longitude
          <input onChange={this.handleChange('lng')} value={this.state.lng} />
        </label>
        <br />
        <button>Add Spot</button>
      </form>
    );
  }
}
