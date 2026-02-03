import ExperienceStore from "./ExperienceStore";
import NavbarStore from "./NavbarStore";

export const rootStore = {
  NavbarStore,
  ExperienceStore
};

export type RootStore = typeof rootStore;
