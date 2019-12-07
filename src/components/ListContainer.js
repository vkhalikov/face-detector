import React from 'react';
import {listFromFaceData} from '../assets/clarifai.js';

function ListContainer(props) {
	const faceData = props.clarifaiRegions[props.activeBox].data.face;
	const list = listFromFaceData(faceData);

	return (
		<div className="list__container">
			<h2>result</h2>
			{list}
		</div>
	);
}

export default ListContainer;