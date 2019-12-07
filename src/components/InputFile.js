import React from 'react';

function InputFile(props) {
		return (
			<React.Fragment>
			<input 
				type="file" 
				name="file" 
				accept="image/*"
				id="file" 
				className="input-file" 
				onChange={props.handleFileChange}
			/>
			<label htmlFor="file" className="input-file__label">
				<div className="input-file__circle"></div>
				<span>Upload photo</span>
			</label>
			</React.Fragment>
		);
}

export default InputFile;