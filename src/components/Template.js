import React from 'react';

function Template(props) {
	const { children } = props;
	const templateClass = ( Array.isArray(children) ? 
	'template-around wrapper' : 'template-center wrapper');
	return (
		<main className={templateClass}>
			{children}
		</main>
	);
}
export default Template;