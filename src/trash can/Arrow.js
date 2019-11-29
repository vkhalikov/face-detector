import React from 'react';
import './Arrow.css';

function Arrow(props) {
	const className = props.reverse ? 'arrow reverse' : 'arrow';

	return (
		<div className="arrow-container">
			<div className={className}>
    	  <span></span>
    	  <span></span>
    	  <span></span>
    	</div>
    </div>
	);
}

export default Arrow;