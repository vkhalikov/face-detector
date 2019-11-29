import React from 'react';

function ListItem(props) {
		return (
			<li className="list__item">
				<span>{props.name}</span>
				<span>{props.probability}</span>
			</li>
		);
}

export default ListItem;