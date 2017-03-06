import React, { Component } from 'react';
import SortableComponent from '../components/SortableComponent';
import SortableStore from '../stores/SortableStore';
import SortableStoreAutomatic from '../stores/SortableStoreAutomatic';
import CompositionStore from '../stores/CompositionStore';
import ImagesStore from '../stores/ImagesStore';
import VideosStore from '../stores/VideosStore';
import SentencesStore from '../stores/SentencesStore';
import SoundsStore from '../stores/SoundsStore';
import * as SortableActions from '../actions/SortableActions'
import Timeline from '../components/Timeline';
import SplitContainer from '../components/SplitContainer';


class Editor extends Component {
  constructor(props){
    super();
    this.state = {
      items : SortableStore.getAll().items,
      itemsAutomatic:SortableStoreAutomatic.getAll(),
      compositionItems:CompositionStore.getAll().compositionItems,
      dragging:CompositionStore.getAll().dragging,
      sentences:SentencesStore.getAll().sentences,
      loader:SentencesStore.getAll().loader,
      currentActiveState:SortableStore.getAll().currentActiveState,
      images:ImagesStore.getAll().images,
      imagesLoader:ImagesStore.getAll().imagesLoader,
      chipData:ImagesStore.getAll().chipData,
      page:ImagesStore.getAll().page,

      videos:VideosStore.getAll().videos,
      videosLoader:VideosStore.getAll().videosLoader,
      videosChipData:VideosStore.getAll().chipData,
      videosPage:VideosStore.getAll().page,

      sounds:SoundsStore.getAll().sounds,
      selectedSoundId:SoundsStore.getAll().selectedSoundId,
      selectedSoundUrl:SoundsStore.getAll().selectedSoundUrl,
      currentPlayingSound:SoundsStore.getAll().currentPlayingSound,

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
    VideosStore.on("change", this.getItems);
    SoundsStore.on("change", this.getItems);

  }
  componentWillUnmount(){
    SortableStore.removeListener("change", this.getItems);
    SortableStoreAutomatic.removeListener("change", this.getItems);
    CompositionStore.removeListener("change", this.getItems);
    SentencesStore.removeListener("change", this.getItems);
    ImagesStore.removeListener("change", this.getItems);
    VideosStore.removeListener("change", this.getItems);
    SoundsStore.removeListener("change", this.getItems);


  }
  getItems(){
    this.setState({
      items:SortableStore.getAll().items,
      itemsAutomatic:SortableStoreAutomatic.getAll(),
      compositionItems:CompositionStore.getAll().compositionItems,
      dragging:CompositionStore.getAll().dragging,
      sentences:SentencesStore.getAll().sentences,
      loader:SentencesStore.getAll().loader,
      currentActiveState:SortableStore.getAll().currentActiveState,
      images:ImagesStore.getAll().images,
      imagesLoader:ImagesStore.getAll().imagesLoader,
      chipData:ImagesStore.getAll().chipData,
      page:ImagesStore.getAll().page,

      videos:VideosStore.getAll().videos,
      videosLoader:VideosStore.getAll().videosLoader,
      videosChipData:VideosStore.getAll().chipData,
      videosPage:VideosStore.getAll().page,

      sounds:SoundsStore.getAll().sounds,
      selectedSoundId:SoundsStore.getAll().selectedSoundId,
      selectedSoundUrl:SoundsStore.getAll().selectedSoundUrl,
      currentPlayingSound:SoundsStore.getAll().currentPlayingSound,

    });
  }
  render() {
    return (
      <div>
          {/*<SortableComponent items={this.state.items} /><br/><br/><br/>*/}
          <SplitContainer 
            page={this.state.page} 
            chipData={this.state.chipData} 
            images={this.state.images} 
            imagesLoader={this.state.imagesLoader} 
            currentActiveState={this.state.currentActiveState} 
            loader={this.state.loader} //loader to display while loading sentences
            sentences={this.state.sentences} 
            items={this.state.items} //caption items
            itemsAutomatic={this.state.itemsAutomatic} // automatic caption items
            dragging={this.state.dragging} // flag while reordering compositions 
            compositionItems={this.state.compositionItems}

            videos={this.state.videos}
            videosLoader={this.state.videosLoader}
            videosChipData={this.state.videosChipData}
            videosPage={this.state.videosPage}

            sounds={this.state.sounds}
            selectedSoundId={this.state.selectedSoundId}
            selectedSoundUrl={this.state.selectedSoundUrl}
            currentPlayingSound={this.state.currentPlayingSound}/>
          <Timeline currentActiveState={this.state.currentActiveState} items={this.state.items} itemsAutomatic={this.state.itemsAutomatic} compositionItems={this.state.compositionItems}/>
      </div>
    );
  }
} 

export default Editor;
