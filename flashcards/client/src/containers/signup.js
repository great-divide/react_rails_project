import React, { Component } from 'react';
import { connect } from 'react-redux'

export default class Signup extends Component {

	state = {
		username: '',
		password: '',
		password_confirmation: ''
	}

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleOnSubmit = (event) => {
		event.preventDefault();
		const user = {...this.state }
		console.log(user)
		fetch('./users', {
			method: 'POST',
			body: JSON.stringify(user),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then(response => response.json())
		.then(response => console.log(response))
	}

	render(){
		return(
			<form onSubmit={(event) => this.handleOnSubmit(event)}>
				<p>
				<input 
					type="text" 
					onChange={(event) => this.handleOnChange(event)}
					name="username"
					value={this.state.username}
					placeholder="username" />
				</p>
				<p>
				<input 
					type="password" 
					onChange={(event) => this.handleOnChange(event)}
					name="password"
					value={this.state.password}
					placeholder="password" />
				</p>
				<p>
				<input 
					type="password" 
					onChange={(event) => this.handleOnChange(event)}
					name="password_confirmation"
					value={this.state.password_confirmation}
					placeholder="retype password" />
				</p>
				<input type="submit" />
			</form>
		)
	}
}