import React from 'react';
import '../assets/animations.css';
import {getRectangles} from '../assets/clarifai';
import FaceBox from './FaceBox';

class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: []
		};
	}

	render() {
		const faceBoxes = this.state.boxes.map((item) => {
			return (
				<FaceBox 
				box={item} 
				key={item.id}
				id={item.id}
				isActive={(this.props.activeBox === item.id) ? true : false}
				setActive={this.props.setActiveBox}
			/>
			)
		});

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

		let result = rectangles.map( (rectangle, i) => ({
			top: imageHeight * rectangle.top_row, 
			left: imageWidth * rectangle.left_col,
			bottom: imageHeight - imageHeight * rectangle.bottom_row,
			right: imageWidth - imageWidth * rectangle.right_col,
			id: String(i)
		}));

		this.setState({
			boxes: result
		})
	}
}

export default Image;