var React = require('react');
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,FormControl,Button} from 'react-bootstrap/';
import {Link} from 'react-router';
import * as SentencesActions from '../actions/SentencesActions';
import * as SortableActions from '../actions/SortableActions';
var SearchBar = require('./SearchBar');

var NavigationBar = React.createClass({
/*    getInitialState(){
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
      console.log("Submit button clicked ", this.state.searchInput);
      var url = this.state.searchInput;
      if(this.state.searchInput==""){alert('Please paste the url in the search box and try again')}
      else{
        SentencesActions.loadSentences(url);
        SortableActions.setCurrentActiveState('Automatic');
      }
      
    },*/
    render:function(){
        return(
        <div>
         <Navbar style={{borderRadius:0,marginBottom:0,borderBottom:'solid 4px indianred'}} fluid={false} inverse collapseOnSelect>
           <Navbar.Header>
             <Navbar.Brand>
               <a href="#">SpeedBoat</a>
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>

{/*              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl style={{color:'#5c68cd'}} onChange={this.handleChange} type="text" placeholder="Enter article URL" />
                </FormGroup>
                  {' '}
                <Button onClick={this.handleClick}type="submit">Submit</Button>
              </Navbar.Form>*/}
              <Navbar.Form pullLeft><SearchBar/></Navbar.Form>

             <Nav pullRight>
               <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                 <MenuItem href="/#/my-videos" onSelect={this.onSelect} to="settings" eventKey="my-videos">My videos</MenuItem>
                 <MenuItem href="/#/editor" onSelect={this.onSelect} eventKey="editor">Editor</MenuItem>
                 <MenuItem href="/#/settings" onSelect={this.onSelect} eventKey={3.3}>Settings</MenuItem>
                 <MenuItem divider />
                 <MenuItem href="/#/logout" onSelect={this.onSelect} eventKey="logout">Logout</MenuItem>
               </NavDropdown>
             </Nav>
           </Navbar.Collapse>
          </Navbar>
        </div>
        )
    }
});

module.exports = NavigationBar;