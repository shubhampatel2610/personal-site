// ...existing code...
import { makeAutoObservable } from "mobx";

export class NavbarSlice {
  name = "NAVBAR_STORE";
  
  showMobileMenu = false;

  constructor() {
    makeAutoObservable(this);
  }
}