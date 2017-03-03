import React from 'react';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as VideosActions from '../actions/VideosActions'


const styles = {
    chip: {
        margin: 2,
    },
    wrapper: {
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom:'18px'
    }
};


var VideoChips = React.createClass({
    getInitialState:function(){
        return {chipData: this.props.chipData}
        console.log("componentWill loaded ")
    },
    componentDidMount:function(){
        console.log("componentWill mount ")
    },
    handleRequestDelete:function(key){
        //console.log("new state DATA   ", this.state.chipData)
        this.chipData = this.props.chipData;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1);
        this.chipData.map((chip,index) => chip.key=index).indexOf(key);
        this.setState({chipData: this.chipData});
        console.log("new spliced CHIP DATAA   ", this.chipData)
        VideosActions.updateChips(this.chipData);
        VideosActions.loadVideos(this.chipData.map((chip)=>chip.label),1); //send array of updated chips e.g. ["Cloudsss", "Water", "Ocean", "ReactJS"] and page number of 1
    },
    renderChip:function(data,i){
        return(
            <MuiThemeProvider 
              key={data.key} >
                <Chip
                  onRequestDelete={() => this.handleRequestDelete(data.key)}
                  style={styles.chip}>
                    {data.label}
                </Chip>
            </MuiThemeProvider>
        )
    },
    render:function(){
        return (
        <div style={styles.wrapper}>
            {this.props.chipData.map(this.renderChip, this)}
        </div>
    )}

});

module.exports = VideoChips;
