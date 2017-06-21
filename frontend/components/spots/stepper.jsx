import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
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
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
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
    return ['full_home', 'shared', 'mattress on floor', 'private'];
  }

  step1() {
    return (
      <section>
        <SelectField
          floatingLabelText="Type"
          value={this.state.spot_type}
          onChange={this.handleChange('spot_type')}
        >
          {this.allTypes().map((t, i) => (
            <MenuItem key={i} value={t} primaryText={t} />
          ))}
        </SelectField>
        <TextField
          floatingLabelText="Title"
          onChange={this.handleChange('title')}
          value={this.state.title}
          />
        <label>Latitude
          <input onChange={this.handleChange('lat')} value={this.state.lat} />
        </label>
        <label>Longitude
          <input onChange={this.handleChange('lng')} value={this.state.lng} />
        </label>
      </section>
    );
  }

  step2() {
    return (
      <section>
        <TextField
          floatingLabelText="Description"
          multiLine={true}
          rows={2}
          onChange={this.handleChange('description')}
          value={this.state.description}
          />
        <SelectField
          floatingLabelText="How big is your place?"
          value={this.state.capacity}
          onChange={this.handleChange('capacity')}
          >

        </SelectField>
        <label>price
          <Slider
            min={0}
            max={500}
            step={1}
            value={this.state.price}
            onChange={this.handleChange('price')}
          />
        </label>
      </section>
    )
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.step1();
      case 1:
        return this.step2();
      case 2:
        return 'Add a picture...';
      default:
        return null;
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <form
        onSubmit={this.handleSubmit}
        style={{width: '100%', maxWidth: 700, marginTop: '200px'}}>
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
          {finished ? (
            <button className="btn">Add Spot</button>
          ) : (
            <div>
              {this.getStepContent(stepIndex)}
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Submit' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </form>
    );
  }
}

export default SpotForm;
