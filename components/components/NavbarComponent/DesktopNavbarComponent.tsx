"use client";

import { useEffect } from "react";
import AppConstants from "@/constant/AppConstants";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import NavbarStore from "@/store/NavbarStore";
import { Button } from "primereact/button";

const DesktopNavbarComponent = observer(() => {
  useEffect(() => {
    const handleScroll = () => {
      NavbarStore.setNavBgColor(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDesktop = NavbarStore.currentDevice === AppConstants.DESKTOP_DEVICE;
  const isMobile = NavbarStore.currentDevice === AppConstants.MOBILE_DEVICE;
  const initials = AppConstants.USER_NAME.slice(0, 2).toUpperCase();

  const navBaseClasses = "w-full px-2 md:px-10 lg:px-16 h-16 flex items-center justify-between transition-all duration-300 ease-in-out";
  const navBgClasses = NavbarStore.navbgColor
    ? "bg-[rgba(20,18,15,0.95)] shadow-[0_1px_40px_rgba(0,0,0,0.6)] border-b border-[var(--border-subtle)]"
    : "bg-transparent";
  const logoLinkClasses = "flex items-center gap-2.5 group select-none";
  const logoMarkClasses = "flex items-center justify-center px-2 py-1.5 rounded-md bg-[var(--accent-soft)] border border-[var(--accent)]/20 group-hover:border-[var(--accent)]/50 transition-all duration-300";
  const logoMarkTextClasses = "font-mono text-[var(--accent)] text-sm font-medium tracking-tight";
  const logoTextClasses = "font-display text-[var(--site-text)] font-semibold text-base tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300";
  const navListClasses = "flex items-center gap-1";
  const navItemBaseClasses = "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out";
  const navItemActiveClasses = "text-[var(--site-text)]";
  const navItemInactiveClasses = "text-[var(--text-muted)] hover:text-[var(--site-text)]";
  const actionGroupClasses = "flex items-center gap-3";
  const buttonBaseClasses = "inline-flex items-center gap-2 rounded-md font-mono text-xs font-medium transition-all duration-200 ease-in-out active:scale-[0.97]";
  const downloadButtonClasses = `${buttonBaseClasses} p-3 md:px-4 md:py-2 bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[var(--accent-hover)]`;
  const hamburgerButtonClasses = "flex items-center justify-center p-3 rounded-md border border-[var(--border-visible)] bg-[var(--surface-1)] hover:border-[var(--accent)]/40 text-[var(--text-muted)] hover:text-[var(--site-text)] transition-all duration-200";

  return (
    <nav className={`${navBaseClasses} ${navBgClasses}`}>
      <Link href="/" className={logoLinkClasses}>
        <span className={logoMarkClasses}>
          <span className={logoMarkTextClasses}>{`<${initials}/>`}</span>
        </span>
        <span className={logoTextClasses}>{AppConstants.USER_NAME}</span>
      </Link>

      {isDesktop && (
        <ul className={navListClasses}>
          {AppConstants.NAVLINKS.map((link) => {
            const sectionId = link.url.replace("#", "");
            const isActive = NavbarStore.activeSection === sectionId;
            const linkClasses = `${navItemBaseClasses} ${isActive ? navItemActiveClasses : navItemInactiveClasses}`;

            return (
              <li key={link.id}>
                <Link href={link.url} className={linkClasses}>
                  {isActive && (
                    <span className="absolute inset-0 rounded-md bg-[var(--surface-2)] border border-[var(--border-visible)]" />
                  )}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)]" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      <div className={actionGroupClasses}>
        <a
          href={AppConstants.DOWNLOAD_CV_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={downloadButtonClasses}
        >
          <i className="pi pi-download text-xs" />
          {!isMobile && <span className="w-max">{AppConstants.DOWNLOAD_BUTTON_LABEL}</span>}
        </a>

        {!isDesktop && (
          <Button
            onClick={() => NavbarStore.showMobileMenu(true)}
            aria-label="Open menu"
            className={hamburgerButtonClasses}
          >
            <i className="pi pi-bars text-sm" />
          </Button>
        )}
      </div>
    </nav>
  );
});

export default DesktopNavbarComponent;
