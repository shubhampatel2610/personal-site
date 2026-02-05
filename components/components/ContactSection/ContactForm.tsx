import { observer } from "mobx-react-lite";
import InputTextComponent from "@/components/common/FormComponents/InputTextComponent/InputTextComponent";
import "./ContactSection.scss";
import AppConstants from "@/constant/AppConstants";
import ContactStore from "@/store/ContactStore";
import TextAreaComponent from "@/components/common/FormComponents/TextAreaComponent/TextAreaComponent";
import { Button } from "primereact/button";

const ContactForm = observer(() => {
  return (
    <>
      <div className="formContainer">
        <InputTextComponent
          label={AppConstants.CONTACT_FORM_LABELS.name}
          value={ContactStore.userName}
          onChange={(e) => ContactStore.setUserName(e.target.value)}
        />
        <InputTextComponent
          label={AppConstants.CONTACT_FORM_LABELS.phone}
          value={ContactStore.userPhoneNo}
          onChange={(e) => ContactStore.setUserPhoneNo(e.target.value)}
        />
        <InputTextComponent
          label={AppConstants.CONTACT_FORM_LABELS.email}
          value={ContactStore.userEmail}
          onChange={(e) => ContactStore.setUserEmail(e.target.value)}
        />
        <TextAreaComponent
          label={AppConstants.CONTACT_FORM_LABELS.message}
          value={ContactStore.userMessage}
          onChange={(e) => ContactStore.setUserMessage(e.target.value)}
        />
        <div className="buttonContainer">
          <Button
            label={AppConstants.CONTACT_FORM_LABELS.submitButton}
            icon="pi pi-send"
            iconPos="right"
          />
        </div>
      </div>
    </>
  );
});

export default ContactForm;
