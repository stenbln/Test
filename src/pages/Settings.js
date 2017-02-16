import React, { Component } from 'react';
import './App.css';


class Settings extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><a href="default">Home</a></li>
          <li><a href="news">News</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="about">About</a></li>
        </ul>
      </div>
    );
  }
} 

export default Settings;
