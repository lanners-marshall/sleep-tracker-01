import React, { useState } from 'react';
import axios from 'axios'
import Nav from '../intro_pages/Nav.js';

const Login = (props) => {

	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const login = (e) => {
		e.preventDefault()
		const user = {username, password}
		axios.post('https://sleeptrack.herokuapp.com/api/login', user)
		.then(res => {
			localStorage.setItem('token', res.data.token)
			props.history.push('/sleep')
		})
		.catch(error => {
			setUserName(""); 
			setPassword("");
			setError("invalid username/password combination")
		})
	}

	return (

		<div>
			<Nav/>
			<p>{error}</p>
			<form>
				<input
					value={username}
					onChange={e => setUserName(e.target.value)}
					placeholder="username"
					type="text"
					name="username"
					required
				/><br/>
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder="password"
					type="password"
					name="password"
					required
				/><br/>
				<button type="submit" onClick={(e) => login(e)}>Login</button>
			</form>
		</div>
	)
}

export default Login;