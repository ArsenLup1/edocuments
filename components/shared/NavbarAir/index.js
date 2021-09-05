import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import Bouton from "../Bouton";
import NavbarStc from "./navbar.stc";

const MenuHeader = [];

const MainNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavbarStc light expand="md">
        <Container>
          <NavbarBrand href="/" className="siteLogo mr-auto">
            <img src="/img/logo.jpeg" height="70" className="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto mx-auto" navbar>
              {MenuHeader.map((menu, index) => (
                <NavItem key={1 + index + "menuHeader"}>
                  <Link href={menu.chemin}>
                    <a className="nav-link">
                      <span className="texte">{menu.texte} </span>
                    </a>
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
          <NavbarBrand href="/" className="siteLogo ">
              <Bouton texte={"CONNEXION ETUDE"}  />
          </NavbarBrand>
        </Container>
      </NavbarStc>
    </div>
  );
};

export default MainNav;