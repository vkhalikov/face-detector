import React from 'react';
import ButtonCircle from './ButtonCircle';

function Nav() {
	return (
		<nav className="nav wrapper">
			<p className="logo flip-horizontal-bottom">Face Detector</p>
			<ButtonCircle text={'sign up'} />
		</nav>
	)
}

export default Nav;