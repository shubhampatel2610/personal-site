// ContactForm.tsx
import { observer } from "mobx-react-lite";
import AppConstants from "@/constant/AppConstants";
import ContactStore from "@/store/ContactStore";
import InputTextComponent from "@/components/common/FormComponents/InputTextComponent/InputTextComponent";
import TextAreaComponent from "@/components/common/FormComponents/TextAreaComponent/TextAreaComponent";
import { Button } from "primereact/button";
import Card from "@/components/common/Card/Card";

const ContactForm = observer(() => {
  const handleSendFormData = () => {
    const formData = {
      name: ContactStore.userName,
      phone: ContactStore.userPhoneNo,
      email: ContactStore.userEmail,
      message: ContactStore.userMessage,
    };
    console.log("Form Data Submitted: ", formData);
    ContactStore.setUserName("");
    ContactStore.setUserPhoneNo("");
    ContactStore.setUserEmail("");
    ContactStore.setUserMessage("");
  };

  const submitButtonClasses = "primary-cta w-full flex items-center justify-center gap-2 mt-1";

  return (
    <Card delayMs={100} className="p-3 md:p-5 gap-5">
      <InputTextComponent label={AppConstants.CONTACT_FORM_LABELS.name} value={ContactStore.userName} onChange={(e) => ContactStore.setUserName(e.target.value)} />
      <InputTextComponent label={AppConstants.CONTACT_FORM_LABELS.phone} value={ContactStore.userPhoneNo} onChange={(e) => ContactStore.setUserPhoneNo(e.target.value)} />
      <InputTextComponent label={AppConstants.CONTACT_FORM_LABELS.email} value={ContactStore.userEmail} onChange={(e) => ContactStore.setUserEmail(e.target.value)} />
      <TextAreaComponent label={AppConstants.CONTACT_FORM_LABELS.message} value={ContactStore.userMessage} onChange={(e) => ContactStore.setUserMessage(e.target.value)} />

      <Button onClick={handleSendFormData} className={submitButtonClasses}>
        {AppConstants.CONTACT_FORM_LABELS.submitButton}
        <i className="pi pi-send text-xs" />
      </Button>
    </Card>
  );
});

export default ContactForm;
