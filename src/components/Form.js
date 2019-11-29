import React from 'react';
import ButtonCircle from './ButtonCircle'

function Form (props) {
	return (
		<section className="form wrapper">

			<input 
				type="text" 
				placeholder="Enter an URL" 
				className="form__input"
				onChange={props.handleInputChange}
				onKeyPress={props.handleEnterPressOnInput}
				value={props.value}
			/>

			<ButtonCircle text={'detect!'} handleClick={props.handleSubmit} />

		</section>
	)
}

export default Form;