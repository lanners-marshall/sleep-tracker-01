import React, {useState} from 'react';
import Authenticate from '../authentication/Authenticate.js'
import signOut from './signOut.js';

const Sleep = () => {
	return (
		<div>
			SleepTracker
			<button onClick={() => signOut()}>Sign Out</button>
		</div>
	)
}

export default Authenticate(Sleep)