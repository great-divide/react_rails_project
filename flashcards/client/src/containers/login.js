import React, { Component } from 'react';
import { connect } from 'react-redux'

export default class Login extends Component {

	state = {
		username: '',
		password: ''
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
				<input type="submit" />
			</form>
		)
	}
}