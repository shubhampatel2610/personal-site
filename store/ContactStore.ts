import { makeAutoObservable } from "mobx";

export class ContactSlice {
  constructor() {
    makeAutoObservable(this);
  }

  userName: string = "";

  userEmail: string = "";

  userPhoneNo: string = "";

  userMessage: string = "";

  setUserName(value: string) {
    this.userName = value;
  }

  setUserEmail(value: string) {
    this.userEmail = value;
  }

  setUserPhoneNo(value: string) {
    this.userPhoneNo = value;
  }

  setUserMessage(value: string) {
    this.userMessage = value;
  }
}

export const ContactStore = new ContactSlice();

export default ContactStore;
