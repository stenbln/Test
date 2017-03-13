import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as RenderActions from '../actions/RenderActions';

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
                text:this.props.items[index]?this.props.items[index]:"",//in case that list of chosen text items is not the same as the composition item list
                data_type:value.dataType,
                file_url:value.renderSrc,
                //caption add caption field also - https://github.com/petenilson/BA47/blob/master/temp/js_model.js
                //music also neccessary
                length:5
            })
        })
        var renderObjectClient = {
                        template:'standard',
                        soundtrack:this.props.selectedSoundUrl,
                        comp:comp
                    }
                    
        RenderActions.sendToRender(renderObjectClient);
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