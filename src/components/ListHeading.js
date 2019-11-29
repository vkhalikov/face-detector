import React from 'react';

function ListHeading(props) {
		return (
			<li className="list__heading">
				<h4>{props.heading}</h4>
				<span>probability</span>
			</li>
		);
}

export default ListHeading;