import React from 'react';

function ButtonCircle(props) {
		return (
			<div 
				className="button button-circle input__button" 
				onClick={props.handleClick}
				>
    		<div className="button-circle__circle"></div>
  		 	<a href="#">{props.text}</a>
  		</div>
		);
}

export default ButtonCircle;