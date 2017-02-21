var React = require('react');
var captions = require('./captions.js');
import {split, Syntax} from "sentence-splitter";
var Highlight = require('react-highlighter');
import * as SortableActions from '../actions/SortableActions'


var sentences = split(captions[0].text);


var RawText = React.createClass({
    getInitialState:function(){
        return{
            search:''
        }
    },
    handleClick: function (e) {
        console.log("event type of item", e.target.getAttribute("data-textValue"))
        if(e.type=="click"){
            SortableActions.pushItemToStack(e.target.getAttribute("data-textValue"));
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
    var sentenceList=sentences.map((item,i)=>{
        return(
            <div style={{lineHeight:'1.2em'}} key={'sentenceNr_'+i}>
                <Highlight data-identification={i} data-textValue={item.value} 
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
                  search={this.state.search}>{item.value}</Highlight>
                <br/><br/>  
            </div>
        )
    })
        return(
            <div>
                {sentenceList}
            </div>
        )
    }
});

module.exports = RawText;