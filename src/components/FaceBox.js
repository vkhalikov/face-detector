import React from 'react';

function FaceBox({box, id, isActive, setActive}) {
	const borderColor = isActive ? "#FFC859" : "#149df2";
	const styleProp = {
		top: box.top,
		left: box.left,
		bottom: box.bottom,
		right: box.right,
		boxShadow: `0 0 0 3px ${borderColor} inset`
	};

	return (
		<div className="FaceBox" style={styleProp} onClick={() => {setActive(id)}}>
		</div>
	);
}

export default FaceBox;