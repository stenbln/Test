import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var Chips = require('./Chips');

var ImageSearchBar = React.createClass({
    render:function(){
        return (
            <div>
                <MuiThemeProvider>
                    <TextField
                      underlineDisabledStyle={{color:'red'}}
                      underlineStyle={{backgroundColor:'yellow'}}
                      hintText="keywords"
                      floatingLabelText="Search for additional images"/>
                </MuiThemeProvider>
                <Chips/>
            </div>
        )
    }
});


module.exports = ImageSearchBar;