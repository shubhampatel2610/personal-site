import React from "react";
import "./NavbarComponent.scss";
import AppConstants from "@/constant/AppConstants";
import Link from "next/link";
import { Button } from "primereact/button";

const DesktopNavbarComponent = () => {
  return (
    <div className="desktopNavbarStyles">
      <div className="logoContainer">
        <i className="pi pi-code" style={{ fontSize: "2rem" }}></i>
        <span className="navbarTitle">{AppConstants.USER_NAME}</span>
      </div>
      <div className="navlinkContainer">
        {AppConstants.NAVLINKS.map((link) => (
          <Link className="singleNavlink" key={link.id} href={link.url}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="buttonContainer">
        <Button
          className="downloadCvButton"
          label={AppConstants.DOWNLOAD_BUTTON_LABEL}
          icon="pi pi-download"
          iconPos="right"
        />
        <div className="menuIcon lg:hidden">
          <i className="pi pi-ellipsis-v"></i>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbarComponent;
