import React, {useState} from 'react';
import decode from 'jwt-decode';
import { Redirect } from 'react-router-dom'

const Authenticate = Component => () => {
	const token = localStorage.getItem('token')
	let current

	token && (current = decode(token))

	const valid = (expireDate) => {
		let now = (new Date().getTime() + 1) / 1000
		return expireDate > now
	}

	if (token && valid(current.exp)){
		return <Component/>
	} else {
		return <Redirect to="/home"/>
	}
	
}

export default Authenticate;