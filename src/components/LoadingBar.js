var React = require('react');

const LoadingBar = React.createClass({
  handleClick(evt){
    var barId = evt.target.getAttribute("data-barId");
    barId = parseInt(barId);
    //console.log("This item clicked ",evt.target.getAttribute("data-barId"));
  },
  handleListeners(animationEvt){
    console.log("Animation Finished");
  },
  attachListeners(el,currentActiveBar,index){
    if(el!=null){
      //console.log("Added Listener CAB:  ",currentActiveBar);
      //console.log("Added Listener INDEX:  ",index);
      var barId=parseInt(el.getAttribute("data-barId"));
      if(barId<currentActiveBar){
        el.style.animationDelay="0s";
        el.style.animationDuration="0s";
      }else if(barId>=currentActiveBar){
        el.classList.remove("animated");
        void el.offsetWidth;//trick to restart animation - https://css-tricks.com/restart-css-animation/
        el.classList.add("animated");
        el.style.animationDuration="5s";
        el.style.animationDelay = (barId-currentActiveBar)*5+"s";
      }
      //console.log("This item cCALLLEd");

      el.addEventListener("animationend",this.handleListeners);
    }
  },
  render(){
    return <div data-barId={this.props.index} onClick={this.handleClick} ref={(el)=>{this.attachListeners(el,this.props.currentActiveBar,this.props.index)} } className="loadingBarPiece animated" id={this.props.index}></div>
  }
});

module.exports = LoadingBar;