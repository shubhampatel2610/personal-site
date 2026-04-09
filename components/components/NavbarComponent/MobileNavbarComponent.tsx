"use client";

import AppConstants from "@/constant/AppConstants";
import NavbarStore from "@/store/NavbarStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const MobileNavbarComponent = observer(() => {
  const overlayClasses = "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease_both]";
  const drawerClasses = "fixed top-0 right-0 z-50 h-full w-72 flex flex-col bg-[#111111] border-l border-white/[0.06] shadow-[−8px_0_40px_rgba(0,0,0,0.6)] animate-[slideInRight_0.3s_cubic-bezier(0.4,0,0.2,1)_both]";
  const headerClasses = "flex items-center justify-between px-3 h-16 border-b border-white/[0.06]";
  const logoRowClasses = "flex items-center gap-2.5";
  const logoMarkClasses = "flex items-center justify-center p-2.5 rounded-md bg-[#3B82F6]/10 border border-[#3B82F6]/20";
  const logoTextClasses = "text-white font-semibold text-sm tracking-tight";
  const closeButtonClasses = "flex items-center justify-center p-2 rounded-lg border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/[0.15] text-[#a1a1aa] hover:text-white transition-all duration-200 cursor-pointer";
  const navClasses = "flex flex-col px-3 py-4 gap-1 flex-1";
  const navLinkBaseClasses = "relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 no-underline animate-[fadeSlideUp_0.3s_ease_both]";
  const navLinkActiveClasses = "text-white bg-white/[0.06] border border-white/[0.08]";
  const navLinkInactiveClasses = "text-[#a1a1aa] hover:text-white hover:bg-white/[0.04]";
  const footerClasses = "px-6 py-5 border-t border-white/[0.06]";
  const footerTextClasses = "text-[#71717a] text-xs tracking-wide";

  return (
    <>
      <div className={overlayClasses} onClick={() => NavbarStore.showMobileMenu(false)} />

      <div className={drawerClasses}>
        <div className={headerClasses}>
          <div className={logoRowClasses}>
            <span className={logoMarkClasses}>
              <i className="pi pi-code text-[#3B82F6] text-xs" />
            </span>
            <span className={logoTextClasses}>{AppConstants.USER_NAME}</span>
          </div>

          <button
            onClick={() => NavbarStore.showMobileMenu(false)}
            aria-label="Close menu"
            className={closeButtonClasses}
          >
            <i className="pi pi-times text-xs" />
          </button>
        </div>

        <nav className={navClasses}>
          {AppConstants.NAVLINKS.map((link, index) => {
            const sectionId = link.url.replace("#", "");
            const isActive = NavbarStore.activeSection === sectionId;
            const linkClasses = `${navLinkBaseClasses} ${isActive ? navLinkActiveClasses : navLinkInactiveClasses}`;

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => NavbarStore.showMobileMenu(false)}
                style={{ animationDelay: `${index * 50 + 100}ms` }}
                className={linkClasses}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-[#3B82F6]" />
                )}
                <span>{link.label}</span>

                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className={footerClasses}>
          <p className={footerTextClasses}>{AppConstants.USER_NAME} · Portfolio</p>
        </div>
      </div>
    </>
  );
});

export default MobileNavbarComponent;