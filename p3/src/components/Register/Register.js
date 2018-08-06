import React, { Component } from 'react'
import './register.css'

class Register extends Component {
	render() {
		return (
			<div className="container" id="login-section">
				<h3>Sign Up</h3>
                <hr />
				<form>
                <div className="form-group">
						<label for="nameInput">Name</label>
						<input type="text" className="form-control" id="name"  placeholder="Enter name" />
					</div>
                    <div className="form-group">
						<label for="userNameInput">User Name</label>
						<input type="text" className="form-control" id="user-name" placeholder="Enter User Name" />
					</div>
					<div className="form-group">
						<label for="InputEmail1">Email address</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label for="InputPassword1">Password</label>
						<input type="password" class="form-control" id="password" placeholder="Password" />
					</div>
					<div id="login-links">
						<br />
						<div>
							<button type="button" className="btn btn-primary" id="create-account">Create New Account</button>
						</div>
					</div>

				</form>
			</div>
		)
	}
}

export default Register

document.onload = () => {
	document.querySelector("#create-account").addEventListener('click', (event) => {
		event.preventDefault()
        console.log("CLICK")
        let name = document.querySelector('#name').value
		let username = document.querySelector('#user-name').value
		let email = document.querySelector('#email').value
		let password = document.querySelector('#password').value
		
		console.log("name: " + name)
		console.log("username: " + username)
		console.log("email: " + email)
		console.log("password: " + password)
    })
    const REGISTER = (name, username, email, password)=> {
		fetch("/register", {
    	headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({name: name, username: username, email: email, password: password})
		})
		.then(function(res){ console.log(res) })
		.catch(function(res){ console.log(res) })
	}
}