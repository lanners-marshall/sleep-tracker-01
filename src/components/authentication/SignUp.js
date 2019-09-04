import React, { useState } from 'react';
import Nav from '../intro_pages/Nav.js';
import axios from 'axios';

const DateContent = ({data, cb}) => {
	return (
		<ul>
			{data.map((d,i) => {
				return (
					<li key={i} onClick={() => cb(d)}>{d}</li>
				)
			})}
		</ul>
	)
}


const SignUp = (props) => {

	const [username, setUserName] = useState("");
	const [password, setUserPassword] = useState("");

	const [month, setMonth] = useState("Jan");
	const [day, setDay] = useState(1);
	const [year, setYear] = useState(2019);

	const [showDay, setShowDay] = useState(false);
	const [showMonth, setShowMonth] = useState(false);
	const [showYear, setShowyear] = useState(false);

	const months = ["Jan", "Feb", "March", "Apri", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
	const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
	const days = range(1, 31, 1);
	const years = range(2019, 1920, -1);

	const signUp = (e) => {
		e.preventDefault()
		const birthdate = `${month}, ${day} ${year}`
		const user = {username, password, birthdate}
		axios.post('https://sleeptrack.herokuapp.com/api/register', user)
		.then(res => {
			alert('Sign Up Success')
			props.history.push('/login')
		})
		.catch(error => {
			
			console.log(error)
		})
	}

	return (
		<div>
			<Nav/>
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
					onChange={e => setUserPassword(e.target.value)}
					placeholder="password"
					type="password"
					name="password"
					required
				/><br/>
				<div onClick={() => setShowMonth(!showMonth)}>Month: {month}
					{showMonth && <DateContent data={months} cb={setMonth}/>}
				</div>
				<div onClick={() => setShowDay(!showDay)}>Day: {day}
					{showDay && <DateContent data={days} cb={setDay} />}
				</div>
				<div onClick={() => setShowyear(!showYear)}>Year: {year}
					{showYear && <DateContent data={years} cb={setYear} />}
				</div>
				<button onClick={e => signUp(e)}>Sign Up</button>
			</form>
		</div>
	)
}

export default SignUp;