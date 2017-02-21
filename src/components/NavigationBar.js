var React = require('react');
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap/';
import {Link} from 'react-router';

var NavigationBar = React.createClass({
    onSelect:function(evt){
      console.log(evt);
    },
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