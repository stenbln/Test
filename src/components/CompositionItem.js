var React = require('react');
import './SortableCompositions.css'
var Spinner = require('react-spinkit');
import AnimakitExpander from 'animakit-expander';
import {SortableHandle} from 'react-sortable-hoc';
const DragHandle = SortableHandle(({dataitemID}) => <i className="barIconComposition pullLeft fa fa-bars" aria-hidden="false"></i>); // This can be any component you want
var RangeSelector = require('./RangeSelector');
import XButton from './XButton';

const CompositionItem = React.createClass({
    getInitialState(){
      return {
        expanded:false
      }
    },
    handleMouseEvents(evt){
        console.log("moussssssss  ",evt.target, "attribute ",evt.target.getAttribute("data-type"))
        evt.persist()
        
        //console.log("moussssssss1  ",evt)
        //console.log("mousss  ",evt.target.getAttribute("data-videosrc"))

        if(evt.type=="mouseenter" && (evt.target.getAttribute("data-type")=="img" || evt.target.getAttribute("data-type")=="video")){
          let itemNr = evt.target.getAttribute("data-compositionItemNumber");
          //console.log("mouss compNr", itemNr, " Xelement ",document.getElementById("xButtonNr_"+itemNr))
          document.getElementById("xButtonNr_"+itemNr).style.visibility = "visible";

        }else if(evt.type=="mouseleave" && (evt.target.getAttribute("data-type")=="img" || evt.target.getAttribute("data-type")=="video")){
          let itemNr = evt.target.getAttribute("data-compositionItemNumber");
          document.getElementById("xButtonNr_"+itemNr).style.visibility = "hidden";
        }

        if(evt.type=="mouseenter" && evt.target.getAttribute("data-type")=="video"){
        //code from http://stackoverflow.com/questions/21399872/how-to-detect-whether-html5-video-has-paused-for-buffering
        var checkInterval  = 50.0
        var lastPlayPos    = 0
        var currentPlayPos = 0
        var bufferingDetected = false
        var player = evt.target;
        //console.log("moussssssss1111  ",evt.target.getAttribute("data-videosrc"))

        setInterval(checkBuffering, checkInterval)
        function checkBuffering() {
            currentPlayPos = player.currentTime

            // checking offset, e.g. 1 / 50ms = 0.02
            var offset = 1 / checkInterval

            // if no buffering is currently detected,
            // and the position does not seem to increase
            // and the player isn't manually paused...
            if (
                    !bufferingDetected 
                    && currentPlayPos < (lastPlayPos + offset)
                    && !player.paused
                ) {
                //console.log("buffering")
                bufferingDetected = true

                let id = evt.target.getAttribute("data-compositionNr");
                //console.log("buffer iddddd ",evt.target, " ", id)
                document.getElementById("spinner_id_in_preview"+id).style.visibility = "visible";
            }

            // if we were buffering but the player has advanced,
            // then there is no buffering
            if (
                bufferingDetected 
                && currentPlayPos > (lastPlayPos + offset)
                && !player.paused
                ) {
                console.log("not buffering anymore")
                bufferingDetected = false

                let id = evt.target.getAttribute("data-compositionNr")
                document.getElementById("spinner_id_in_preview"+id).style.visibility = "hidden";
            }
            lastPlayPos = currentPlayPos
        }


          //console.log(evt.target.getAttribute("data-videoId"));
        if(evt.target.paused){//neccessary to avoid errors
          evt.target.play();
        }
        }else if(evt.type=="mouseleave" && evt.target.getAttribute("data-type")=="video"){
          evt.target.pause();
          evt.target.currentTime = 0;
          bufferingDetected = false
          let id = evt.target.getAttribute("data-compositionNr")
          evt = null;
          //this.forceUpdate();
          document.getElementById("spinner_id_in_preview"+id).style.visibility = "hidden";
        }
        
      },

    handleBackgroundImageChange(el,url){

        el.style.backgroundImage = "url('"+url+"')";
        console.log("elementt ", el, " state ", el.getAttribute("data-infodiv"));
        console.log("style ", el.style, " url ", url);
    },
    handleClick(evt){
      console.log("clicked on the arrow")
      var newExpandedState = this.state.expanded?!this.state.expanded:!this.state.expanded;
      this.setState({
        expanded:newExpandedState
      })
    },

    render(){
        console.log("this item clicked   ", this.props.value.dataType)
        if(this.props.value.dataType=="img"){
            return (
                <div 
                  className="compositionItem" 
                  style={{position:'relative'}}
                  >
                  
                  <div ref={(el)=>{if (el) {this.handleBackgroundImageChange(el,this.props.value.src)}}} 
                    className="compositionImageItem"
                    onMouseEnter={this.props.dragging?null:this.handleMouseEvents}
                    onMouseLeave={this.handleMouseEvents}
                    data-type="img"
                    data-compositionItemNumber={this.props.dataitemID}
                    >
                    <XButton compositionNr={this.props.dataitemID} compositionItems={this.props.compositionItems}/>
                    <span className="spanOnTopOfComposition">{this.props.substringedArray}</span>
                  </div>
                  <div className="compositionInfoDiv">
                    <DragHandle/>
                      <div>Scene {this.props.dataitemID+1}
                        <i onClick={this.handleClick} className={this.state.expanded?"compositionArrow fa fa-arrow-up":"compositionArrow fa fa-arrow-down"} aria-hidden="false"></i>
                        <div  style={{float:'right'}}>15:42</div>
                      </div>
                  </div>
                  <AnimakitExpander expanded={this.state.expanded}>
                    <div className="compositionExpandable">Length<RangeSelector/></div>
                    
                  </AnimakitExpander>
                  
                </div>
            )
        }else if(this.props.value.dataType=="video"){
            return (
                <div className="compositionItem">
                  <div className="compositionVideoItem"
                      onMouseEnter={this.props.dragging?null:this.handleMouseEvents}
                      onMouseLeave={this.handleMouseEvents}>
                      <XButton compositionNr={this.props.dataitemID} compositionItems={this.props.compositionItems}/>
                    <video
                      muted
                      src={this.props.value.src}
                      id={"videoBroj"+this.props.dataitemID}
                      data-videosrc={this.props.value.src}
                      data-compositionNr={this.props.dataitemID}
                      className="videoComposition"
                      data-type="video"
                      poster={this.props.value.poster}  
                      loop
                      preload="metadata"
                      data-compositionItemNumber={this.props.dataitemID}
                      >
                      Your browser does not support HTML5 video.

                    </video>
                    <span className="spanOnTopOfComposition">{this.props.substringedArray}</span>
                    <Spinner id={"spinner_id_in_preview"+this.props.dataitemID} style={{visibility:'hidden',position:'absolute',top:8,left:8}}spinnerName='circle' />
                  </div>
                  <div className="compositionInfoDiv" data-infodiv="true">
                    <DragHandle/>
                    <div>Scene {this.props.dataitemID+1}</div>
                  </div>
                </div>
            )
        }
    }
});
module.exports = CompositionItem;