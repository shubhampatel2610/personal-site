/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import AppConstants from "@/constant/AppConstants";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import NavbarStore from "@/store/NavbarStore";
import { Button } from "primereact/button";

const DesktopNavbarComponent = observer(() => {
  // Scroll listener — kept intentionally, drives NavbarStore.navbgColor
  useEffect(() => {
    const handleScroll = () => {
      NavbarStore.setNavBgColor(window.scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDesktop = NavbarStore.currentDevice === AppConstants.DESKTOP_DEVICE;
  const isMobile = NavbarStore.currentDevice === AppConstants.MOBILE_DEVICE;

  return (
    <nav
      className={`
        w-full px-2 md:px-10 lg:px-16 h-16 flex items-center justify-between
        transition-all duration-300 ease-in-out
        ${NavbarStore.navbgColor
          ? "bg-[#0a0a0a]/95 shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
        }
      `}
    >
      {/* ── Logo ── */}
      <Link
        href="/"
        className="flex items-center gap-2.5 group select-none"
      >
        <span className="flex items-center justify-center p-2 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 group-hover:bg-[#3B82F6]/20 group-hover:border-[#3B82F6]/40 transition-all duration-300">
          <i className="pi pi-code text-[#3B82F6] text-xl" />
        </span>
        <span className="text-white font-semibold text-base tracking-tight group-hover:text-[#3B82F6] transition-colors duration-300">
          {AppConstants.USER_NAME}
        </span>
      </Link>

      {/* ── Desktop Nav Links ── */}
      {isDesktop && (
        <ul className="flex items-center gap-1">
          {AppConstants.NAVLINKS.map((link) => {
            const sectionId = link.url.replace("#", "");
            const isActive = NavbarStore.activeSection === sectionId;

            return (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-md
                    transition-all duration-200 ease-in-out
                    ${isActive
                      ? "text-white"
                      : "text-[#a1a1aa] hover:text-white"
                    }
                  `}
                >
                  {/* Active pill bg */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-md bg-white/[0.06] border border-white/[0.08]" />
                  )}
                  {/* Active blue dot */}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#3B82F6]" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {/* ── Right Actions ── */}
      <div className="flex items-center gap-3">

        {/* Download CV button */}
        <a
          href={AppConstants.DOWNLOAD_CV_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center gap-2 p-3 md:px-4 md:py-2 rounded-lg text-sm font-medium
            border border-[#3B82F6]/30 text-[#3B82F6]
            bg-[#3B82F6]/5 hover:bg-[#3B82F6]/15 hover:border-[#3B82F6]/60
            transition-all duration-200 ease-in-out
            hover:shadow-[0_0_16px_rgba(59,130,246,0.2)]
            active:scale-[0.97]
          `}
        >
          <i className="pi pi-download text-xs" />
          {!isMobile && (
            <span className="w-max">{AppConstants.DOWNLOAD_BUTTON_LABEL}</span>
          )}
        </a>

        {/* Hamburger — non-desktop only */}
        {!isDesktop && (
          <Button
            onClick={() => NavbarStore.showMobileMenu(true)}
            aria-label="Open menu"
            className="
              flex items-center justify-center p-3 rounded-lg
              border border-white/[0.08] bg-white/[0.04]
              hover:bg-white/[0.08] hover:border-white/[0.15]
              text-[#a1a1aa] hover:text-white
              transition-all duration-200
            "
          >
            <i className="pi pi-bars text-sm" />
          </Button>
        )}
      </div>
    </nav >
  );
});

export default DesktopNavbarComponent;