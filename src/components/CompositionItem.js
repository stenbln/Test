var React = require('react');
import './SortableCompositions.css'
var Spinner = require('react-spinkit');

const CompositionItem = React.createClass({
    handleMouseEvents(evt){
        console.log("moussssssss  ",evt.target)
        evt.persist()
        
        //console.log("moussssssss1  ",evt)
        //console.log("mousss  ",evt.target.getAttribute("data-videosrc"))

        if(evt.type=="mouseenter"){
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
        }else if(evt.type=="mouseleave"){
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
        //console.log("element ", el);
        //console.log("style ", el.style);
    },
    render(){
        console.log("this item clicked   ", this.props.value.dataType)
        if(this.props.value.dataType=="img"){
            return (
                <div className="compositionItem">
                  <div ref={(el)=>{if (el) {this.handleBackgroundImageChange(el,this.props.value.src)}}} className="compositionImageItem">
                    <span className="spanOnTopOfComposition">{this.props.substringedArray}</span>
                  </div>
                  <div className="compositionInfoDiv">
                    <div>Scene {this.props.dataitemID+1}</div>
                  </div>
                </div>
            )
        }else if(this.props.value.dataType=="video"){
            return (
                <div className="compositionItem">
                  <div className="compositionVideoItem">
                    <video
                      muted
                      src={this.props.value.src}
                      id={"videoBroj"+this.props.dataitemID}
                      data-videosrc={this.props.value.src}
                      data-compositionNr={this.props.dataitemID}
                      onMouseEnter={this.props.dragging?null:this.handleMouseEvents}
                      onMouseLeave={this.handleMouseEvents}
                      className="videoComposition"
                      data-type="video"
                      poster={this.props.value.poster}  
                      loop
                      preload="metadata">
                      Your browser does not support HTML5 video.

                    </video>
                    <span className="spanOnTopOfComposition">{this.props.substringedArray}</span>
                    <Spinner id={"spinner_id_in_preview"+this.props.dataitemID} style={{visibility:'hidden',position:'absolute',top:8,left:8}}spinnerName='circle' />
                  </div>
                  <div className="compositionInfoDiv">
                    <div>Scene {this.props.dataitemID+1}</div>
                  </div>
                </div>
            )
        }
    }
});
module.exports = CompositionItem;