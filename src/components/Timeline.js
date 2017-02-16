import React, { Component } from 'react';
var _ = require('lodash');
import './Timeline.css'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Button from 'react-bootstrap/lib/Button';
var PreviewModal = require('./PreviewModal');


const TimelineBars = ({compositionItems})=> {
    const totalDesiredLength = 12;
    const determineColor = (index,compositionItems) =>{
        var overflow = compositionItems.length>totalDesiredLength;
        document.overflow = overflow;
        console.log(index, compositionItems.length)
        if(!overflow){//if there is left than 12 compositions
            if(compositionItems.length<totalDesiredLength && index>=compositionItems.length){
                console.log("not called 1")
                if(index==0){
                    return (<div key={index} className="first greyColored piece"></div>)
                } else if(index==totalDesiredLength-1){
                    return (<div key={index} className="last greyColored piece"></div>)
                }
                else{
                    return (<div key={index} className="greyColored piece"></div>)
                }
            }
            else if(!overflow && index<compositionItems.length){
                console.log("not called at alll 2");
                if(index==0){
                    return (<div key={index} className="first greenColored piece"></div>)
                }else if(index==totalDesiredLength-1){
                    return (<div key={index} className="last greenColored piece"></div>)
                }
                else{
                    return (<div key={index} className="greenColored piece"></div>)
                }
            }
        }
        else{//if there is overflow
            if(index==0){
                    return (<div key={index} className="first greenColored piece"></div>)
            }else if(index==totalDesiredLength-1){
                return (<div key={index} className="overflowedDesiredLength piece"></div>)
            }
            else if(index==compositionItems.length-1){
                return (<div key={index} className="last greenColored piece"></div>)
            }
            else{
                return (<div key={index} className="greenColored piece"></div>)
            }
        }
    };


    if (compositionItems.length < totalDesiredLength){
        var newArray = _.range(totalDesiredLength);
        console.log(newArray,compositionItems)
    }else{
        var newArray = _.range(compositionItems.length)
    }

    return (
        <div className="main">
        <PreviewModal compositionItems={compositionItems}/>
        {
            newArray.map((value,index)=>{
                return determineColor(index,compositionItems)
            })

        }
            <MuiThemeProvider>
                <RaisedButton label="Render" secondary={true} className="renderButton"/>
            </MuiThemeProvider>
        </div>
    )
};

export default class Timeline extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              <TimelineBars compositionItems={this.props.compositionItems}/>
            </div>
        )
    }
}