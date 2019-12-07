import React from 'react';
import ButtonCircle from './ButtonCircle';
import InputFile from './InputFile';

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
			<InputFile handleFileChange={props.handleFileChange}/>
			<ButtonCircle text={'detect!'} handleClick={props.handleSubmit} />

		</section>
	)
}

export default Form;