import React, { Component } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import styled from 'styled-components'

const StyledDropdownItem = styled(Dropdown.Item)`
  background-color: palevioletred;
`;


class NavBar extends Component {
	render () {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Comics">Tanner Jensen</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Comics">Comics</Nav.Link>
          <Nav.Link href="/InkIllustrations">Ink Illustrations</Nav.Link>
          <Nav.Link href="/Storyboards">Storyboards</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu style={{backgroundColor: "gray"}} alignRight variant="dark">
            <StyledDropdownItem href="/Comics">Comics</StyledDropdownItem>
            <StyledDropdownItem href="/InkIllustrations">Ink Illustrations</StyledDropdownItem>
            <StyledDropdownItem href="/Storyboards">Storyboards</StyledDropdownItem>
            <StyledDropdownItem href="/Contact">Contact</StyledDropdownItem>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    )          
  }
}

export default NavBar;
