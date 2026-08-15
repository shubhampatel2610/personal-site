"use client";

import AppConstants from "@/constant/AppConstants";
import NavbarStore from "@/store/NavbarStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const MobileNavbarComponent = observer(() => {
  const initials = AppConstants.USER_NAME.slice(0, 2).toUpperCase();

  const overlayClasses = "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease_both]";
  const drawerClasses = "fixed top-0 right-0 z-50 h-full w-72 flex flex-col bg-[var(--surface-1)] border-l border-[var(--border-subtle)] shadow-[-8px_0_40px_rgba(0,0,0,0.6)] animate-[slideInRight_0.3s_cubic-bezier(0.4,0,0.2,1)_both]";
  const headerClasses = "flex items-center justify-between px-3 h-16 border-b border-[var(--border-subtle)]";
  const logoRowClasses = "flex items-center gap-2.5";
  const logoMarkClasses = "flex items-center justify-center px-2 py-1.5 rounded-md bg-[var(--accent-soft)] border border-[var(--accent)]/20";
  const logoMarkTextClasses = "font-mono text-[var(--accent)] text-xs font-medium tracking-tight";
  const logoTextClasses = "font-display text-[var(--site-text)] font-semibold text-sm tracking-tight";
  const closeButtonClasses = "flex items-center justify-center p-2 rounded-md border border-[var(--border-visible)] bg-[var(--surface-2)] hover:border-[var(--accent)]/40 text-[var(--text-muted)] hover:text-[var(--site-text)] transition-all duration-200 cursor-pointer";
  const navClasses = "flex flex-col px-3 py-4 gap-1 flex-1";
  const navLinkBaseClasses = "relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 no-underline animate-[fadeSlideUp_0.3s_ease_both]";
  const navLinkActiveClasses = "text-[var(--site-text)] bg-[var(--surface-2)] border border-[var(--border-visible)]";
  const navLinkInactiveClasses = "text-[var(--text-muted)] hover:text-[var(--site-text)] hover:bg-[var(--surface-2)]";
  const footerClasses = "px-6 py-5 border-t border-[var(--border-subtle)]";
  const footerTextClasses = "font-mono text-[var(--text-faint)] text-xs tracking-wide";

  return (
    <>
      <div className={overlayClasses} onClick={() => NavbarStore.showMobileMenu(false)} />

      <div className={drawerClasses}>
        <div className={headerClasses}>
          <div className={logoRowClasses}>
            <span className={logoMarkClasses}>
              <span className={logoMarkTextClasses}>{`<${initials}/>`}</span>
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
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-[var(--accent)]" />
                )}
                <span>{link.label}</span>

                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
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
