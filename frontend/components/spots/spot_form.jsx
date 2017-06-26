import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
// import select from 'material-ui/select';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import LocationPicker from '../search/location_picker';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultForm();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.errorsFor = this.errorsFor.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  defaultForm() {
    return {
      finished: false,
      stepIndex: 0,
      spot_type: '',
      title: '',
      description: '',
      price: 0,
      capacity: 0,
      img: '',
      location: '',
      lat: '',
      lng: '',
    };
  }

  // componentDidMount() {
  //   this.setupAutocomplete();
  // }

  // componentDidUpdate() {
  //   if (this.state.stepIndex == 0) {
  //     this.setupAutocomplete();
  //   } else {
  //
  //   }
  // }

  handleSubmit(e) {
    const redirectTo = this.redirectTo.bind(this);
    e.preventDefault();
    this.props.createSpot(this.state)
    .then(redirectTo)
    .fail((res) => this.props.receiveErrors(res.responseJSON));
  }

  redirectTo(id) {
    this.props.history.push(`/spots/${id}`);
  }

  handleSlide(formType) {
    return (e, value) => this.setState({[formType]: value});
  }

  handleSelect(formType) {
    return (e, idx, value) => this.setState({[formType]: value});
  }

  handleUpload(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }

    // QUESTION -- what is this doing?
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleChange(formType) {
    return (e) => {
      this.setState({[formType]: e.target.value});
    };
  }

  handleLocationChange(loc) {
    this.setState(loc);
  }

  handleNext() {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  allTypes() {
    return ['full home', 'shared home', 'mattress on the floor', 'private home'];
  }

  validCapacities() {
    const MAX_CAPACITY = 16, items = [];
    for (let i = 0; i < MAX_CAPACITY; i++) {
      items.push(<option key={i} value={i} >{`${i} Guests`}</option>)
    }
    return items;
  }

  errorsFor(field) {
    if (this.props.errors && this.props.errors[field]) {
      return this.props.errors[field][0];
    }
  }

  errorStyle() {
    return {
      fontWeight: 'lighter',
      color: '#d93900',
      fontSize: '14px',
      lineHeight: '24px',
    }
  }

  // setupAutocomplete() {
  //   const autocomplete = new google.maps.places.Autocomplete(this.place);
  //   google.maps.event.addListener(autocomplete, 'place_changed', () => {
  //     const location = autocomplete.getPlace().geometry.location;
  //     const lat = location.lat();
  //     const lng = location.lng();
  //     this.setState({lat, lng, location: this.place.value});
  //   });
  // }

  step1() {
    return (
      <section className="form">
        <LocationPicker
          errors={this.props.errors}
          location={this.state.location}
          handleChange={this.handleLocationChange}
        />
        <section className="adjacent-input">
          <labal>
            <select
              className={this.props.errors && this.props.errors.spot_type ? 'invalid' : null}
              value={this.state.spot_type}
              onChange={this.handleSelect('spot_type')}
              >
              {this.allTypes().map((t, i) => (
                <option key={i} value={t} >{t}</option>
              ))}
            </select>
            <span className="errors" >{this.props.errors ? this.props.errors.spot_type : ''}</span>
          </labal>

          <label>
            <select
              className={this.props.errors && this.props.errors.capacity ? 'invalid' : null}
              value={this.state.capacity}
              onChange={this.handleSelect('capacity')}
            >
              {this.validCapacities()}
              <option key={16} value={16} >16+ Guests</option>
            </select>
            <span className="errors" >{this.props.errors ? this.props.errors.capacity : ''}</span>
          </label>
        </section>
      </section>
    );
  }

  step2() {
    return (
      <section className="form">
        <div>
          <TextField
            floatingLabelText="Title"
            onChange={this.handleChange('title')}
            value={this.state.title}
            errorText={this.errorsFor('title')}
            errorStyle={this.errorStyle()}
          />
          <TextField
            floatingLabelText="Description"
            multiLine={true}
            rows={2}
            onChange={this.handleChange('description')}
            errorText={this.errorsFor('description')}
            value={this.state.description}
            errorStyle={this.errorStyle()}
          />
        </div>

        <div>
          price
          <br />
          {`$${this.state.price}`}
          <Slider
            min={0}
            max={999}
            step={1}
            value={this.state.price}
            onChange={this.handleSlide('price')}
          />
      </div>
      </section>
    )
  }

  step3() {
    return (
      <input type="file" id="input" onLoadStart={this.handleUpload}/>
    )
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.step1();
      case 1:
        return this.step2();
      case 2:
        return this.step3();
      default:
        return null;
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <form style={{width: '100%', maxWidth: 700, marginTop: '200px'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>What kind of spot...</StepLabel>
          </Step>
          <Step>
            <StepLabel>Tell us more...</StepLabel>
          </Step>
          <Step>
            <StepLabel>Add a picture...</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>

          <div className="form-step">
            {this.getStepContent(stepIndex)}
            <div style={{marginTop: 12}}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onTouchTap={this.handlePrev}
                style={{marginRight: 12}}
              />
              {finished ? (
                <h1>Please wait</h1>
              ) : (
              <RaisedButton
                label={stepIndex === 2 ? 'Submit' : 'Next'}
                primary={true}
                onTouchTap={stepIndex <= 1 ? this.handleNext : this.handleSubmit}
              />
              )}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SpotForm;
