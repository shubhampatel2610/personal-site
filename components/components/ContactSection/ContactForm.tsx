// ContactForm.tsx
import { observer } from "mobx-react-lite";
import AppConstants from "@/constant/AppConstants";
import ContactStore from "@/store/ContactStore";
import InputTextComponent from "@/components/common/FormComponents/InputTextComponent/InputTextComponent";
import TextAreaComponent from "@/components/common/FormComponents/TextAreaComponent/TextAreaComponent";
import { Button } from "primereact/button";

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

  const formWrapperClasses = "relative flex flex-col gap-5 p-3 md:p-5 rounded-xl bg-[#111111] border border-white/[0.06] animate-[fadeSlideUp_0.5s_ease_0.1s_both]";
  const accentLineClasses = "absolute top-0 left-8 right-8 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent";
  const submitButtonClasses = "w-full flex items-center justify-center gap-2 px-6 py-3 mt-1 rounded-lg text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] border border-[#3B82F6] hover:border-[#2563EB] hover:shadow-[0_0_8px_rgba(59,130,246,0.3)] active:scale-[0.98] transition-all duration-200 cursor-pointer";

  return (
    <div className={formWrapperClasses}>
      <span className={accentLineClasses} />

      <InputTextComponent label={AppConstants.CONTACT_FORM_LABELS.name} value={ContactStore.userName} onChange={(e) => ContactStore.setUserName(e.target.value)} />
      <InputTextComponent label={AppConstants.CONTACT_FORM_LABELS.phone} value={ContactStore.userPhoneNo} onChange={(e) => ContactStore.setUserPhoneNo(e.target.value)} />
      <InputTextComponent label={AppConstants.CONTACT_FORM_LABELS.email} value={ContactStore.userEmail} onChange={(e) => ContactStore.setUserEmail(e.target.value)} />
      <TextAreaComponent label={AppConstants.CONTACT_FORM_LABELS.message} value={ContactStore.userMessage} onChange={(e) => ContactStore.setUserMessage(e.target.value)} />

      <Button onClick={handleSendFormData} className={submitButtonClasses}>
        {AppConstants.CONTACT_FORM_LABELS.submitButton}
        <i className="pi pi-send text-xs" />
      </Button>
    </div>
  );
});

export default ContactForm;