import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class RenderButton extends Component{
    constructor(props){
        super(props);
    }
    handleClick(evt){
        this.sendObject()
    }
    sendObject(){//dispatch action here
        var comp = []

        this.props.compositionItems.map((value,index)=>{
            comp.push({
                text:this.props.items[index],
                dataType:value.dataType,
                image_path:value.src,
                //caption add caption field also - https://github.com/petenilson/BA47/blob/master/temp/js_model.js
                //music also neccessary
                sound:this.props.selectedSoundUrl
            })
        })

        console.log("rendered clicked on new comp ", this.props.items, " / ", this.props.compositionItems, " comp: ",comp)
    }
    render(){
        return(
            <MuiThemeProvider>
                <div onClick={this.handleClick.bind(this)} id="render_button"> <RaisedButton onClick={this.props.onClick} label="Render" secondary={true} className="renderButton"/></div>
            </MuiThemeProvider>
        )
    }
}