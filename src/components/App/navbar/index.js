import React from 'react';
import {
 
  Navbar,
  Nav,
  NavItem,
  //NavDropdown,
  //MenuItem
} from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
 

 class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        isOpen: false,
        tetherConfig: {
          target: '#tether',
          attachment: 'middle left',
          targetAttachment: 'middle right',
          classPrefix: 'bs-tether',
          classes: { element: 'popover', enabled: 'open' },
          constraints: [
            { to: 'scrollParent', attachment: 'together none' },
            { to: 'window', attachment: 'together none' }
          ]
        }
      };
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    
state = {
    isOpen: false
  };

toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
}

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect bg="light">
  {/* <Navbar.Header>
    <Navbar.Brand>
      <a href="/home">Casetta</a>
    </Navbar.Brand>
  </Navbar.Header> */}
  <Nav>
    {/* <NavDropdown eventKey={3} title="Price" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Rs.3000</MenuItem>
      <MenuItem eventKey={3.2}>Rs.4000</MenuItem>
      <MenuItem eventKey={3.3}>Rs.5000</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Reset</MenuItem>
    </NavDropdown> */}
    <NavItem eventKey={1} href="/details">
      login
    </NavItem>
    <NavItem eventKey={2} href="#">
      sign up
    </NavItem>
  </Nav>
</Navbar>
      </div>
    )
  }
}

export default NavBar;