import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => { this.setState({[field]: e.target.value}); }
  }

	demoLogin(e) {
		e.preventDefault();
		this.props.processForm({username: 'Guest', password: 'password'});
	}

  render() {
    return (
      <form className="auth-form login-form" onSubmit={this.handleSubmit}>
				<label><Link to="/">╳</Link></label>
				<button onClick={this.demoLogin} className="input-group btn">Sign in as guest</button>
				<div className="rule-container"><span className="rule">or</span></div>
        <label className="input-group">
          <input
						placeholder="Username"
						onChange={this.handleChange('username')}
						value={this.state.username}
						className={`${this.props.errors.username ? 'invalid' : ''}`}
					/>
					<span className="errors" >{this.props.errors.username}</span>
        </label>
        <label className="input-group">
          <input
						placeholder="Password"
						type='password'
						onChange={this.handleChange('password')}
						className={`${this.props.errors.password ? 'invalid' : ''}`}
						value={this.state.password}
					/>
					<span className="errors" >{this.props.errors.password}</span>
        </label>
        <button className="input-group btn">Log in</button>
				<hr />
				<label className="alt-form input-group ">
					<span>Don't have an account?</span>
					<Link to="/signup" className="green-link">Sign Up</Link>
				</label>
      </form>
  	);
  }
}

export default LoginForm;
