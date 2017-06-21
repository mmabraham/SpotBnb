import React from 'react';


export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    debugger
    return (
      <form onSubmit={this.handleSubmit} className="new-spot-form">
        <label>Type
          <input onChange={this.handleChange('spot_type')} value={this.state.spot_type} />
        </label>
        <label>Title
          <input onChange={this.handleChange('title')} value={this.state.title} />
        </label>
        <label>Description
          <input onChange={this.handleChange('description')} value={this.state.description} />
        </label>
        <label>price
          <input onChange={this.handleChange('price')} value={this.state.price} />
        </label>
        <label>Latitude
          <input onChange={this.handleChange('lat')} value={this.state.lat} />
        </label>
        <label>Longitude
          <input onChange={this.handleChange('lng')} value={this.state.lng} />
        </label>

        <button>Add Spot</button>
      </form>
    );
  }
}
