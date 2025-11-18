import { NavbarSlice } from "./NavbarStore";
// import { UserSlice } from "./userSlice";

export const NavbarStore = new NavbarSlice();
// export const UserStore = new UserSlice();

export const rootStore = {
  NavbarStore,
  // UserStore,
};

export type RootStore = typeof rootStore;
