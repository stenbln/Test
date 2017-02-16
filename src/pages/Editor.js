import React, { Component } from 'react';
import './App.css';
import SortableComponent from '../components/SortableComponent';
import SortableStore from '../stores/SortableStore';
import CompositionStore from '../stores/CompositionStore';
import * as SortableActions from '../actions/SortableActions'
import Timeline from '../components/Timeline';
import SplitContainer from '../components/SplitContainer';


class Editor extends Component {
  constructor(props){
    super();
    this.state = {
      items : SortableStore.getAll(),
      compositionItems:CompositionStore.getAll()
    }
    this.getItems = this.getItems.bind(this);
  }
  componentWillMount(){
    SortableStore.on("change", this.getItems);
    CompositionStore.on("change",this.getItems);
  }
  componentWillUnmount(){
    SortableStore.removeListener("change", this.getItems);
    CompositionStore.removeListener("change", this.getItems);
  }
  getItems(){
    this.setState({
      items:SortableStore.getAll(),
      compositionItems:CompositionStore.getAll(),
    });
  }
  render() {
    return (
      <div>
          {/*<SortableComponent items={this.state.items} /><br/><br/><br/>*/}
          <SplitContainer items={this.state.items} compositionItems={this.state.compositionItems}/>
          <Timeline compositionItems={this.state.compositionItems}/>
      </div>
    );
  }
} 

export default Editor;
