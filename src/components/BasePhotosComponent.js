//import React, { Component } from 'react';
var React = require('react');
var captions = require('./captions.js');
var ImageSearchBar = require('./ImageSearchBar');
import Image from 'react-bootstrap/lib/Image';
var MediaTabBar = require('./MediaTabBar');//change name to tab
var StackedImages = require('./StackedImages');
import * as CompositionActions from '../actions/CompositionActions'

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
    var captionList = captions.map(function(cap,i){
            return (
              <div key={'cap_'+i} >
                <Image
                  style={styles.img}
                  src={cap.color} thumbnail responsive>
                </Image>
              </div>)
    },this);
    
    return (
      <div onClick={this.handleClick}  style={{width:'100%'}}>
      <MediaTabBar/>
        <ImageSearchBar/>
        {/*<div style={styles.wrapper}>
          {captionList}
        </div>*/}
        <StackedImages/>
      </div>
    );
  }
});



module.exports = BasePhotosComponent;
//export default App;
