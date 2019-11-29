import React from 'react';
import '../assets/animations.css';
import {getRectangles} from '../assets/clarifai';
import FaceBox from './FaceBox';

class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLocationsCalculated: false,
			boxes: []
		};
	}

	render() {
		let faceBoxes = null;
		if (this.state.isLocationsCalculated) {
			faceBoxes = this.state.boxes.map(item => (
				<FaceBox 
				box={item} 
				key={item.id}
				/>
				));
		}
		return (
			<div className="img__container centered swing-in-top-fwd">
				<div className="relative">
				<img id="img" onLoad={this.calculateBoxLocations} src={this.props.imgSrc} alt="yours" className="img" />
				{faceBoxes}
				</div>
			</div>
		);
	}

	calculateBoxLocations = (e) => {
		const rectangles = getRectangles(this.props.clarifaiRegions);
		const image = e.target;
		const imageWidth = Number(image.width); 
		const imageHeight = Number(image.height);

		const result = rectangles.map( (rectangle, i) => ({
			top: imageHeight * rectangle.top_row, 
			left: imageWidth * rectangle.left_col,
			bottom: imageHeight - imageHeight * rectangle.bottom_row,
			right: imageWidth - imageWidth * rectangle.right_col,
			id: i
		}));

		this.setState({
			isLocationsCalculated: true,
			boxes: result
		})
	}
}

export default Image;