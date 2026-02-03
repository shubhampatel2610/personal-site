"use client";

import AppConstants from "@/constant/AppConstants";
import NavbarStore from "@/store/NavbarStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const MobileNavbarComponent = observer(() => {
  return (
    <div>
      <div className="mobileNavbarOverlay"></div>
      <div className="mobileNavbarContainer">
        <div
          className="buttonContainer"
          onClick={() => {
            NavbarStore.showMobileMenu(false);
          }}
        >
          <i className="pi pi-times"></i>
        </div>
        <div className="navlinksContainer">
          {AppConstants.NAVLINKS.map((link) => (
            <Link className="singleNavlink" key={link.id} href={link.url}>
              <label>{link.label}</label>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MobileNavbarComponent;
