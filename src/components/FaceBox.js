import React from 'react';

function FaceBox({box}) {
	
	const styleProp = {
		top: box.top,
		left: box.left,
		bottom: box.bottom,
		right: box.right
	};

	return (
		<div className="FaceBox" style={styleProp}>
		</div>
	);
}

export default FaceBox;