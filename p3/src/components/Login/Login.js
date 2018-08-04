import React, { Component } from 'react'
import './login.css'

class Login extends Component {
	render() {
		return (
			<div className="container" id="login-section">
				<form>
					<div className="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}

export default Login