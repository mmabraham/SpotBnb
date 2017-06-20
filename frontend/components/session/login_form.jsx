import React from 'react';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
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
      <form className="auth-form login-form" onSubmit={this.handleSubmit}>
        <label>Username
          <input onChange={this.handleChange('username')} value={this.state.username} />
					<span className="username-errors" >{this.props.errors}</span>
        </label>
        <br/>
        <label>Password
          <input onChange={this.handleChange('password')} type='password' value={this.state.password} />
        </label>
        <br />
        <button>Log in</button>
				<div className="alt-form">
					<span>Don't have an account?</span>
					<button value="Sign Up" />
				</div>
      </form>
  );
  }
}

export default LoginForm;
