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
      request: null,
      presenterState: 'default',
      clarifaiRegions: null,
      activeBox: null,
      errorType: null
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
        handleFileChange={this.handleFileChange}
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

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ 
      input: value,
      request: {body: value, src: value}
    })
  }

  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      this.setState({
        input: '',
        request: null
      })
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64 = reader.result.replace(/^data:.+;base64,/, '');
      this.setState({
        input: file.name,
        request: {body: base64, src: reader.result}
      });
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    if (!this.state.input) return;
    this.setState( (state) => ({
      imgSrc: state.request.src, 
      presenterState: 'loading'
    }));
    this.requestClarifai(this.state.request.body);
  }

  requestClarifai = (requestBody) => {
    clarifaiAPI.models
    .predict(
      "c0c0ac362b03416da06ab3fa36fb58e3", 
      requestBody
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
        console.log(reject);
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

}

export default App;
