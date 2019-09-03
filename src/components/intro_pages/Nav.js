import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<Link to='/home'>home</Link><br/>
			<Link to='/about'>about</Link><br/>
			<Link to='/contact'>contact</Link><br/>
			<Link to='/login'>login</Link><br/>
			<Link to='/signup'>sign up</Link><br/>
		</nav>
	) 
}

export default Nav;