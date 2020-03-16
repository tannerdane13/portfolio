import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';


class NavBar extends Component {
	render () {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Home">Tanner Jensen</Navbar.Brand>
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
            <Dropdown.Item style={{color: "white"}} href="/Comics">Comics</Dropdown.Item>
            <Dropdown.Item style={{color: "white"}} href="/InkIllustrations">Ink Illustrations</Dropdown.Item>
            <Dropdown.Item style={{color: "white"}} href="/Storyboards">Storyboards</Dropdown.Item>
            <Dropdown.Item style={{color: "white"}} href="/Contact">Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    )          
  }
}

export default NavBar;
