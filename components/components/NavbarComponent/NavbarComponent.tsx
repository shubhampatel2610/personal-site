"use client";

import { observer } from "mobx-react-lite";
import NavbarStore from "@/store/NavbarStore";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";

const NavbarComponent = observer(() => {
  const headerClasses = "fixed top-0 left-0 right-0 z-50";
  const backdropClasses = "absolute inset-0 bg-[rgba(20,18,15,0.8)] backdrop-blur-md border-b border-[var(--border-subtle)]";
  const mobileMenuTransitionClasses = "overflow-hidden transition-all duration-300 ease-in-out";
  const mobileMenuVisibleClasses = "max-h-screen opacity-100";
  const mobileMenuHiddenClasses = "max-h-0 opacity-0 pointer-events-none";

  return (
    <header className={headerClasses}>
      <div className={backdropClasses} />

      <div className="relative z-10">
        <DesktopNavbarComponent />

        <div
          className={`${mobileMenuTransitionClasses} ${NavbarStore.isMobileMenuVisible ? mobileMenuVisibleClasses : mobileMenuHiddenClasses}`}
        >
          <MobileNavbarComponent />
        </div>
      </div>
    </header>
  );
});

export default NavbarComponent;