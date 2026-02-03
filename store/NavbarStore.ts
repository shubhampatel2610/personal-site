import { makeAutoObservable } from "mobx";

export class NavbarSlice {
  isMobileMenuVisible: boolean = false;

  navbgColor: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  showMobileMenu(value: boolean) {
    this.isMobileMenuVisible = value;
  }

  setNavBgColor(value: boolean) {
    this.navbgColor = value;
  }
}

export const NavbarStore = new NavbarSlice();

export default NavbarStore;