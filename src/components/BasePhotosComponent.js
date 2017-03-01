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
    var src = evt.target.getAttribute("data-src");
    var dataType = evt.target.getAttribute("data-type"); //it can be either "img" or "video"
    var poster = evt.target.getAttribute("poster");
    //console.log("This was, clicked ",evt.target.getAttribute("data-type"))
    if(src!=null||dataType!=null){// we dont want to fire this on every element click, we only want to fire either for images  or videos. Not tabs!
      //console.log("This photo was clicked ",evt.target.getAttribute("src"))
      CompositionActions.pushNewComposition(src,dataType,poster)
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
