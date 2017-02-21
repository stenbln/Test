var React = require('react');

const TextPreview = React.createClass({
  handleClick(evt){
    var spanId = evt.target.getAttribute("data-spanId");
    spanId = parseInt(spanId);
    //console.log("This item clicked ",evt.target.getAttribute("data-barId"));
  },
  handleListeners(animationEvt){
    console.log("Animation Finished");
  },
  attachListeners(el,currentActiveBar,index){
    if(el!=null){
      //console.log("Added Listener CAB:  ",currentActiveBar);
      //console.log("Added Listener INDEX:  ",index);
      var spanId=parseInt(el.getAttribute("data-spanId"));
      if(spanId<currentActiveBar){
        el.style.animationDelay="0s";
        el.style.animationDuration="0s";
      }else if(spanId>=currentActiveBar){
        el.classList.remove("textPreview");
        void el.offsetWidth;//trick to restart animation - https://css-tricks.com/restart-css-animation/
        el.classList.add("textPreview");
        el.style.animationDuration="5s";
        el.style.animationDelay = (spanId-currentActiveBar)*5+"s";
      }
      //console.log("This item cCALLLEd");

      el.addEventListener("animationend",this.handleListeners);
    }
  },
  render(){
    return <span data-spanId={this.props.index} onClick={this.handleClick} ref={(el)=>{this.attachListeners(el,this.props.currentActiveBar,this.props.index)} } className="textPreview" id={this.props.index}>{this.props.index<=this.props.length-1?this.props.text:""}</span>
  }
});

module.exports = TextPreview;