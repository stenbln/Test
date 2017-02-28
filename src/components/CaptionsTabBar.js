var React = require('react');
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SortableComponent from '../components/SortableComponent';
import SortableComponentAutomatic from '../components/SortableComponentAutomatic';
var Spinner = require('react-spinkit');
import './RawText.css' //this contains css for hiding and displaying loading icon
import * as SortableActions from '../actions/SortableActions';

const styles = {
  headline: {
    fontSize: 16,
    paddingTop: 10,
    marginBottom: 12,
    fontWeight: 200,
  },
  text:{
    color:'#433',
  },
  background:{
    backgroundColor:'#ffffff',

  }
};

var CaptionsTabBar = React.createClass({

    handleChange:function(value){
      SortableActions.setCurrentActiveState(value);
    },

    render:function(){
    return (
    <MuiThemeProvider>
      <Tabs inkBarStyle={{background:'indianred'}} tabItemContainerStyle={styles.background}
        value={this.props.currentActiveState}
        onChange={this.handleChange}>
        <Tab style={styles.text} label="Manual" value="Manual">
          <SortableComponent items={this.props.items}/>
        </Tab>
        <Tab style={styles.text} label="Automatic" value="Automatic">
          <Spinner className={this.props.loader?'':'displayNone'} style={{paddingTop:'30%', textAlign:'center'}} spinnerName='three-bounce' />
          <SortableComponentAutomatic loader={this.props.loader} itemsAutomatic={this.props.itemsAutomatic}/>
        </Tab>
      </Tabs>
    </MuiThemeProvider>
)
    }
});

module.exports = CaptionsTabBar;