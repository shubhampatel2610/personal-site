import "./ContactSection.scss";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <>
      <div className="contactMainContainer grid col-12">
        <div className="subContainer sm:col-12 md:col-6">
          <ContactDetails />
        </div>
        <div className="subContainer sm:col-12 md:col-6">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
