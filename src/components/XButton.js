import React, {Component} from 'react';
import './XButton.css'; 
import * as CompositionActions from '../actions/CompositionActions'


class XButton extends React.Component{
    constructor(props){
        super(props);
    }
    removeItemFromComposition(evt){
      this.props.compositionItems.splice(evt.target.getAttribute("data-xbuttonNumber"),1)
      CompositionActions.updateSortables(this.props.compositionItems);
      console.log("clicked on the xbutton ", evt.target.getAttribute("data-xbuttonallowremove"))
    }
    render(){
        return(
            <button onClick={this.removeItemFromComposition.bind(this)} 
             data-xbuttonallowremove="true"
             data-xbuttonNumber = {this.props.compositionNr}
             id={"xButtonNr_"+this.props.compositionNr} className='cancelButton' >
                <i 
                 className="fa fa-close"
                 data-xbuttonallowremove="true"
                 data-xbuttonNumber = {this.props.compositionNr}>
                </i>
            </button>
        )
    }
} 

export default XButton;