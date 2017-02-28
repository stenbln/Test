var React = require('react');
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var ImageSearchBar = require('./ImageSearchBar');
var StackedImages = require('./StackedImages');
var StackedVideos = require('./StackedVideos');
import * as ImagesActions from '../actions/ImagesActions'

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
        console.log("scro fire ", this.props.page);
        ImagesActions.loadMoreImages(this.props.chipData.map((chip)=>chip.label),this.props.page+1)// e.g. parametars could be ["apple", "china", "Moon"], 3
      } 
      //console.log("scrolled",  document.getElementById("imageResults").scrollTop, +"   "+  window.innerHeight + '  ' + document.getElementById("imageResults").scrollHeight)
    },
    render:function(){
      if(document.getElementById("imageResults")!=null){
        document.getElementById("imageResults").addEventListener('scroll', this.handleScrolls);
      }
        return (
    <MuiThemeProvider>
      <Tabs inkBarStyle={{background:'indianred'}} tabItemContainerStyle={styles.background}
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
            <h2 style={styles.headline}>Videos</h2>
            <ImageSearchBar chipData={this.props.chipData}/>
            <StackedVideos images={this.props.images} imagesLoader={this.props.imagesLoader}/>
          </div>
        </Tab>
        <Tab style={styles.text} label="Music" value="c">
          <div>
            <h2 style={styles.headline}>Tracks for your video</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
        <Tab style={styles.text} label="Upload" value="c">
          <div>
            <h2 style={styles.headline}>Upload</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    </MuiThemeProvider>
)
    }
});

module.exports = MediaTabBar;