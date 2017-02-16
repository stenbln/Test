var React = require('react');
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap/';
import {Link} from 'react-router';

var NavigationBar = React.createClass({
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
             <Nav>
                  <NavItem href="#"><Link eventKey={1} to="editor">Editor</Link></NavItem>
                  <NavItem eventKey={2} href="#"><Link to="settings">Settings</Link></NavItem>
             </Nav>
             <Nav pullRight>
               <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                 <MenuItem eventKey={3.1}>My videos</MenuItem>
                 <MenuItem eventKey={3.2}>Settings</MenuItem>
                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
                 <MenuItem divider />
                 <MenuItem eventKey={3.3}>Logout</MenuItem>
               </NavDropdown>
             </Nav>
           </Navbar.Collapse>
          </Navbar>
        </div>
        )
    }
});

module.exports = NavigationBar;