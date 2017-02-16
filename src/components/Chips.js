import React from 'react';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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


var Chips = React.createClass({
    getInitialState:function(){
        return {chipData: [
            {key: 0, label: 'Clouds'},
            {key: 1, label: 'Water'},
            {key: 2, label: 'Ocean'},
            {key: 3, label: 'ReactJS'},
        ]}
    },
    handleRequestDelete:function(key){
        this.chipData = this.state.chipData;
        const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
        this.chipData.splice(chipToDelete, 1);
        this.setState({chipData: this.chipData});
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
            {this.state.chipData.map(this.renderChip, this)}
        </div>
    )}

});

module.exports = Chips;
