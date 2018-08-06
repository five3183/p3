import React, { Component } from 'react'
import './login.css'

class Login extends Component {
	render() {
		return (
			<div className="container" id="login-section">
				<h3>Sign In</h3>
				<hr />
				<form>
					<div className="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control" id="password" placeholder="Password" />
					</div>
					<div id="login-links">
						<div>	
							<a href="#">Forgot Password?</a>	
						</div>	
						<br />	
						<div>	
							<button type="button" className="btn btn-primary" id="sign-in">Sign In</button>	
						</div>	
						<br />	
						<div>
							<a className="nav-link" href="/register"><button type="button" className="btn btn-primary">Create New Account</button></a>	
						</div>	
					</div>
				</form>
			</div>
		)
	}
}

export default Login

document.onload = () => {
	document.querySelector("#sign-in").addEventListener('click', (event) => {
		event.preventDefault()
		console.log("CLICK")
		let email = document.querySelector('#email').value
		let password = document.querySelector('#password').value
		console.log("email: " + email)
		console.log("password: " + password)
	})
	const LOGIN = (email, password)=> {
		fetch("/authenticate", {
    	headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({email: email, password: password})
		})
		.then(function(res){ console.log(res) })
		.catch(function(res){ console.log(res) })
	}
}
