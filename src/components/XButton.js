import React, {Component} from 'react';
import './XButton.css'; 


class XButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button  className='cancelButton' >
                <i className="fa fa-close"></i>
            </button>
        )
    }
} 

export default XButton;