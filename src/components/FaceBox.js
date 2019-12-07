import React from 'react';

function FaceBox({box, id, isActive, setActive}) {
	const className = isActive ? "FaceBox FaceBox-active" : "FaceBox";
	const styleProp = {
		top: box.top,
		left: box.left,
		bottom: box.bottom,
		right: box.right,
	};

	return (
		<div className={className} style={styleProp} onClick={() => {setActive(id)}}>
		</div>
	);
}

export default FaceBox;