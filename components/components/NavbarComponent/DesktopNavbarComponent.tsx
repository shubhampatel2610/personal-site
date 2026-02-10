/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import "./NavbarComponent.scss";
import AppConstants from "@/constant/AppConstants";
import Link from "next/link";
import { Button } from "primereact/button";
import { observer } from "mobx-react-lite";
import NavbarStore from "@/store/NavbarStore";

const DesktopNavbarComponent = observer(() => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        NavbarStore.setNavBgColor(true);
      } else {
        NavbarStore.setNavBgColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadClick = (e: any) => {
    e.preventDefault();
    window.open(AppConstants.DOWNLOAD_CV_LINK, "_blank");
  };

  return (
    <div
      className={`desktopNavbarStyles ${
        NavbarStore.navbgColor ? "navBgActive" : ""
      }`}
    >
      <div className="logoContainer">
        <i className="pi pi-code" style={{ fontSize: "2rem" }}></i>
        <span className="navbarTitle">{AppConstants.USER_NAME}</span>
      </div>
      {(NavbarStore.currentDevice === AppConstants.DESKTOP_DEVICE) ? (
        <div className="navlinkContainer">
          {AppConstants.NAVLINKS.map((link) => {
            const sectionId = link.url.replace("#", "");
            const isActive = NavbarStore.activeSection === sectionId;
            return (
              <Link
                className={`singleNavlink ${isActive ? "active" : ""}`}
                key={link.id}
                href={link.url}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      <div className="buttonContainer">
        <Button
          label={
            NavbarStore.currentDevice !== AppConstants.MOBILE_DEVICE
              ? AppConstants.DOWNLOAD_BUTTON_LABEL
              : ""
          }
          icon="pi pi-download"
          iconPos="right"
          onClick={handleDownloadClick}
        />
        <div
          className="menuIcon"
          onClick={() => {
            NavbarStore.showMobileMenu(true);
          }}
        >
          <i className="pi pi-bars"></i>
        </div>
      </div>
    </div>
  );
});

export default DesktopNavbarComponent;
