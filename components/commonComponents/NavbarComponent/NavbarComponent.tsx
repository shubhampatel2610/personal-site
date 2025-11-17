import React from "react";
import "./NavbarComponent.scss";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";

const NavbarComponent = () => {
  return (
    <div className="navbarStyles">
      <DesktopNavbarComponent />
      <MobileNavbarComponent />
    </div>
  );
};

export default NavbarComponent;
