import React from 'react';
import Arrow from './Arrow';

function Guide(props) {
	const text = props.text;
	const reverse = props.arrow;
	return (
		<div className="guide">
			<p>{text}</p>
			<Arrow reverse={reverse}/>
		</div>
	);
}

export default Guide;