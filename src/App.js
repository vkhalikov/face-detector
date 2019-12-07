import React from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import Presenter from './components/Presenter';
import Particles from 'react-particles-js';
import ParticlesOptions from './assets/particles-options';
import clarifaiAPI, {getRegions, hasDetectedFace} from './assets/clarifai';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imgSrc: '',
      clarifaiRegions: null,
      activeBox: null,
      presenterState: 'default',
      errorType: null
    }
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = () => {
    if (!this.state.input) return;
    this.setState( (state) => ({
      imgSrc: state.input, 
      presenterState: 'loading'
    }));

    clarifaiAPI.models
    .predict(
      "c0c0ac362b03416da06ab3fa36fb58e3", 
      this.state.input
    ).then( 
      (response) => {
        if ( hasDetectedFace(response) ) {
          const regions = getRegions(response);

          this.setState({
            presenterState: 'loaded',
            clarifaiRegions: regions,
            errorType: null,
            activeBox: "0"
          });
        } else {
          this.setState({
            presenterState: 'error',
            errorType: 'NO_FACE_DETECTED'
          });
        } 
      },
      (reject) => {
        this.setState({
          presenterState: 'error',
          errorType: 'BAD_REQUEST'
        });
      }
    );
  }

  handleEnterPressOnInput = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  setActiveBox = (id) => {
    if (this.state.activeBox !== id) {
      this.setState({activeBox: id});
    }
  }

  render() {
    return (
      <React.Fragment>
      <Nav />
      <Form 
      value={this.state.input} 
      handleInputChange={this.handleInputChange}
      handleEnterPressOnInput={this.handleEnterPressOnInput}
      handleSubmit={this.handleSubmit}
      />
      <Presenter 
      imgSrc={this.state.imgSrc}
      presenterState={this.state.presenterState}  
      clarifaiRegions={this.state.clarifaiRegions}
      setActiveBox={this.setActiveBox}
      activeBox={this.state.activeBox}
      errorType={this.state.errorType}
      />

      <Particles className="particles" params={ParticlesOptions} />
      </React.Fragment>
    );
  }
}

export default App;
