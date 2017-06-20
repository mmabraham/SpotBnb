import React from 'react';

class SignupForm extends React.Component {
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
    return (
      <form  className="auth-form signup-form" onSubmit={this.handleSubmit}>
        <label>Username
          <input onChange={this.handleChange('username')} value={this.state.username} />
          <span className="username-errors" >{this.props.errors}</span>
        </label>
        <br/>
        <label>Password
          <input onChange={this.handleChange('password')} type='password' value={this.state.password} />
        </label>
        <br />
        <button>Sign up</button>
        <div className="alt-form">
          <span></span>
          <button value="Log in" />
        </div>
      </form>
  );
  }
}

export default SignupForm;
