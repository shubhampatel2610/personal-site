import { makeAutoObservable } from "mobx";

export class NavbarSlice {
  isMobileMenuVisible: boolean = false;

  navbgColor: boolean = false;

  activeSection: string = "home";

  constructor() {
    makeAutoObservable(this);
  }

  showMobileMenu(value: boolean) {
    this.isMobileMenuVisible = value;
  }

  setNavBgColor(value: boolean) {
    this.navbgColor = value;
  }

  setActiveSection(sectionId: string) {
    this.activeSection = sectionId;
  }
}

export const NavbarStore = new NavbarSlice();

export default NavbarStore;