var React = require('react');
import './SortableCompositions.css'

const CompositionItem = React.createClass({
    handleBackgroundImageChange(el,url){
        el.style.backgroundImage = "url('"+url+"')";
        //console.log("element ", el);
        //console.log("style ", el.style);
    },
    render(){
        return (
            <div className="compositionItem">
              <div ref={(el)=>{if (el) {this.handleBackgroundImageChange(el,this.props.value)}}} className="compositionImageItem">
                <span className="spanOnTopOfComposition">{this.props.substringedArray}</span>
              </div>
              <div className="compositionInfoDiv">
                <div>Scene {this.props.dataitemID+1}</div>
              </div>
            </div>
        )
    }
});
module.exports = CompositionItem;