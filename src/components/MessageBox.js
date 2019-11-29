import React from 'react';

function MessageBox({ type, message }) {
	let extension = null;
	if (type === 'error') {
		extension = 'Oops! Something went wrong!'
	}
	return (
		<div className="MessageBox">
			{extension}
			<p>{message}</p>
	
		</div>
	);
}
export default MessageBox;