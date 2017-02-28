var React = require('react');
import './SearchBar.css'
import * as SentencesActions from '../actions/SentencesActions';
import * as SortableActions from '../actions/SortableActions';
import * as ImagesActions from '../actions/ImagesActions';


var SearchBar = React.createClass({
    getInitialState(){
      return{searchInput:''}
    },  
    onSelect:function(evt){
      console.log(evt);
    },
    handleChange:function (evt) {
      console.log("Value changed  ", evt.target.value);
      this.setState({
        searchInput:evt.target.value
      })
    },
    handleClick:function (evt) {
      console.log("Submit button clicked ", this.state.searchInput, document.getElementById("urlPlaceHolder").value);
      var url = this.state.searchInput;
      if(this.state.searchInput==""){alert('Please paste the url in the search box and try again')}
      else{
        SentencesActions.loadSentences(url);
        SortableActions.setCurrentActiveState('Automatic');
        //ImagesActions.loadImages(['apple','china'],1); this is handled in SentencesActions.js
      }
      
    },

    clearState:function(evt){
        document.getElementById("urlPlaceHolder").value = "";
        this.setState({
            searchInput:''
        })
    },

    render:function(){
        return(
        <div className="search-wrapper active">
            <div className="input-holder">
                <input onChange={this.handleChange} id="urlPlaceHolder" type="text" className="search-input" placeholder="Enter article URL here" />
                <button onClick={this.handleClick} className="search-icon" ><span></span></button>
            </div>
            <span onClick={this.clearState} className="closeX"></span>
        </div>
        )
    }
});

module.exports = SearchBar;