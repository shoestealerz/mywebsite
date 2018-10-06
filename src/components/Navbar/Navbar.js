import React, { Component } from 'react'
import {NavContainer, NavItem} from './Navbar.style'


class Navbar extends Component {
  render() {
    return (
      <NavContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="projects">Projects</NavItem>
        <NavItem to="about">About</NavItem>
      </NavContainer>
    )
  }
}
export default Navbar;
