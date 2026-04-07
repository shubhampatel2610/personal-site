"use client";

import { observer } from "mobx-react-lite";
import NavbarStore from "@/store/NavbarStore";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";

const NavbarComponent = observer(() => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop blur bar */}
      <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.06]" />

      {/* Content layer */}
      <div className="relative z-10">
        <DesktopNavbarComponent />

        {/* Mobile menu — conditionally rendered, store logic untouched */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${NavbarStore.isMobileMenuVisible
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
            }
          `}
        >
          <MobileNavbarComponent />
        </div>
      </div>
    </header>
  );
});

export default NavbarComponent;