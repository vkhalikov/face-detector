import React from 'react';
import ListContainer from './ListContainer';
import LoadingIcon from './LoadingIcon';
import Template from './Template';
import Image from './Image';
import ErrorBox from './ErrorBox';


function Presenter(props) {
		let output = null;
		switch (props.presenterState) {
			case 'default': 
				output = null;
				break;
			case 'loading': 
				output = <LoadingIcon />;
				break;
			case 'loaded': 
				output = [<Image 
										key="img" 
										imgSrc={props.imgSrc} 
										clarifaiRegions={props.clarifaiRegions}
									/>,
									<ListContainer 
										key="list"
										clarifaiRegions={props.clarifaiRegions} 
									/>]
				break;
			case 'error': 
				output = <ErrorBox type={props.errorType}/>
		}
		
		return (
			<Template>
				{output}
			</Template>
		)
}

export default Presenter;