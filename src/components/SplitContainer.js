//import React, { Component } from 'react';
import React, { Component } from 'react';
var RawText = require('./RawText');
var BasePhotosComponent = require('./BasePhotosComponent');
var StackedImages = require('./StackedImages');
var CaptionsTabBar = require('./CaptionsTabBar');
import SortableComponent from '../components/SortableComponent';
//var List = require('./SortableItem');
var Title = require('./Title');
import SortableCompositions from '../components/SortableCompositions';


import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'



class SplitContainer extends Component{

  render(){
    return (
    <div style={{height:'calc(100vh - 120px)',textAlign:'center'}}>
     <ReflexContainer orientation="vertical">

        <ReflexElement 
          flex={0.20}
          className="left-pane"
          minSize="200">
          <div className="pane-content">
            <Title title="Sentences"></Title>
            <RawText loader={this.props.loader} sentences={this.props.sentences}/>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true}/>

        <ReflexElement 
          flex={0.20}
          className="left-pane"
          minSize="200">
          <div className="pane-content">
            <Title title="Captions"></Title>
            <CaptionsTabBar currentActiveState={this.props.currentActiveState} loader={this.props.loader} items={this.props.items} itemsAutomatic={this.props.itemsAutomatic}/>
            
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true}/>

        <ReflexElement className="middle-pane"
          minSize="200"
          maxSize="15000">
          <div id="imageResults" style={{height:'100%',overflow:'scroll'}}  className="pane-content">
            <Title title="Media"></Title>
            <label>
              <BasePhotosComponent page={this.props.page} chipData={this.props.chipData} images={this.props.images} imagesLoader={this.props.imagesLoader}/>
            </label>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true}/>

        <ReflexElement 
          flex={0.20}
          className="right-pane"
          minSize="200">
          <div className="pane-content">
            <Title title="Scenes"></Title>
            <SortableCompositions items={this.props.currentActiveState=="Manual"?this.props.items:this.props.itemsAutomatic} compositionItems={this.props.compositionItems}/>
          </div>
        </ReflexElement>

      </ReflexContainer>
    </div>
    );
  }
};



export default SplitContainer;
//export default App;
