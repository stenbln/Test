import React, { Component } from 'react';
import SortableComponent from '../components/SortableComponent';
import SortableStore from '../stores/SortableStore';
import SortableStoreAutomatic from '../stores/SortableStoreAutomatic';
import CompositionStore from '../stores/CompositionStore';
import ImagesStore from '../stores/ImagesStore';
import SentencesStore from '../stores/SentencesStore';
import * as SortableActions from '../actions/SortableActions'
import Timeline from '../components/Timeline';
import SplitContainer from '../components/SplitContainer';


class Editor extends Component {
  constructor(props){
    super();
    this.state = {
      items : SortableStore.getAll().items,
      itemsAutomatic:SortableStoreAutomatic.getAll(),
      compositionItems:CompositionStore.getAll(),
      sentences:SentencesStore.getAll().sentences,
      loader:SentencesStore.getAll().loader,
      currentActiveState:SortableStore.getAll().currentActiveState,
      images:ImagesStore.getAll().images,
      imagesLoader:ImagesStore.getAll().imagesLoader,
      chipData:ImagesStore.getAll().chipData,
      page:ImagesStore.getAll().page,
    }
    console.log("call to sentence store ",SentencesStore.getAll().sentences)
    this.getItems = this.getItems.bind(this);
  }
  componentWillMount(){
    SortableStore.on("change", this.getItems);
    SortableStoreAutomatic.on("change", this.getItems);
    CompositionStore.on("change",this.getItems);
    SentencesStore.on("change",this.getItems);
    ImagesStore.on("change", this.getItems);
  }
  componentWillUnmount(){
    SortableStore.removeListener("change", this.getItems);
    SortableStoreAutomatic.removeListener("change", this.getItems);
    CompositionStore.removeListener("change", this.getItems);
    SentencesStore.removeListener("change", this.getItems);
    ImagesStore.removeListener("change", this.getItems);
  }
  getItems(){
    this.setState({
      items:SortableStore.getAll().items,
      itemsAutomatic:SortableStoreAutomatic.getAll(),
      compositionItems:CompositionStore.getAll(),
      sentences:SentencesStore.getAll().sentences,
      loader:SentencesStore.getAll().loader,
      currentActiveState:SortableStore.getAll().currentActiveState,
      images:ImagesStore.getAll().images,
      imagesLoader:ImagesStore.getAll().imagesLoader,
      chipData:ImagesStore.getAll().chipData,
      page:ImagesStore.getAll().page,
    });
  }
  render() {
    return (
      <div>
          {/*<SortableComponent items={this.state.items} /><br/><br/><br/>*/}
          <SplitContainer page={this.state.page} chipData={this.state.chipData} images={this.state.images} imagesLoader={this.state.imagesLoader} currentActiveState={this.state.currentActiveState} loader={this.state.loader} sentences={this.state.sentences} items={this.state.items} itemsAutomatic={this.state.itemsAutomatic} compositionItems={this.state.compositionItems}/>
          <Timeline currentActiveState={this.state.currentActiveState} items={this.state.items} itemsAutomatic={this.state.itemsAutomatic} compositionItems={this.state.compositionItems}/>
      </div>
    );
  }
} 

export default Editor;
