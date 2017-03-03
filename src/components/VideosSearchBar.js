import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Chips = require('./Chips');
import * as VideosActions from '../actions/VideosActions'

var VideosSearchBar = React.createClass({
    handleChange:function(evt){

    },
    handleKeyPress:function(evt){
      if (evt.key === 'Enter' && evt.target.value!==''){
        VideosActions.addChip(evt.target.value);
        evt.target.value='';
        VideosActions.loadVideos(this.props.chipData.map((chip)=>chip.label),1)//send array of chips e.g. ["Cloudsss", "Water", "Ocean", "ReactJS"]
      }
      //console.log("event keyPress  ",evt.key)
      //console.log("event Keypress target  ",evt.target.value)
    },
    render:function(){
        return (
            <div>
                <MuiThemeProvider>
                    <TextField
                      underlineDisabledStyle={{color:'red'}}
                      underlineStyle={{backgroundColor:'yellow'}}
                      hintText="keywords"
                      floatingLabelText="Search for additional images"
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress}/>
                </MuiThemeProvider>
                <Chips chipData={this.props.chipData}/>
            </div>
        )
    }
});


module.exports = VideosSearchBar;