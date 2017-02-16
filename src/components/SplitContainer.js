//import React, { Component } from 'react';
import React, { Component } from 'react';
var RawText = require('./RawText');
var BasePhotosComponent = require('./BasePhotosComponent');
var StackedImages = require('./StackedImages');
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
            <RawText/>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true}/>

        <ReflexElement 
          flex={0.20}
          className="left-pane"
          minSize="200">
          <div className="pane-content">
            <Title title="Captions"></Title>
            <SortableComponent items={this.props.items}/>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true}/>

        <ReflexElement className="middle-pane"
          minSize="200"
          maxSize="15000">
          <div className="pane-content">
            <Title title="Media"></Title>
            <label>
              <BasePhotosComponent/>
            </label>
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true}/>

        <ReflexElement 
          flex={0.20}
          className="right-pane"
          minSize="200">
          <div className="pane-content">
            <Title title="Compositions"></Title>
            <SortableCompositions compositionItems={this.props.compositionItems}/>
          </div>
        </ReflexElement>

      </ReflexContainer>
    </div>
    );
  }
};



export default SplitContainer;
//export default App;
