var React = require('react');
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var ImageSearchBar = require('./ImageSearchBar');
var VideoSearchBar = require('./VideoSearchBar');
var StackedImages = require('./StackedImages');
var StackedVideos = require('./StackedVideos');
var StackedMusic = require('./StackedMusic');
import * as ImagesActions from '../actions/ImagesActions'
import * as VideosActions from '../actions/VideosActions'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  text:{
    color:'#433',
  },
  background:{
    backgroundColor:'#ffffff',

  }
};

var MediaTabBar = React.createClass({
    getInitialState:function(){
        return {value:'a'}
    },
    handleChange:function(value){
        this.setState({value:value})
    },
    handleScrolls:function(evt){
      if(document.getElementById("imageResults").scrollTop + window.innerHeight -120 >=document.getElementById("imageResults").scrollHeight){
        console.log("scro fire images tab page number: ", this.props.page);
        //console.log("scro fire chipData: ", this.props.chipData.length, "  ", this.state.value);
        if(this.state.value=="a" && this.props.chipData.length>0){// otherwise it would fire when all chips are deleted
          ImagesActions.loadMoreImages(this.props.chipData.map((chip)=>chip.label),this.props.page+1)// e.g. parametars could be ["apple", "china", "Moon"], 3
        }else if(this.state.value=="b" && this.props.videosChipData.length>0){
          VideosActions.loadMoreVideos(this.props.videosChipData.map((chip)=>chip.label),this.props.videosPage+1)
        }
      } 
      //console.log("scrolled",  document.getElementById("imageResults").scrollTop, +"   "+  window.innerHeight + '  ' + document.getElementById("imageResults").scrollHeight)
    },
    render:function(){
      if(document.getElementById("imageResults")!=null){
        document.getElementById("imageResults").addEventListener('scroll', this.handleScrolls);
      }
        return (
    <MuiThemeProvider>
      <Tabs tabTemplateStyle={{textAlign:'center'}} inkBarStyle={{background:'indianred'}} tabItemContainerStyle={styles.background}
        value={this.state.value}
        onChange={this.handleChange}>
        <Tab style={styles.text} label="Images" value="a">
          <div>
            <ImageSearchBar chipData={this.props.chipData}/>
            <StackedImages images={this.props.images} imagesLoader={this.props.imagesLoader}/>
          </div>
        </Tab>
        <Tab style={styles.text} label="Videos" value="b">
          <div>
            <VideoSearchBar chipData={this.props.videosChipData}/>
            <StackedVideos videos={this.props.videos} videosLoader={this.props.videosLoader}/>
          </div>
        </Tab>
        <Tab style={styles.text} label="Music" value="c">
          <div>
            <h2 style={styles.headline}>Select a track for your video</h2><br></br>
            <StackedMusic sounds={this.props.sounds} selectedSoundId={this.props.selectedSoundId} currentPlayingSound={this.props.currentPlayingSound}/>
          </div>
        </Tab>
        <Tab style={styles.text} label="Upload" value="d">
          <div>
            <h2 style={styles.headline}>Upload your own files</h2>
            <p>
              (This feature is currently being developed)
            </p>
          </div>
        </Tab>
      </Tabs>
    </MuiThemeProvider>
)
    }
});

module.exports = MediaTabBar;