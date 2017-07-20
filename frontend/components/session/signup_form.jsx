import React from 'react';
import { NavLink } from 'react-router-dom';

export default class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleModalChange = this.handleModalChange.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

	handleModalChange(e) {
		e.preventDefault()
		this.props.displayModal();
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  render() {
		const errors = this.props.errors;

    return (
			<div className="modal-container">
	      <form className="auth-form signup-form" onSubmit={this.handleSubmit}>
	        <label><span onClick={this.props.closeModel}>╳</span></label>
	        <label>
	          <input
							placeholder="Username"
							onChange={this.handleChange('username')}
							value={this.state.username}
							className={`${errors.username ? 'invalid' : ''}`}
						/>
						<span className="errors" >{ errors ? errors.username : '' }</span>
	        </label>
	        <label>
	          <input
							placeholder="Password"
							type='password'
							onChange={this.handleChange('password')}
							className={`${errors.password ? 'invalid' : ''}`}
							value={this.state.password}
						/>
					<span className="errors" >{errors ? errors.password : ''}</span>
	        </label>
	        <button className="btn">Sign Up</button>
					<hr />
					<div className="alt-form">
						<span>Already have a SpotBnb account?</span>
						<button onClick={this.handleModalChange} className="green-link">Log in</button>
					</div>
	      </form>
			</div>
	  );
  }
}
