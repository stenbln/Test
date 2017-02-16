import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var NavigationBar = require('../components/NavigationBar');

class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}} className="App">
      <NavigationBar/>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
} 

export default App;
