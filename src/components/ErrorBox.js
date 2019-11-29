import React from 'react';
import '../assets/animations.css';

const getErrorMessage = (errorType) => {
	let errorMessage = null;

	switch (errorType) {
		case 'BAD_REQUEST':
		errorMessage = `Looks like we can't find your photo! 
		Make sure that provided URL isn't privite and you spell it right.`;
		break;
		case 'NO_FACE_DETECTED':
		errorMessage = `Sorry, we haven't detected any faces!
		But you can try with another photo!`;
		break;
		default:
		errorMessage = `Oops! Something went wrong. We're looking for a solution!`
	}

	return errorMessage;
}

function ErrorBox(props) {
	const {type} = props;
	const message = getErrorMessage(type);

	return (
		<div className="ErrorBox slide-in-fwd-center">
			<h3>Error!</h3>
			<p>{message}</p>
		</div>
	);
}
export default ErrorBox;