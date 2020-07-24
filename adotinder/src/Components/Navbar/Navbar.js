import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './navbar.css'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div> 
      <Navbar className="nav_geral" light expand="md">
        <NavbarBrand className="nav_text" href="/">Adotinder</NavbarBrand>
        <NavbarToggler className="menu" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Sobre/">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/deboranis" target="blank">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;