var React = require('react');
var LoadingBar = require('./LoadingBar');
var VideoPreviewImage = require('./VideoPreviewImage');
var TextPreview = require('./TextPreview');
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import {Modal,Button} from 'react-bootstrap';
import './PreviewModal.css'

function createLoadBoars(value,index,currentActiveBar){
  return <LoadingBar key={"BAR_"+index} index={index} value={value} currentActiveBar={currentActiveBar}/>
}

function createVideoPreviewImages(src,index,currentActiveBar,length){
  return <VideoPreviewImage key={"IMAGE_PREVIEW_"+index} index={index} src={src} currentActiveBar={currentActiveBar} length={length}/>
};

function createTextPreview(text,index,currentActiveBar,length){
  return <TextPreview key={"IMAGE_PREVIEW_"+index} index={index} text={text} currentActiveBar={currentActiveBar} length={length}/>
};

const PreviewModal = React.createClass({
  getInitialState(){
    return { 
      showModal: false,
      currentActiveBar:0,
    }
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ 
      showModal: true,
      currentActiveBar:0,
      length:this.props.compositionItems.length,
    });
  },

  handleTopClick(evt){
    if(evt.target.getAttribute("data-barId")!=null&&typeof evt.target.getAttribute("data-barId")!="undefined"){
      var CAB = parseInt(evt.target.getAttribute("data-barId"));
      this.setState({
        currentActiveBar:CAB
      });
    }
    console.log("Target attribut equals ", evt.target.getAttribute("data-barId"))

  },

  render() {

    return (
      <div>


        <MuiThemeProvider>
          <RaisedButton onClick={this.open}label="Preview" primary={true} />
        </MuiThemeProvider>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Video Preview </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="videoPreview" className="videoPreview backgroundImageForVideoPreview">
            { 
                              this.props.items.map((text,index)=>{
                  return createTextPreview(text,index,this.state.currentActiveBar,this.state.length)
                })
              
            }
            {
              this.props.compositionItems.map((src,index)=>
                {
                  return createVideoPreviewImages(src,index,this.state.currentActiveBar,this.state.length)
                })
            }

            </div>
            <div onClick={this.handleTopClick}id="loadingBarContainer">
            {
              this.props.compositionItems.map((value,index)=>
              {
                return createLoadBoars(value,index,this.state.currentActiveBar);
              })
            }
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = PreviewModal;