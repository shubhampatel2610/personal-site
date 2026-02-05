import ContactStore from "./ContactStore";
import NavbarStore from "./NavbarStore";

export const rootStore = {
  NavbarStore,
  ContactStore
};

export type RootStore = typeof rootStore;
