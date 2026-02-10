import { makeAutoObservable } from "mobx";

export class NavbarSlice {
  isMobileMenuVisible: boolean = false;

  navbgColor: boolean = false;

  activeSection: string = "home";

  currentDevice: string = "desktop";

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

  setCurrentDevice(device: string) {
    this.currentDevice = device;
  }
}

export const NavbarStore = new NavbarSlice();

export default NavbarStore;