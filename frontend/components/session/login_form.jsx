import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
		this.handleModalChange = this.handleModalChange.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

	handleModalChange(e) {
		e.preventDefault();
		e.stopPropagation();
		this.props.displayModal();
	}

  handleSubmit(e) {
    e.preventDefault();
		e.stopPropagation();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => {
			e.stopPropagation();
			this.setState({[field]: e.target.value});
		};
  }

	demoLogin(e) {
		e.stopPropagation()
		e.preventDefault();
		this.props.processForm({username: 'Guest', password: 'password'});
	}

  render() {
		const errors = this.props.errors;
    return (
			<div className="modal-container">
	      <form className="auth-form login-form" onSubmit={this.handleSubmit}>
					<label><span onClick={this.props.closeModel}>╳</span></label>
					<h2>Log in to continue</h2>
					<button onClick={this.demoLogin} className="btn">Sign in as guest</button>
					<div className="rule-container"><span className="rule">or</span></div>
	        <label>
	          <input
							placeholder="Username"
							onChange={this.handleChange('username')}
							value={this.state.username}
							className={`${errors && errors.username ? 'invalid' : ''}`}
						/>
					<span className="errors" >{errors ? errors.username : ''}</span>
	        </label>
	        <label>
	          <input
							placeholder="Password"
							type='password'
							onChange={this.handleChange('password')}
							className={`${errors && errors.password ? 'invalid' : ''}`}
							value={this.state.password}
						/>
					<span className="errors" >{errors ? errors.password : ''}</span>
	        </label>
	        <button className="btn">Log in</button>
					<hr />
					<div className="alt-form">
						<span>Don't have an account?</span>
						<button onClick={this.handleModalChange} className="green-link">Sign Up</button>
					</div>
	      </form>
			</div>
  	);
  }
}
