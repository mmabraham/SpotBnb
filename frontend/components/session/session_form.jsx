import React from 'react';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  handleChange(field) {
    return (e) => { this.setState({[field]: e.target.value});
  };

  }
  render() {
    const buttonText = (this.props.formType === "login") ? "Login" : "Sign Up";

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter Username
          <input onChange={this.handleChange('username')} value={this.state.username} />
        </label>
        <br/>
        <label>Enter Password
          <input onChange={this.handleChange('password')} type='password' value={this.state.password} />
        </label>
        <br />
        <button>{buttonText}</button>
      </form>
  );
  }
}

export default SessionForm;
