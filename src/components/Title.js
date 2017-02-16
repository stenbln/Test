import React from 'react';
import './Title.css';

var Title = React.createClass({
    render(){
        return <label className="title">
          {this.props.title}
        </label>
    }
});

module.exports = Title;