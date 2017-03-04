import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
about:"Header",
service:"Content here"
    };
  }
  render() {
    return (
       <div>
       <h2>{this.props.headerProps}</h2>
       <h2>{this.props.contentProps}</h2>
       <About aboutProp = {this.state.about}/>
       <Service serviceProp = {this.state.service}/>
      </div>
    );
  }
}

class About extends Component{
  render(){
  return(
  <div>{this.props.aboutProp}</div>
  );
}
}

class Service extends Component{
  render(){
  return  (
  <div>{this.props.serviceProp}</div>
  );
}
}

export default App;
