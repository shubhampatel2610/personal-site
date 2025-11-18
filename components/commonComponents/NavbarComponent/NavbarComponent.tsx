"use client";

import "./NavbarComponent.scss";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";
import { observer } from "mobx-react-lite";
import NavbarStore from "@/store/NavbarStore";

const NavbarComponent = observer(() => {
  return (
    <div className="navbarStyles">
      <DesktopNavbarComponent />
      {(NavbarStore.isMobileMenuVisible) && <MobileNavbarComponent />}
    </div>
  );
});

export default NavbarComponent;
