import { makeAutoObservable } from "mobx";

export class ExperienceSlice {
  selectedTab: string = "experience";

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedTab(value: string) {
    this.selectedTab = value;
  }
}

export const ExperienceStore = new ExperienceSlice();

export default ExperienceStore;