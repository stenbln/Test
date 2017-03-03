import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Chips = require('./Chips');
import * as ImagesActions from '../actions/ImagesActions'

var ImageSearchBar = React.createClass({
    handleChange:function(evt){

    },
    handleKeyPress:function(evt){
      if (evt.key === 'Enter' && evt.target.value!==''){
        ImagesActions.addChip(evt.target.value);
        evt.target.value='';
        ImagesActions.loadImages(this.props.chipData.map((chip)=>chip.label),1)//send array of chips e.g. ["Cloudsss", "Water", "Ocean", "ReactJS"]
      }
      //console.log("event keyPress  ",evt.key)
      //console.log("event Keypress target  ",evt.target.value)
    },
    render:function(){
        return (
            <div>
                <MuiThemeProvider>
                    <TextField
                      style={{marginLeft:20}}
                      underlineDisabledStyle={{width:200}}
                      underlineStyle={{width:200}}
                      underlineFocusStyle={{borderColor:'indianred'}}
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


module.exports = ImageSearchBar;