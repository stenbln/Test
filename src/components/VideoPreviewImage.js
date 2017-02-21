var React = require('react');

const VideoPreviewImage = React.createClass({
  handleClick(evt){
    var imageId = evt.target.getAttribute("data-imageId");
    imageId = parseInt(imageId);
    //console.log("This item clicked ",evt.target.getAttribute("data-barId"));
  },
  handleListeners(animationEvt){
    //console.log("Animation Finished");
  },
  attachListeners(el,currentActiveBar,index,length){
    if(el!=null){
      console.log("|||||||||||||||||||||| ",currentActiveBar)
      var imageId=parseInt(el.getAttribute("data-imageId"));
      var imageSrc = el.getAttribute("data-src");
      el.style.background =  "url("+"'"+imageSrc+"'"+")";
      if(imageId!=length-1){document.getElementById('videoPreview').classList.remove("backgroundImageForVideoPreview");//this and line below is to prevent flickering which videoPreview element causes
      }else if(imageId==length-1){document.getElementById('videoPreview').classList.add("backgroundImageForVideoPreview")}
      if(imageId<currentActiveBar){
        el.style.animationDelay="0s";
        el.style.animationDuration="0s";
        el.classList.remove("imagePlaceholder");
        el.classList.remove("videoAnimated");
        void el.offsetWidth;//trick to restart animation - https://css-tricks.com/restart-css-animation/
      }else if(imageId>=currentActiveBar){
        el.classList.remove("videoAnimated");
        el.classList.remove("imagePlaceholder");
        void el.offsetWidth;//trick to restart animation - https://css-tricks.com/restart-css-animation/
        el.classList.add("videoAnimated");
        el.classList.add("imagePlaceholder");
        el.style.animationDuration="5s";
        el.style.animationDelay = (imageId-currentActiveBar)*5+"s";
      }

      el.addEventListener("animationend",this.handleListeners);
    }
  },
  render(){
    return <div data-src={this.props.src} data-imageId={this.props.index} onClick={this.handleClick} ref={(el)=>{this.attachListeners(el,this.props.currentActiveBar,this.props.index,this.props.length)} } className="imagePlaceholder videoAnimated"></div>
  }
});

module.exports = VideoPreviewImage;