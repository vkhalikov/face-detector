import Clarifai from 'clarifai';
import React from 'react';
import ListHeading from '../components/ListHeading';
import ListItem from '../components/ListItem';

const clarifaiAPI = new Clarifai.App({ 
	apiKey: 'a3e509d16c2048238325574215e3192b'
});

// Regions is an array that contains data (concepts, rectangle position)
// about all faces caught by clarifai API.
// Response is received from ClarifaiAPI predict() method.
export function getRegions(response) {
	const data = response.outputs[0].data;
	return data.regions;
}

export function hasDetectedFace(response) {
	const data = response.outputs[0].data;

	if (data.hasOwnProperty('regions')) {
		return true;
	}

	return false;
}

export function getRectangles(regions) {
	const rectangles = regions.map((item) => item.region_info.bounding_box);
	return rectangles;
}


// faceData is an object that contains data about unique face caught by clarifai API
// It can be found in regioins[i].data.face
export function listFromFaceData(faceData) {
	const list = Object.entries(faceData)
			.map((item, index) => {
				const heading = getHeading(item);
				const listItems = createListItems(item);

				return (
					<ul key={index}>
						<ListHeading heading={heading} />
						{listItems}
					</ul>
				);
				}
			);
	return list;

	function getHeading(entrie) {
		let heading = entrie[0].split('_').join(' ');
		return heading;
	}

	function createListItems(entrie) {
		let concepts = entrie[1].concepts;

		if (concepts.length > 5) {
			concepts.length = 5;
		}

		let listItems = concepts.map(({name, value, id}) => (
			<ListItem name={name} probability={convertProbability(value)} key={id} />
		));
		return listItems;
	}

	function convertProbability(probability) {
		let result = Math.round(probability * 100);
		if (result === 0) {
			result = '<1'
		}
		result += '%';
		return result
	}
}



export default clarifaiAPI;
