var React = require('react');
//var captions = require('./captions.js'); // old code used for testing
//import {split, Syntax} from "sentence-splitter"; //old code. possible to delete
var Highlight = require('react-highlighter');
import * as SortableActions from '../actions/SortableActions'
var Spinner = require('react-spinkit');
import './RawText.css'


//var sentences = split(captions[0].text); //old code. Can delete.

var RawText = React.createClass({
    getInitialState:function(){
        return{
            search:'',
        }
    },
    handleClick: function (e) {
        //console.log("event type of item", e.target.getAttribute("data-textValue"))
        if(e.type=="click"){
            SortableActions.pushItemToStack(e.target.getAttribute("data-textValue"));
            SortableActions.setCurrentActiveState("Manual");
        }
    },
    handleMouse: function (e){
        var textValue = e.target.getAttribute("data-textValue");
        if(e.type=="mouseenter"){
            this.setState({
                search:textValue
            })
        }else if(e.type=="mouseleave"){
            this.setState({
                search:""
            })
        }
        console.log("Mouse handled successfully", e.target.getAttribute("data-textValue"));
    },
    render:function(){
        console.log("Prop received for sentences ", this.props.sentences)
        var sentences = this.props.sentences;
    var sentenceList=sentences.map((item,i)=>{
        return(
            <div style={{lineHeight:'1.2em',paddingLeft:3}} key={'sentenceNr_'+i}>
                <Highlight data-identification={i} data-textValue={item} 
                  onMouseEnter={this.handleMouse} 
                  onMouseLeave={this.handleMouse}
                  onClick={this.handleClick}
                  matchElement='mark' 
                  matchStyle={{ 
                    cursor:'pointer',
                    backgroundColor:'rgba(205, 92, 92, 0.34)',
                    borderTopLeftRadius:'4px',
                    borderBottomRightRadius:'4px',
                    padding:'0.0em'}} 
                  search={this.state.search}>{item}</Highlight>
                <br/><br/>  
            </div>
        )
    })
        return(
            <div>
            <Spinner className={this.props.loader?'':'displayNone'} style={{paddingTop:'50% '}} spinnerName='three-bounce' />
                <div className={this.props.loader?'displayNone':''} >{sentenceList}</div>
            </div>
        )
    }
});

module.exports = RawText;