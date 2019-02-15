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

	// handleOnSubmit = (event) => {
	// 	event.preventDefault();
	// 	const user = {...this.state }
	// }

	render(){
		return(
			<form>
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
					type="text" 
					onChange={(event) => this.handleOnChange(event)}
					name="password"
					value={this.state.username}
					placeholder="password" />
				</p>
				<input type="submit" />
			</form>
		)
	}
}