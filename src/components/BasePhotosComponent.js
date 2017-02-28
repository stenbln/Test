//import React, { Component } from 'react';
var React = require('react');
var captions = require('./captions.js'); //old code, can delete
import Image from 'react-bootstrap/lib/Image';
var MediaTabBar = require('./MediaTabBar');
import * as CompositionActions from '../actions/CompositionActions';


const styles = {
    wrapper: {
        alignContent:'flex-start',
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',

    },
    img:{
      maxHeight:'20vh',
      height:'auto',
      width:'auto',
    }
};

var BasePhotosComponent = React.createClass({
  handleClick:function (evt) {
    evt.preventDefault()
    var src = evt.target.getAttribute("src");
    if(src!=null){//only do this on the elements that have a src attribute
      //console.log("This photo was clicked ",evt.target.getAttribute("src"))
      CompositionActions.pushNewComposition(src)
    }
  },



  render: function() {

    return (
      <div onClick={this.handleClick}  style={{width:'100%'}}>
      <MediaTabBar page={this.props.page} chipData={this.props.chipData} images={this.props.images} imagesLoader={this.props.imagesLoader}/>
        

        
      </div>
    );
  }
});



module.exports = BasePhotosComponent;
//export default App;
