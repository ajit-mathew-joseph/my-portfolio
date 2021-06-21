import "./NavBar.scss";
import React from "react";
import Logo from "../../Assets/Logo/PersonalLogo.png";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar(props) {
  return (
    <div className="header-container">
      <div className="header-mobile">
        <img src={Logo} className="header-mobile__logo" alt="site logo" />
        <Menu right noOverlay className={"header-mobile__list"}>
          <HashLink to="/#about_me" className="header-mobile__link"><p className="header-mobile__list-item">ABOUT</p></HashLink>
          <HashLink to="/#my_projects" className="header-mobile__link"><p className="header-mobile__list-item">PROJECTS</p></HashLink>
          <HashLink to="/#contact_me" className="header-mobile__link"><p className="header-mobile__list-item">CONTACT</p></HashLink>
        </Menu>
      </div>

      <div className="header-desktop">
        <img src={Logo} className="header-desktop__logo" alt="site logo" />

        <div className="header-desktop__container">
          <ul className="header-desktop__list">
          <HashLink to="/#about_me" className="header-desktop__link"><li className="header-desktop__list-item">ABOUT</li></HashLink>
          <HashLink to="/#my_projects" className="header-desktop__link"><li className="header-desktop__list-item">PROJECTS</li></HashLink>
          <HashLink to="/#contact_me" className="header-desktop__link"><li className="header-desktop__list-item">CONTACT</li></HashLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
