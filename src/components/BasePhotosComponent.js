//import React, { Component } from 'react';
var React = require('react');
var captions = require('./captions.js'); //old code, can delete
import Image from 'react-bootstrap/lib/Image';
var MediaTabBar = require('./MediaTabBar');
import * as CompositionActions from '../actions/CompositionActions';
import * as SoundsActions from '../actions/SoundsActions';


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
    var renderSrc = evt.target.getAttribute("data-srcoriginal");
    //console.log("this is the srcoriginal ", src)
    var dataType = evt.target.getAttribute("data-type"); //it can be either "img" or "video"
    var poster = evt.target.getAttribute("poster");
    //console.log("This was, clicked ",evt.target.getAttribute("data-playingindicator"))
    if(src!=null||dataType!=null&&dataType!="sound"){// we dont want to fire this on every element click, we only want to fire either for images  or videos. Not tabs!
      //console.log("This photo was clicked ",evt.target.getAttribute("src"))
      CompositionActions.pushNewComposition(src,renderSrc,dataType,poster)
    }else if(src!=null||dataType!=null&&dataType=="sound"){
      var src = evt.target.getAttribute("data-url");
      var id = evt.target.getAttribute('data-soundNr');
      //CompositionActions.addSound(src);
      if(!this.props.selectedSoundId){//if no sounds are selected 
        SoundsActions.updateSelectedSound(id,src);
      }else if(this.props.selectedSoundId&&this.props.selectedSoundId!=id){
        SoundsActions.updateSelectedSound(id,src);
      }else if(this.props.selectedSoundId==id){//if the sound icon which is selected clicked, then unselect it 
        SoundsActions.updateSelectedSound(-1,'');
      }
      //console.log("sound selected with url ",src)
    }else if(evt.target.getAttribute("data-playingindicator")!=null){//if play icon or sound name was clicked
        console.log("this sound props was received ", this.props.currentPlayingSound)
        //evt.target.children[0].play()
        var id = evt.target.children[0].getAttribute("id"); // e.g. "sound_id_1"
        var dataSoundId = evt.target.children[0].getAttribute("data-soundid"); //e.g. "2"
        SoundsActions.updatePlayingSound(id,dataSoundId);
    }
  },



  render: function() {

    return (
      <div onClick={this.handleClick}  style={{width:'100%'}}>
      <MediaTabBar 
        page={this.props.page} 
        chipData={this.props.chipData} 
        images={this.props.images} 
        imagesLoader={this.props.imagesLoader}

        videos={this.props.videos}
        videosLoader={this.props.videosLoader}
        videosChipData={this.props.videosChipData}
        videosPage={this.props.videosPage}

        sounds={this.props.sounds}
        selectedSoundId={this.props.selectedSoundId}
        currentPlayingSound={this.props.currentPlayingSound}
        />
      </div>
    );
  }
});



module.exports = BasePhotosComponent;
//export default App;
